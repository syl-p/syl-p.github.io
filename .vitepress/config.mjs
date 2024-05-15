import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Syl-p Code lab",
  description: "Du code, du fun et des projets",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'A propos', link: '/a-propos' },
      { text: 'Articles', link: '/posts' },
      { text: 'Projects', link: '/projects' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    footer: {
      message: 'Made with vuejs, vitepress and love.',
      copyright: 'Copyright © 2019-present Syl-P'
    },
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/syl-p' }
    ]
  }
})
