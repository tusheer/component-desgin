// tailwind.config.js
const colors = require('tailwindcss/colors');
module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/**/*.tsx'],
  },
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
        red: colors.rose
      },
      textIndent: theme => theme('spacing'),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
