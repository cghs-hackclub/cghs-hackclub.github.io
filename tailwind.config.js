/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./components/**/*.{js,vue,ts}",
  "./pages/**/*.vue",
  "./plugins/**/*.{js,ts}",
  "./app.vue",
],

  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated'),
    require("@tailwindcss/typography")
  ],
}

