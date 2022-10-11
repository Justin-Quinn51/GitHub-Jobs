/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{react,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        "aqua": "#5da0a1",
        "aqua-dark": "#5ca2a3",
        "dark-green": "#2b3737",
        "light-gray": "#929c9c",
        "background": "#f0fafb"
      }
    },
  },
  plugins: [],
}
