/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      backgroundImage: {
        teste: "url('./src/assets/transformers-2.png')",
      },
      fontFamily: {
        transformers: ['Transformers'],
      },
    },
  },
  plugins: [],
}
