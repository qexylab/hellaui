/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#6D13FF',
        'white-blue': '#1672EC',
        'dark-gray': '#1E1E1E',
        'white-gray': '#616161'
      }
    }
  }
}
