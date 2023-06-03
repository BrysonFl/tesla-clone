/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      ...colors,
      'primary': 'var(--color-gray)',
      'secundary': 'var(--color-white)'
    },
    fontFamily: {
      snas: ['Gotham SSm A', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

