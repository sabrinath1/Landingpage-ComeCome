// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/main.css"],
  modules: ["@huntersofbook/naive-ui-nuxt", "nuxt-icon", "@formkit/nuxt"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  naiveUI: {
    themeOverrides: {
      Menu: {
        itemTextColorInverted: "#FFFFFFFF",
        itemTextColorHoverInverted: "#D8394B",
        itemTextColorActiveInverted: "#FFFFFFFF",
        itemColorActiveInverted: "#D8394B",
        itemColorActiveHoverInverted: "#D8394B",
        itemTextColorHorizontalInverted: "#FFFFFFFF",
        itemTextColorHoverHorizontalInverted: "#D8394B",
        itemTextColorActiveHorizontalInverted: "#D8394B",
      },

      common: {
        primaryColor: "#ffffff",
        primaryColorPressed: "#ffffff",
        primaryColorHover: "#A2D785",
        textColor2: "#3F3955",
      },
      Button: {
        textColor: "#ffff",
        color: "#A2D785",
      },
    },
  },
});
