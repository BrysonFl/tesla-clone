/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    backgroundColor: {
      'greyColor': 'rgba(var(--color-gray), 0.8)'
    },
    fontFamily: {
      snas: ['Gotham SSm A', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

