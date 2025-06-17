import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Awesome Mendix",
  description: "Underground for Mendix",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Low Code Guide', link: '/low-code' },
      { text: 'Evaluation Guide', link: '/evaluation-guide' }
    ],

    sidebar: [
      {
        text: 'Mendix',
        items: [
          { text: 'Low Code Guide', link: '/low-code' },
          { text: 'Evalution Guide', link: '/evaluation-guide' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/awesome-mendix/awesome-mendix.github.io' }
    ]
  }
})
