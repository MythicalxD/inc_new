/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/getStarted/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        Bree: ["Bree Serif", "serif"],
      },
      fontWeight: {
        thin: 100, // Define 'thin' with a value of 100
        normal: 400,
        bold: 700,
      },
    },
  },
  plugins: [],
}

