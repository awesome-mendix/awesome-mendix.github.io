# [tip] Partner Meetup 


[TOC]

## 설치 옵션과 라이센스 변경

- On-Prem or Cloud

  - On-Prem : Windows or Linux

    - OS 직접 설치 | 컨테이너

    - Linux에 m2ee 기반 설치 : 신규 고객은 더 이상 적용 불가 

      - 권장 구성 : Mendix for Private Cloud (권장) 또는 Docker

        > 참고 사항 : [Deployment issue with application running in Linux m2ee environment – Mendix](https://support.mendix.com/hc/en-us/articles/14580086012444-Deployment-issue-with-application-running-in-Linux-m2ee-environment)
        >
        > <img src="/Users/spock/Library/CloudStorage/OneDrive-MendixTechnologyB.V/그림/스크린샷/스크린샷 2024-09-06 오전 7.58.19.png" alt="스크린샷 2024-09-06 오전 7.58.19" style="zoom:50%;" />
        >
        > 
        >
        > **M2EE 대안 구성 : Mendix for Private Cloud, Docker**

  

  - Cloud : 관리형 | 설치형
    - 관리형 : Mendix Cloud, Mendix Cloud Dedicated, SAP BTP

    - 설치형 : Mendix for Private Cloud (AWS/Azure/GCP 등) 
      - DevOps 기능 + Market Place 필요 시, Private Mendix Platform 추가 구성

    - 모드 : Connected , Standalone(Disconnected)
      - Connected 장점 : Mendix Platform 서비스 활용 (Team Server, Build Server, Package Repository)

      - Standalone 장점 : 자체 Platform 서비스 활용 (SCM, Pipeline 등)

- PoC의 경우, Mendix Cloud 권장

  

## 서비스 관리 주체  

[Support for Different Deployment Stratgies](https://docs.mendix.com/support/#support-by-strategy)

[Decision Guide | Mendix Evaluation Guide](https://www.mendix.com/evaluation-guide/deployment/flexibility/decision-guide/)

|                                      | Mendix Cloud | Mendix Cloud Dedicated | Mendix Cloud for Government | SAP BTP  | StackIT  | Mendix for Private Cloud - Connected | Mendix for Private Cloud - Standalone | Mendix for Server-based |
| :----------------------------------- | :----------: | :--------------------: | :-------------------------: | :------: | :------: | :----------------------------------: | :-----------------------------------: | :---------------------: |
| Ownership                            |    Mendix    |         Mendix         |           Mendix            | Partner  | Partner  |               Customer               |               Customer                |        Customer         |
| Maintenance                          |    Mendix    |         Mendix         |           Mendix            | Partner  | Partner  |               Customer               |               Customer                |        Customer         |
| Hosted by Mendix                     |      ✔️       |           ✔️            |              ✔️              |          |          |                                      |                                       |                         |
| Hosted by Partner                    |              |                        |                             |    ✔️     |    ✔️     |                                      |                                       |                         |
| Self-hosted by customer              |              |                        |                             |          |          |                  ✔️                   |                   ✔️                   |            ✔️            |
| Connected to Mendix Platform*        |      ✔️       |           ✔️            |              ✔️              |    ✔️     |    ✔️     |                  ✔️                   |                                       |                         |
| High-availability                    |    Mendix    |         Mendix         |           Mendix            | Customer | Customer |               Customer               |               Customer                |        Customer         |
| Disaster Recovery                    |    Mendix    |         Mendix         |           Mendix            | Customer | Customer |               Customer               |               Customer                |        Customer         |
| Support for AWS deployment           |      ✔️       |           ✔️            |                             |    ✔️     |          |                  ✔️                   |                   ✔️                   |                         |
| Support for Azure deployment         |              |                        |                             |    ✔️     |          |                  ✔️                   |                   ✔️                   |                         |
| Support for GCP deployment           |              |                        |                             |          |          |                  ✔️                   |                   ✔️                   |                         |
| Support for Kubernetes deployment    |      ✔️       |           ✔️            |              ✔️              |          |          |                  ✔️                   |                   ✔️                   |                         |
| Support for OpenShift deployment     |              |                        |                             |          |          |                  ✔️                   |                   ✔️                   |                         |
| Resource management                  |    Mendix    |         Mendix         |           Mendix            | Partner  | Partner  |                Mendix                |               Customer                |        Customer         |
| Environment operations               |    Mendix    |         Mendix         |           Mendix            | Partner  | Partner  |                Mendix                |               Customer                |        Customer         |
| Configuration management             |    Mendix    |         Mendix         |           Mendix            | Partner  | Partner  |                Mendix                |               Customer                |        Customer         |
| Backup management                    |    Mendix    |         Mendix         |           Mendix            | Customer | Customer |               Customer               |               Customer                |        Customer         |
| Log Management                       |    Mendix    |         Mendix         |           Mendix            | Customer | Customer |               Customer               |               Customer                |        Customer         |
| Monitoring                           |    Mendix    |         Mendix         |           Mendix            | Customer | Customer |               Customer               |               Customer                |        Customer         |
| Deployment UI                        |    Mendix    |         Mendix         |           Mendix            | Customer | Customer |                Mendix                |               Customer                |        Customer         |
| CI/CD using MxPipelines              |      ✔️       |           ✔️            |                             |          |          |                                      |                                       |                         |
| CI/CD using Deploy APIs              |      ✔️       |           ✔️            |                             |          |          |                  ✔️                   |                                       |                         |
| CI/CD using MxBuild                  |      ✔️       |           ✔️            |              ✔️              |    ✔️     |    ✔️     |                  ✔️                   |                   ✔️                   |            ✔️            |
| 2FA (re)authentication               |      ✔️       |           ✔️            |                             |          |          |                                      |                                       |                         |
| Permission management                |    Mendix    |         Mendix         |           Mendix            | Customer | Customer |               Customer               |               Customer                |        Customer         |
| Access restrictions                  |    Mendix    |         Mendix         |           Mendix            | Customer | Customer |               Customer               |               Customer                |        Customer         |
| Custom domains                       |    Mendix    |         Mendix         |           Mendix            |  Mendix  | Customer |               Customer               |               Customer                |        Customer         |
| Audit logging                        |    Mendix    |         Mendix         |           Mendix            |  Mendix  | Customer |               Customer               |               Customer                |        Customer         |
| Web Application Firewall             |    Mendix    |         Mendix         |           Mendix            | Customer | Customer |               Customer               |               Customer                |        Customer         |
| Hardending                           |    Mendix    |         Mendix         |           Mendix            | Customer | Customer |                Mendix                |                Mendix                 |        Customer         |
| Penetration testing                  |    Mendix    |         Mendix         |           Mendix            | Customer | Customer |               Customer               |               Customer                |        Customer         |
| Manage Entitlements                  |      ✔️       |                        |                             |          |          |                                      |                                       |                         |
| Manage (Company) App Projects        |      ✔️       |           ✔️            |              ✔️              |    ✔️     |    ✔️     |                  ✔️                   |                   ✔️                   |            ✔️            |
| Manage (Company) Cloud Resources     |      ✔️       |           ✔️            |                             |          |          |                                      |                                       |                         |
| Monitor App Health                   |      ✔️       |           ✔️            |                             |          |          |                                      |                                       |                         |
| Manage Platform users                |      ✔️       |           ✔️            |              ✔️              |    ✔️     |    ✔️     |                  ✔️                   |                   ✔️                   |            ✔️            |
| Manage App End Users                 |     ✔️***     |          ✔️***          |            ✔️***             |   ✔️***   |   ✔️***   |                 ✔️***                 |                                       |                         |
| Software Bill of Material Generation |      ✔️       |           ✔️            |              ✔️              |    ✔️     |    ✔️     |                  ✔️                   |                   ✔️                   |            ✔️            |
| Software Composition Visibility      |      ✔️       |           ✔️            |              ✔️              |          |          |                                      |                                       |                         |
| Approve Private Marketplace content  |      ✔️       |           ✔️            |              ✔️              |    ✔️     |    ✔️     |                  ✔️                   |                   ✔️                   |            ✔️            |
| Recommend Public Marketplace content |      ✔️       |           ✔️            |              ✔️              |    ✔️     |    ✔️     |                  ✔️                   |                   ✔️                   |            ✔️            |
| Advanced Audit Trail                 |      ✔️       |           ✔️            |             ✔️**             |   ✔️**    |   ✔️**    |                 ✔️**                  |                  ✔️**                  |           ✔️**           |
| Portfolio Management                 |      ✔️       |           ✔️            |              ✔️              |    ✔️     |    ✔️     |                  ✔️                   |                   ✔️                   |            ✔️            |
| Project Management                   |      ✔️       |           ✔️            |              ✔️              |    ✔️     |    ✔️     |                  ✔️                   |                   ✔️                   |            ✔️            |
| Requirement Management               |      ✔️       |           ✔️            |              ✔️              |    ✔️     |    ✔️     |                  ✔️                   |                   ✔️                   |            ✔️            |
| Collaboration channels               |      ✔️       |           ✔️            |              ✔️              |    ✔️     |    ✔️     |                  ✔️                   |                   ✔️                   |            ✔️            |
| Marketplace                          |      ✔️       |           ✔️            |              ✔️              |    ✔️     |    ✔️     |                  ✔️                   |                   ✔️                   |            ✔️            |

\* Connecting to the Mendix Platform will enable platform deployment features.

** If outgoing traffic is allowed.

*** End-User usage is monitored for this deployment. It can be made available to customers through their dedicated Customer Success Managers.



## Mendix 기본 Architecture

![image-20240905225454703](/Users/spock/Library/Application Support/typora-user-images/image-20240905225454703.png)





## Mendix Cloud

### Mendix Cloud Architecture

AWS 인프라에 Cloud Foundry 기반으로 배포. aPaaS 제공

![img](https://www.mendix.com/wp-content/uploads/deploy-cloud-arch-temp.png)



### Cloud Region

![image-20240906090419272](/Users/spock/Library/Application Support/typora-user-images/image-20240906090419272.png)

### Mendix Cloud 의 Free App

[Mendix Cloud - Free App](https://docs.mendix.com/developerportal/deploy/mendix-cloud-deploy/#free-app)

| 특징                        | 무료 애플리케이션                                            | 라이선스 앱                                                  |
| --------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 사용자 수                   | 일반 무료 앱의 사용자 수는 무제한입니다. 다른 클라우드 플랫폼(예: SAP BTP)에서 실행되는 라이선스가 없는 앱에 대한 동시 사용자 6명 | [요금제](https://docs.mendix.com/developerportal/deploy/mendix-cloud-deploy/#plans) 에 따라 다름 |
| 절전 모드                   | 약 1시간 동안 활동이 없으면 절전 모드로 들어가고 사용자가 액세스하면 자동으로 다시 시작됩니다. 앱이 절전 모드에 있는 동안 모든 데이터는 유지됩니다. | 절전 모드가 없습니다.                                        |
| 디스크 스토리지             | 0.5GiB 데이터베이스 및 1GiB 파일                             | 요금제에 따라 다름                                           |
| 앱 vCPU                     | 0.5                                                          | 요금제에 따라 다름                                           |
| 예정된 이벤트               | 실행되지 않음                                                | Mendix Portal에서 실행 및 구성 가능                          |
| 환경                        | Mendix 클라우드 의 단일 환경                                 | 프로덕션, 승인, 테스트 등 하나 이상의 환경이 있는 클라우드의 노드입니다. |
| 전개                        | Mendix Studio Pro 에서만 클라우드로 배포 가능                | Mendix Studio Pro, Mendix Portal 또는 API 통해 배포 가능     |
| 맞춤 도메인                 | 사용할 수 없습니다                                           | Mendix Portal에서 구성 가능                                  |
| 액세스 제한 프로필          | 사용할 수 없습니다                                           | Mendix Portal에서 구성 가능                                  |
| 클라이언트 인증서           | 사용할 수 없습니다                                           | Mendix Portal에서 구성 가능                                  |
| 수동으로 앱 시작 및 중지    | 사용할 수 없습니다                                           | Mendix 포털에서 사용 가능                                    |
| 상수                        | Studio Pro 에서 정의                                         | Mendix Portal의 환경 변수를 통해 구성 가능                   |
| 런타임 설정                 | 사용할 수 없습니다                                           | Mendix Portal의 런타임 및 설정을 통해 구성 가능              |
| 확장성                      | 단 하나의 인스턴스와 고정된 양(1GiB)의 메모리                | Mendix 포털에서 구성 가능                                    |
| 측정항목, 경고 및 로그 수준 | 사용할 수 없습니다                                           | 사용 가능                                                    |
| 이전 앱 로그                | 사용 불가; 라이브 로그만 사용할 수 있습니다.                 | 사용 가능                                                    |
| 백업                        | 매일 수행되며 수동으로 실행할 수 없습니다. 최대 2주 동안 보관 가능 | 매일 수행되며 수동으로 생성할 수도 있습니다. 귀하의 계획에 따라 최대 1년 동안 보관됩니다. |
| 지원하다                    | 지원 없음                                                    | 라이센스 옵션에 따라 다름                                    |



### PoC 및 고객 사례

- 클라우드의 경우, Cloud Resource Pack을 환경별로 구매해야 함.

  - [Mendix Cloud - Cloud Resource Pack](https://docs.mendix.com/developerportal/deploy/mendix-cloud-deploy/#resource-pack)
  - 고객사 환경이 Dev/Stage/QA/Prod 로 4개의 환경이라면, 4개의 Cloud Resource Pack 구매
  - Cloud Resouce Pack은 모두 동일 사양으로 구매

  | Pack                                           | App RAM | App vCPU | DB RAM  | DB vCPU | DB Storage | File Storage |
  | ---------------------------------------------- | ------- | -------- | ------- | ------- | ---------- | ------------ |
  | XS21                                           | 1 GiB   | 0.25     | 1 GiB   | 2       | 5 GiB      | 10 GiB       |
  | S21, S21 Premium                               | 2 GiB   | 0.5      | 2 GiB   | 2       | 10 GiB     | 20 GiB       |
  | M21, M21 Premium                               | 4 GiB   | 1        | 4 GiB   | 2       | 20 GiB     | 40 GiB       |
  | L21, L21 Premium                               | 8 GiB   | 2        | 8 GiB   | 2       | 40 GiB     | 80 GiB       |
  | XL21, XL21 Premium, XL21 Premium Plus          | 16 GiB  | 4        | 16 GiB  | 4       | 80 GiB     | 160 GiB      |
  | XXL21, XXL21 Premium, XXL21 Premium Plus       | 32 GiB  | 8        | 32 GiB  | 4       | 160 GiB    | 320 GiB      |
  | XXXL21, XXXL21 Premium, XXXL21 Premium Plus    | 64 GiB  | 16       | 64 GiB  | 8       | 320 GiB    | 640 GiB      |
  | XXXXL21, XXXXL21 Premium, XXXXL21 Premium Plus | 128 GiB | 32       | 128 GiB | 16      | 640 GiB    | 1280 GiB     |

  - 아래 그림과 같이 Application Runtime + DB + File Storage가 함께 구성.

    <img src="/Users/spock/Library/CloudStorage/OneDrive-MendixTechnologyB.V/그림/스크린샷/스크린샷 2024-05-21 오전 8.37.34.png" alt="스크린샷 2024-05-21 오전 8.37.34" style="zoom: 80%; align=center" />

- 환경별로 사용자 Permission 설정 필요
  ![스크린샷 2024-09-06 오전 9.25.49](/Users/spock/Library/CloudStorage/OneDrive-MendixTechnologyB.V/그림/스크린샷/스크린샷 2024-09-06 오전 9.25.49.png)

  - 개별 권한은 다음과 같은 기능을 수행할 수 있습니다.

  | 권한 명              | 수행 기능/동작                                               | 기타                                                         |
  | -------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
  | Manage Permissions   | 팀원에게 부여된 권한을 변경                                  | Technical Contact만 해당 권한을 팀원에게 부여 가능           |
  | Transport Rights     | 환경 별로 애플리케이션을 노드에 배포<br />신규 배포 패키ㅌ지 생성/애플리케이션 Start/Stop 등 기능 포함 (환경별 상수, 이벤트 설정 등) |                                                              |
  | Access to Backups    | 환경별 Backup에 대한 접근 권한 (생성, 조회, 다운로드, 복구)  |                                                              |
  | Receive Alerts       | 알림 트리거 시 이메일을 수신<br />알림이 트리거 되는 상황<br />- 앱이 예기치 않게 오프라인이 되는 경우<br />- 애플리케이션 로그에 "Critical" 메시지가 출력되는 경우<br />- 상태 점검(Health Check)에 실패한 경우<br />- 인프라 장애가 발생한 경우 |                                                              |
  | API Rights           | Deploy API를 사용, 환경에 접근 가능                          | 2FA 인증이 필요하지 않음 --> 가동계는 비할성화(기본 설정)<br />BackUp 접근 시 API를 사용하고자 하면, API Rightis 부여 필요 |
  | Access to Monitoring | Developer Portal의  애플리케이션 metric, logs와 alert 조회 가능 |                                                              |

  

- Technical Contact

  - [App Roles - Technical Contact](https://docs.mendix.com/developerportal/general/app-roles/#technical-contact)
  - Application 배포 환경 설정 관리, Application 당 한명의 Technical Contact 지정
  - 필요 시 `App > Deployment > Environments > Permissions` 탭에서 변경 가능
    ![스크린샷 2024-09-06 오전 9.31.36](/Users/spock/Library/CloudStorage/OneDrive-MendixTechnologyB.V/그림/스크린샷/스크린샷 2024-09-06 오전 9.31.36.png)

- Free App 구성 시 연동 해제 후 PoC 환경 연결 필요.

  - 무료 애플리케이션 연결을 해제하려면 다음을 수행.

    1. [앱](https://sprintr.home.mendix.com/) 에서 연결을 해제하려는 앱의 [환경](https://docs.mendix.com/developerportal/deploy/environments/) 페이지로 이동.

    2. 페이지에 다음 메시지가 표시되면 앱이 현재 노드에 연결되어 있지 않은 것. 이 경우 [라이센스 노드에 앱 연결](https://docs.mendix.com/developerportal/deploy/licensing-apps/#connect-app) 섹션으로 바로 이동.

       ![img](https://docs.mendix.com/attachments/deployment/mendix-cloud-deploy/licensing-apps/link-node.png)

    3. **앱 연결 해제 를** 클릭.

       ![img](https://docs.mendix.com/attachments/deployment/mendix-cloud-deploy/licensing-apps/unlink-free-app.png)

    4. **예, 모든 데이터를 삭제하고 이 앱의 연결을 해제** 하여 확인을 클.

       ![img](https://docs.mendix.com/attachments/deployment/mendix-cloud-deploy/licensing-apps/confirm-unlink.png)

    5. 메시지가 나타나면 [이중 인증](https://docs.mendix.com/developerportal/deploy/two-factor-authentication/) 으로 본인을 인증. 이제 앱이 무료 애플리케이션 환경에서 연결 해제.

    

  - Mendix Cloud와 고객사 환경 연동 시, Mendix Cloud의 Outgoing IP를 고객사 환경에 접속 가능하도록 설정 필요.

    - [Mendix IP Addresses | Mendix Documentation](https://docs.mendix.com/developerportal/deploy/mendix-ip-addresses/#outgoing)
    - 다음 IP 주소 적용 (Mendix Cloud Asia Pacific - Seoul)
      `3.35.61.175` `3.35.153.90` `43.200.98.224` 



## Mendix for Private Cloud

### Architecture

Mendix Operator는 기존에 NameSpace 당 설치(Standard 모드). 현재 Cluster당 하나를 설치하는 Global 모드도 지원

#### 1. Connected

![img](https://docs.mendix.com/attachments/deployment/private-cloud/mx4pc-architecture.png)

#### 2. Standalone

![img](https://docs.mendix.com/attachments/deployment/private-cloud/mx4pc-standalone-architecture.png)

### R&R of Mendix for Private Cloud

![img](https://www.mendix.com/wp-content/uploads/deploy-responsibility-matrix-temp.jpg)

- K8S 및 기반 인프라, 플랫폼은 고객사에게 제공하고 운영

- Operator와 Agent, PCLM만 Mendix에게 책임




### PoC 및 고객 사례

- On AWS 

  - ELB를 Ingress로 사용, Connected Mode, Team Server 사용

  - Application 배포 시 Pod 내에 2개의 Container로 구성

    ![스크린샷 2024-09-06 오전 10.54.02](/Users/spock/Library/CloudStorage/OneDrive-MendixTechnologyB.V/그림/스크린샷/스크린샷 2024-09-06 오전 10.54.02.png)

  - NameSpace 내에 아래와 같이 애플리케이션 배포
    ![스크린샷 2024-09-06 오전 10.59.19](/Users/spock/Library/CloudStorage/OneDrive-MendixTechnologyB.V/그림/스크린샷/스크린샷 2024-09-06 오전 10.59.19.png)

    - 기본적을 MendxiAPP_IOD-master-***** 형태로 Application이 배포
    - Scaling 시 slave pod가 추가

  - Technical Contact 과 Cluster Admin

    - Cluster Admin만 Prod환경(NameSpace)에 배포 가능

    - Cloud Portal > Deployment > Private Cloud에서 대상 클러스터 선택 > 해당 NameSpace 선택 후 변경

      ![스크린샷 2024-09-06 오전 11.54.25](/Users/spock/Library/CloudStorage/OneDrive-MendixTechnologyB.V/그림/스크린샷/스크린샷 2024-09-06 오전 11.54.25.png)

  - 공식 문서에 언급되지 않는 추가 설정 필요.

    - 대상 : OperatorConfiguration

      - [Creating a Private Cloud Cluster - Endpoint (Network) Configuration](https://docs.mendix.com/developerportal/deploy/private-cloud-cluster/#advanced-network-settings)

      ```yaml
      apiVersion: privatecloud.mendix.com/v1alpha1
      kind: OperatorConfiguration
      # ...
      # omitted lines for brevity
      # ...
      spec:
        # Endpoint (Network) configuration
        endpoint:
          # Endpoint type: ingress, openshiftRoute or service
          type: ingress
          # Ingress configuration: used only when type is set to ingress
          ingress:
            # Optional, can be omitted: annotations which should be applied to all Ingress Resources
            annotations:
              # default annotation: allow uploads of files up 500 MB in the NGINX Ingress Controller
              nginx.ingress.kubernetes.io/proxy-body-size: 500m
              # example: use the specified cert-manager ClusterIssuer to generate TLS certificates with Let's Encrypt
              cert-manager.io/cluster-issuer: staging-issuer
              # example: deny access to /rest-doc
              nginx.ingress.kubernetes.io/configuration-snippet: |
                location /rest-doc {
                  deny all;
                  return 403;
                }          
            # App URLs will be generated for subdomains of this domain, unless an app is using a custom appURL
            domain: mendix.example.com
            # Enable or disable TLS
            enableTLS: true
            # Optional: name of a kubernetes.io/tls secret containing the TLS certificate
            # This example is a template which lets cert-manager to generate a unique certificate for each app
            tlsSecretName: '{{.Name}}-tls'
            # Optional: specify the Ingress class name
            ingressClassName: alb
            # Optional, can be omitted : specify the Ingress path
            path: "/"
            # Optional, can be omitted : specify the Ingress pathType
            pathType: ImplementationSpecific
      # ...
      # omitted lines for brevity
      # ...
      ```

    - 내용: ALB 및 AWS 환경 (화면 캡쳐 및 링크)

      ```yaml
        endpoint:
          ingress:
            annotations:
              alb.ingress.kubernetes.io/backend-protocol: HTTP
              alb.ingress.kubernetes.io/certificate-arn: arn:aws:acm:ap-northeast-2:992382647108:certificate/5b4df13f-b6f0-479c-ad6f-97dec5bfe4e3
              alb.ingress.kubernetes.io/inbound-cidrs: 0.0.0.0/0
              alb.ingress.kubernetes.io/scheme: internet-facing
              alb.ingress.kubernetes.io/security-groups: sg-0d677247295f44271,sg-0812eb1ccddd23a8d,
                sg-0eb5762397c62d869
              alb.ingress.kubernetes.io/subnets: subnet-0654abaac99ac6414, subnet-0ec9d7b8ef421f94a
              alb.ingress.kubernetes.io/target-type: ip
              kubernetes.io/ingress.class: alb
            domain: cusotmer_domain.com
            enableTLS: true
            path: /*
          type: ingress
      ```

      - 고객사별로 상이한 환경에 따라 아래 링크 상의 내용을 참고하여 annotation 추가 필요
        [Welcome - AWS Load Balancer Controller (kubernetes-sigs.github.io)](https://kubernetes-sigs.github.io/aws-load-balancer-controller/v2.8/)

- On Azure

  - Nginx를 Ingress로 사용, Standard mode, GitLab 사용, Jenkins 기반 배포 파이프 라인

  - Java Heap Size 설정 

    ```yaml
     runtime: # Configuration of the Mendix Runtime
       # 중략
        # All custom Mendix Runtime parameters go here, in JSON format; validated and applied by the mx-m2ee-sidecar container
        customConfiguration: |-
          {
            "ApplicationRootUrl": "https://myapp1-dev.mendix.example.com",
            "JAVA_TOOL_OPTIONS" : "-Xms16G -Xmx16G"  
          }  
    ```

    

- 공통

  - SessionTimeout 설정 관련

  - [Advanced Custom Settings in Mendix Runtime | Mendix Documentation](https://docs.mendix.com/refguide/tricky-custom-runtime-settings/)

  - 사용자 Activity가 없을 때 특정 시간이 지나면 자동 로그아웃 가능?

    - SessionTimeout 설정만으로 가능? - Local Test  시

    - Cloud 사용 시 아래와 같이 설정 필요 : 

      ![스크린샷 2024-09-06 오전 11.44.58](/Users/spock/Library/CloudStorage/OneDrive-MendixTechnologyB.V/그림/스크린샷/스크린샷 2024-09-06 오전 11.44.58.png)

      | EnableKeepAlive              | false (기본값 true)                           |
      | ---------------------------- | --------------------------------------------- |
      | SessionTimeout               | 밀리세컨드 단위 (기본 10분)                   |
      | ClusterManagerActionInterval | 밀리세컨드 단위(기본 SessionTimeout값의 절발) |

      - SessionTimeout + ClusterManagerActionInterval 를 원하는 로그 아웃 시간으로 설정. 위의 예제는 10분 후 로그아웃되는 설정.



 ## On-Prem : Docker 

### Architecture

![스크린샷 2024-09-06 오전 10.33.37](/Users/spock/Library/CloudStorage/OneDrive-MendixTechnologyB.V/그림/스크린샷/스크린샷 2024-09-06 오전 10.33.37.png)



### Docker Image 만들기

- Docker Build Pack  : [[howto] Docker buildpack 사용하기,v1.md]([howto] Docker buildpack 사용하기,v1.md) 

- Docker Build Pacl vs. Mendix Operator

  ![img](https://docs.mendix.com/attachments/deployment/docker-deploy/dockerbuildpack-vs-mxoperator.png)

  - 주의 사항

    1. Docker로 운영 : On-Prem License로 가능. 
    2. Mendix Operator로 운영: Mendix for Private Cloud 라이센스 필요.

    

### PoC 및 고객 사례

- 내부 업무용 Dashboard 

  - Linux, Docker, GitLab EE,  외부 DB(Informix)에서 데이터 조회 후 Dashboard 출력

  - Studio Pro 10.12.1 (MTS) - JDK 21버전 최초 사용

    - JDK 버전 이슈 : Studio Pro vs. 서버 (21 vs. 11)  : ** 배포 서버와 동일 버전 사용 필요**. 11버전으로 다운그레이드

  - Heap Size 등 환경 변수 설정

    - Java Option이나 JAVA_TOOL_OPTIONS로 `-Xms -Xmx`이 적용되지 않음
    - CF Build Pack에서 사용하는 환경 변수값으로 적용 가능

    ```bash
    docker run --restart always -d -it --name 컨테이너_이름 -p 8087:8080 \
     -e ADMIN_PASSWORD=Password12345! \
     -e MXRUNTIME_DatabaseType=PostgreSQL \
     -e MXRUNTIME_DatabaseUserName=admin \
     -e MXRUNTIME_DatabasePassword=1234qwer \
     -e MXRUNTIME_DatabaseJdbcUrl=jdbc:postgresql://172.17.0.1:5432/postgres \
     -e MXRUNTIME_DatabaseName=postgres \
     -e MXRUNTIME_ConnectionPoolingMaxActive=50 \
     -e MXRUNTIME_ConnectionPoolingMaxIdle=50 \
     -e HEAP_SIZE='32G' \
     -e MAX_METASPACE_SIZE='16G' \
     -e SCHEDULED_EVENTS=ALL \
     -e LOGGING_CONFIG='{"Core": "INFO"}' \
     -e LICENSE_ID=UUID_형태의 값 \
     -e LICENSE_KEY=L(중략)0K \
     컨테이너_이미지_이름
    ```

  - [mendix/docker-mendix-buildpack at latest (github.com)](https://github.com/mendix/docker-mendix-buildpack/tree/latest)

  - [mendix/cf-mendix-buildpack: The buildpack to run a Mendix app on any Cloud Foundry based platform (github.com)](https://github.com/mendix/cf-mendix-buildpack/)

  - [Java Memory Usage | Mendix Documentation](https://docs.mendix.com/refguide/java-memory-usage/#metaspace-and-code-cache)

    JVM 내의 클래스와 라이브러리는 메타스페이스에 할당됩니다. 이것은 네이티브 메모리의 별도 부분입니다. 메타스페이스에 할당된 메모리는 상당히 정적으로 유지되며 새 라이브러리나 클래스가 애플리케이션에 로드될 때만 증가합니다. 메타스페이스는 힙의 일부가 아니지만 기본 OS 메모리에 보관됩니다.

    JVM 버전 7 및 이전 버전에서 이 데이터는 영구 생성(perm gen)이라는 곳에 저장되었습니다. perm gen과 달리 메타스페이스는 더 이상 사용되지 않는 클래스를 수집할 수 있으므로 메모리 영향을 줄일 수 있습니다.



## 생각의 연결고리

- Sampe App Idea #1
  - 최근 SMB쪽에서 가장 요구 사항이 많은 구성 DB Connector, External DB Connector, Custom UI, Dashboard , Pivot Table Widget
  - 기존 Excel 또는 DashBoard 기반 업무를 로우 코드 기반으로 전환
- Sample App Idea #2
  - AI Bot Starter App or --> AI 연계 (RAG:검색강화생성) --> Demo 시연 : Maia + AWS Bedrock 연계
- Evaluation Guide 등 Mendix 사이트와 문서 활용
- 

Links :

1. [awesome-mendix/awesome-mendix: Curated list of resources on Mendix (github.com)](https://github.com/awesome-mendix/awesome-mendix)
2. [Mendix Community - Korean Community](https://community.mendix.com/link/space/korean-community)
3. 

