/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#8E9FDC',
        'hover': '#808fc6',
        'cobble': '#666666'
      }
    }
  },
  plugins: []
}
