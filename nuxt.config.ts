// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "nuxt-echarts", "@pinia/nuxt", "nuxt-color-picker"],
  echarts: {
    renderer: ["canvas"],
    charts: ["PieChart"],
    components: ["DatasetComponent", "GridComponent", "TooltipComponent"],
  },
  ui: {
    global: true,
  },
  components: true,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    baseURL: "/barProgress/",
  },

  nitro: {
    output: {
      dir: "./dist/barProgress",
    },
  },
});
