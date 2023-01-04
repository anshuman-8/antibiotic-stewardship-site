/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B90E50',
        dprimary: '#f8f9fc',
      },
      fontFamily: {
        fuzzyBubble: ['Fuzzy Bubble', 'cursive'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
