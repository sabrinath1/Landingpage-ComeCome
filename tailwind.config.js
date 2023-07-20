/** @type {import('tailwindcss').Config} */


const FormKitVariants = require('@formkit/themes/tailwindcss')

module.exports = {
  // corePlugins: {
  //   preflight: false,
  // },
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./tailwind-theme.js",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#220f0f",
        "secondary": "#ff914d",
        "base-100": "#ffffff",
        "info": "#2F67E9",
        "success": "#165F55",
        "warning": "#FBC846",
        "error": "#E94974",
        "accent": "#e94974"
        
        
        
      }
    },
    
  },
  plugins: [require("daisyui"),FormKitVariants],
}

