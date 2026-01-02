/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,html}'
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        vt323: ['VT323', 'monospace'],
        sharetech: ['"Share Tech Mono"', 'monospace'],
        expletus: ['"Expletus Sans"', 'sans-serif'],
        zendots: ['"Zen Dots"', 'cursive'],
      },
      colors: {
        'mlsc-dark-1': '#243B55',
        'mlsc-dark-2': '#142e4d',
        'mlsc-dark-3': '#041830',
        'mlsc-dark-4': '#0d2f57',
      },
    },
  },
  plugins: [],
}
