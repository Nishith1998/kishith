/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#f8f0f0',
          100: '#f5d3d3',
          200: '#ecacac',
          300: '#e38282',
          400: '#da5a5a',
          500: '#d23232', // Deep burgundy
          600: '#c50e0e',
          700: '#aa0d0d',
          800: '#8c0b0b',
          900: '#6f0909',
        },
        gold: {
          50: '#fffbf0',
          100: '#fff6d0',
          200: '#ffed9f',
          300: '#ffe36e',
          400: '#ffda3d',
          500: '#ffd700', // Gold
          600: '#f8c200',
          700: '#d2a000',
          800: '#a78200',
          900: '#7f6400',
        },
      },
    },
  },

  plugins: [],
}

