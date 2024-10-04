import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',],
    darkMode:"class",
  theme: {
    extend: {
      colors:{
        primary:"#646cffaa",
        secondary:"#61dafbaa",
      },

      container:{
        center: true,
        padding:{
          DEFAULT:"1rem",
          sm:"3rem",
        }

      }
    },
  },
  plugins: [
    forms,
  ],
}

