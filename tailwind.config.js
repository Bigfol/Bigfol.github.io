/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "475px",
      "1md": "1150px",
      "1xl": "1500px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
