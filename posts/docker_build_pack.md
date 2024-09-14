# [How-To] Docker Build Pack을 이용한 Mendix App 배포



[TOC]

## 테스트 환경

이 가이드에 있는 단계 수행 전, 사용자가 해야할 작업 목록 제공

- 외부 인터넷 연결이 가능한 환경에서 작업할 것.

  - 폐쇄망인 경우, Linux Repo와 Docker Image Repo 내부 구성 필요

- 서버에 JDK가 설치되어 있을 것.

  - ```bash
    sudo dnf install java-11-openjdk java-11-openjdk-devel
    ```

- OS : Rocky Linux release 8.9 (Green Obsidian)

  - OS 상 git 설치 및 구성되어 있을 것

    ```bash
    $ sudo dnf install git
    ```

- Docker :  20.10.24 (권고 20.10)

- Docker-Compose : 1.29.2

- 애플리케이션 배포를 위해 접속 가능한 DB 준비

  - 현재 문서에는 동일 노드에 postgres 12 버전을 도커로 기동하여 진행.

  

### 참고 사항 

- 도커 기반 배포는 로컬 배포 및 개발 버전 실행 같은 단순 배포 시만 사용. 운영 환경 배포 시에는 Mendix for Private Cloud 환경 사용 권고

> Docker is an open source container technology. With Mendix, you can use it for simple deployments, particularly when running local or development versions of your app. However, it lacks some scaling and integration features.
>
> **Mendix suggests that, if you are planning to deploy to your own cloud platform at scale, a better solution for production apps is to use [Mendix for Private Cloud](https://docs.mendix.com/developerportal/deploy/private-cloud/).** This provides you with structured and tested solutions for integrating with your own cloud infrastructure using comprehensive, automated, native functions, avoiding the need to create your own processes from scratch.
>
> 출처 : [Docker | Mendix Documentation](https://docs.mendix.com/developerportal/deploy/docker-deploy/)

- 구성 시 발생하는 에러는 https://support.mendix.com을 통해 Support Ticket 생성 후 지원받으시기 바랍니다.



## 단계 #1 Docker Repo 구성

```bash
$ sudo dnf config-manager --add-repo=https://download.docker.com/linux/centos/docker-ce.repo
[sudo] password for mxadm:
Adding repo from: https://download.docker.com/linux/centos/docker-ce.repo
$ sudo dnf update
```



## 단계 #2 Docker 및 docker-compose 설치/구성 

```bash
#버전 조회
$ sudo dnf list docker-ce --showduplicates
# 20.10 버전 중 최선 버전 적용
$ sudo dnf install docker-ce-20.10.24-3.el8 --allowerasing
```



```bash
# Docker 사용을 위한 환경 설정
$ sudo systemctl enable docker
Created symlink /etc/systemd/system/multi-user.target.wants/docker.service → /usr/lib/systemd/system/docker.service.
$ sudo systemctl start docker
$ sudo usermod -aG docker $USER
#재로그인 필요
$ docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

```



```bash
# Docker-compose 설치
$ sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
100 12.1M  100 12.1M    0     0  4836k      0  0:00:02  0:00:02 --:--:-- 15.6M
$ sudo chmod +x /usr/local/bin/docker-compose
$ docker-compose --version
docker-compose version 1.29.2, build 5becea4c
```



## 단계 #3 Docker buildpack 설치 및 구성

OS 내에 작업 디렉토리 생성 후 다음 과정 수행

```bash
$ git clone --branch latest --config core.autocrlf=false https://github.com/mendix/docker-mendix-buildpack
Cloning into 'docker-mendix-buildpack'...
remote: Enumerating objects: 1232, done.
remote: Counting objects: 100% (329/329), done.
remote: Compressing objects: 100% (133/133), done.
remote: Total 1232 (delta 201), reused 293 (delta 182), pack-reused 903
Receiving objects: 100% (1232/1232), 303.85 KiB | 1.20 MiB/s, done.
Resolving deltas: 100% (702/702), done.
$ cd docker-mendix-buildpack/
# 환경 점검 : 테스트 App Build 및 배포 테스트
$ tests/integrationtest.sh 
(중략)
mendixapp_1  | INFO: MENDIX-INTERNAL: Metrics are disabled.
        <title>Mendix</title>
        <title>Mendix</title>
test.sh [TEST SUCCESS] App is reachable for tests/docker-compose-postgres.yml
Killing tests_mendixapp_1 ...
Killing tests_mendixapp_1 ... done
Killing tests_db_1        ... done
```

Docker build pack 클론 시 디렉토리 구조

![스크린샷 2024-07-18 오전 10.41.27](/Users/spock/Library/CloudStorage/OneDrive-MendixTechnologyB.V/그림/스크린샷/스크린샷 2024-07-18 오전 10.41.27.png)



확인을 위해 tests_mendix_app_1과 tests_db_1 구동 후 접속 시 다음과 같은 화면이 출력

<img src="/Users/spock/Library/CloudStorage/OneDrive-MendixTechnologyB.V/그림/스크린샷/스크린샷 2024-03-28 오전 10.52.52.png" alt="tests_mendix_app_1 접속화면" style="zoom: 67%;" />







## 단계 #4 대상 애플리케이션 배포

Deployment Package를 사용, 보다 손쉽게 배포. (소스코드 복사 과정 단순화). Application Security는 Production으로 설정 필요.

1. Deployment package (mda) 생성

   1. App --> Create Deployment Package 선택 
      <img src="/Users/spock/Library/CloudStorage/OneDrive-MendixTechnologyB.V/그림/스크린샷/스크린샷 2024-04-01 오전 10.20.18.png" alt="스크린샷 2024-04-01 오전 10.20.18" style="zoom:50%;" />

   2. Deployment Packaget 생성. Git과 연동되지 않은 경우 아래와 같이 화면 출력

   <img src="/Users/spock/Library/CloudStorage/OneDrive-MendixTechnologyB.V/그림/스크린샷/스크린샷 2024-04-01 오전 10.23.16.png" alt="스크린샷 2024-04-01 오전 10.23.16" style="zoom:50%;" />

   실제 파일은 애플리케이션 디렉토리 내  `release` 디렉토리에 저장
   <img src="/Users/spock/Library/CloudStorage/OneDrive-MendixTechnologyB.V/그림/스크린샷/스크린샷 2024-04-01 오전 10.25.20.png" alt="스크린샷 2024-04-01 오전 10.25.20" style="zoom:50%;" />

   

2. mda 파일 다운로드 시 mpk 파일로 확장자 변경

   ```bash
   $ cp REST_Consume_20240401_1023.mda downloads/application.mpk
   ```

   

3. mpk 파일을 작업 대상 디렉토리로 압축 해제

   ```bash
   $ unzip downloads/application.mpk -d target_app/
   ```

   

작업 디렉토리상에 동일 구조로 압축 해제 후, 이미지 빌드

```bash
# 애플리케이션 이미지 빌드
# 명령어 예제
$ docker build --build-arg BUILD_PATH="{relative-mendix-project-location}" -t {image name} .
# 실제 수행 명령 (관련 옵션은 아래쪽 링크 상에서 확인 가능)
$ docker build --build-arg BUILD_PATH=target_app --build-arg BUILDER_ROOTFS_IMAGE=mendix-rootfs:builder --build-arg ROOTFS_IMAGE=mendix-rootfs:app -t powhapki/mendix-demo:0.2 .
# 도커 구동 
 # 명령어 예제
$ docker run -it \
  -e ADMIN_PASSWORD=Password1! \
  -e DATABASE_ENDPOINT=postgres://username:password@host:port/mendix \
  mendix/mendix-buildpack:v1.2  
 # 실제 수행 명령 : 수행 시 ADMIN 비밀번호는 8자리 이상으로 설정해야 배포가능.
$ docker run -d -p 8080:8080 --name mendix-demo -e ADMIN_PASSWORD=Password1234! -e DATABASE_ENDPOINT=postgres://mendix:mendix@127.0.0.1:5432/test_db powhapki/mendix-demo:0.2

# DB 접속 주소는 Docker network상의 IP 주소 지정 필요 (데모 환경은 Bridge 네트워크 사용)
docker run -d -p 8080:8080 --name rest-demo -e ADMIN_PASSWORD=Password1234! -e DATABASE_ENDPOINT=postgres://mendix:mendix@172.17.0.2:5432/test_db powhapki/rest-consume:0.1

```



별도의 Git서버를 사용하는 경우, docker build pack 디렉토리 내에 clone 후 직접 컨테이너 이미지 생성 가능 ---> 별도의 MDA 또는 MPK 생성 과정 불필요 --> 작업 과정에서 MPK,MDA 파일 생성 --> deployment 디렉토리만 있으면 됨 (단, Production 모드로 Security 설정필요)
![스크린샷 2024-07-18 오전 11.40.40](/Users/spock/Library/CloudStorage/OneDrive-MendixTechnologyB.V/그림/스크린샷/스크린샷 2024-07-18 오전 11.40.40.png)



## 참고 자료

Links :

1. [GitHub - mendix/docker-mendix-buildpack at latest](https://github.com/mendix/docker-mendix-buildpack/tree/latest)
2. Docker Deploy : [Docker | Mendix Documentation](https://docs.mendix.com/developerportal/deploy/docker-deploy/)
3. [How to Run a Mendix Docker Image](https://docs.mendix.com/developerportal/deploy/run-mendix-docker-image/)
4. [Create Deployment Package | Mendix Documentation](https://docs.mendix.com/refguide/create-deployment-package-dialog/) 