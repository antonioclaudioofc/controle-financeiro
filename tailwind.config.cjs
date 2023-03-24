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
        '3/10': '30%',
        '4/10' : '40%',
        '1/10' : '10%'
      },
      screens: {
        'md': { 'max': '750px' }
      },
      boxShadow: {
        'custom': '0 0  5px #ccc'
      }
    },
  },
  plugins: [],
}
