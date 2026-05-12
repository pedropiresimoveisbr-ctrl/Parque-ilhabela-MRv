/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mrv: {
          green: '#006B3F',
          mid:   '#079D56',
          light: '#00D38D',
          orange:'#FF8B22',
          yellow:'#FFB719',
        }
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm:   ['DM Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
