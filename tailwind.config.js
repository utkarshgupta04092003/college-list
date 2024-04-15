/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      'headbg':'#88bcc5',
      'textimp': '#3faf8d',
      'urlcolor': '#ffae32',
      'highlighttext': '#61ae8d'
    }},
  },
  plugins: [],
}