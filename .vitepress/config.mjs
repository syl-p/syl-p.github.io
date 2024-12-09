import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Syl-p.coding",
  description: "Développeur Fullstack Ruby on rails et Javascript",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Accueil", link: "/" },
      { text: "A propos", link: "/a-propos" },
      { text: "Articles", link: "/posts" },
      { text: "Projects", link: "/projects" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],
    footer: {
      message: "Made with vuejs ❤️",
      copyright: "Copyright © 2019-present Syl-P",
    },
    search: {
      provider: "local",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/syl-p" }],
  },
});
