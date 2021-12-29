const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...colors
      }
    }
  },
  plugins: []
}
