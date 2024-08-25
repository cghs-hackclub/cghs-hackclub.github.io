// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/content", "@nuxt/ui"],

  content: {
    highlight: {
      theme: 'github-dark'
    }
  },
  compatibilityDate: "2024-08-25"
})