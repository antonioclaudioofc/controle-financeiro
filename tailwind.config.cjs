/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      width: {
        '49/50': '98%',
        '3/10': '30%'
      },
      screens: {
        'md': { 'max': '750px' }
      }
    },
  },
  plugins: [],
}
