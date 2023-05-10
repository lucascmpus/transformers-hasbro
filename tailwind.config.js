/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      backgroundImage: {
        teste: "url('./assets/transformers-2.png')",
        cinema: "url('./assets/cinema.jpg')"
      },
      fontFamily: {
        transformers: ['Transformers'],
      },
    },
  },
  plugins: [],
}
