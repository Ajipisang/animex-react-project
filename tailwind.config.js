/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        purpleDark: '#1D4ED8', 
        purpleSemiDark: '#393053', 
        purpleLight: '#635985', 
      },
    },
  },
  plugins: [],
}

