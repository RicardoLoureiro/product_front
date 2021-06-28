const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",

      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
      
      carmesim: {
        DEFAULT: "#DE5262",
        hover: "#C13C4B",
      },
      burnedYellow: {
        DEFAULT: "#FC6735",
        classic: "#FFA200",
        hover: "#E6673E",
      },
      herbal: {
        DEFAULT: "#2E8535",
        classic: "#00CE7B",
        hover: "#1B6021",
      },
      ashes: {
        DEFAULT: "#E8E8E8",
        classic: "#F6F6F6",
        hover: "#CECECE",
        dark: "#808080",
      },
      quantum: {
        DEFAULT: "#404040",
      },
      peachPuffDark: {
        DEFAULT: "#F8DCD3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
