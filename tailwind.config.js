// tailwind.config.js
const colors = require('tailwindcss/colors');
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
       
        // Build your palette here
        transparent: 'transparent',
        current: 'currentColor',
        gray: colors.trueGray,
        green: "#38EB36",
        blue: colors.lightBlue,
        yellow: colors.amber,
        black : "#000000",
        greyColor: "#BABABC",
        white:"#FFFFFF",
        red: colors.red
      },
      textIndent: theme => theme('spacing'),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
