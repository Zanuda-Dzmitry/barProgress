// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "nuxt-echarts", "@pinia/nuxt", "nuxt-color-picker"],
  ui: {
    global: true,
  },
  components: true,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
});
