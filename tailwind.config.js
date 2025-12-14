/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          light: '#00AEEF',
          dark: '#1B3B6F',
          gray: '#F3F4F6',
          accent: '#0EA5E9'
        }
      }
    },
  },
  plugins: [],
}
