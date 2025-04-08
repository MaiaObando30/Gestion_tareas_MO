/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#dc2626',  // rojo
        secondary: '#1f1f1f', // negro/gris oscuro
      }
    },
  },
  plugins: [],
}
