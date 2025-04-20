/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:    '#e11d48',  // rosa fuerte para botones y acentos
        secondary:  '#f3f4f6',  // gris muy claro para tarjetas e inputs
        background: '#ffffff',  // fondo principal blanco
        text:       '#111827',  // texto principal oscuro
        muted:      '#6b7280',  // texto secundario / placeholders
        black:      '#000000',  // negro puro
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
