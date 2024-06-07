/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        catalog: 'rgb(19, 19, 19)',
        search: 'rgb(255, 255, 255, 0.2)'
      },
      fontFamily: {
        Nunito: ['Nunito', 'sans-serif']
      },
    },
  },
  plugins: [],
}

