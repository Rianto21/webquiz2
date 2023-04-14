/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        comforta: ['Comfortaa', 'sans-serif'],
        bebasneue: ['Bebas Neue', 'sans-serif']
      }
    }
  },
  plugins: [require('tailwind-scrollbar'), require('@tailwindcss/line-clamp')]
};
