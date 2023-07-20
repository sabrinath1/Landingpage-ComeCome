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
        itemTextColorHoverInverted: "#ff914d",
        itemTextColorActiveInverted: "#FFFFFFFF",
        itemColorActiveInverted: "#ff914d",
        itemColorActiveHoverInverted: "#ff914d",
        itemTextColorHorizontalInverted: "#FFFFFFFF",
        itemTextColorHoverHorizontalInverted: "#ff914d",
        itemTextColorActiveHorizontalInverted: "#ff914d",
      },

      common: {
        primaryColor: "#ff914d",
        primaryColorPressed: "#ff914d",
        primaryColorHover: "#ff914d",
        textColor2: "#220f0f",
      },
      Button: {
        textColor: "#ffff",
        color: "#ff914d",
      },
    },
  },
});
