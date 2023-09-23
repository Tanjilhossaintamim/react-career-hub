/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true
    },


    extend: {
      colors: {
        'color-dark': '#1A1919',
        'color-gray': '#757575',
        'color-extraDark': "#474747",
        'color-dark-3': "#757575",
        'color-linier': '#7E90FE'

      },
    },
  },
  plugins: [require("daisyui")],
}

