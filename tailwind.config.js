// tailwind.config.js
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Ubuntu", "sans-serif"],
        text: ["Ubuntu", "sans-serif"]
      },
      colors: {
        primary: colors.sky["500"],
        secondary: colors.slate["700"],
        error: colors.red["500"]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
};
