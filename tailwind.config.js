/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "angry-color" : "#B03A1F",
        "angry-color-darkened" : "#A2361D"
      }
    },
  },
  plugins: [],
}