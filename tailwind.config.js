/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}", "./node_modules/preline/preline.js"],
  theme: {
    extend: {
      fontFamily: {
        bevietnam: ["Be Vietnam Pro", "sans-serif"],
      },
      colors: {
        primary: "#FF9500",
        secondary: "#F7F7F8",
        fore: "#262626",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
