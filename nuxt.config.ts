// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/content", "@nuxt/image"],
  compatibilityDate: "2025-01-13",
  content: {
    documentDriven: true,
  }
})