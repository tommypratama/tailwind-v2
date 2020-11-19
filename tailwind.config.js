const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      emerald: colors.emerald,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
