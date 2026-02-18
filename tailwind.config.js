/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,vue,html}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        hoverColor:"#FFC000",
        brightColor:"#dd8036",
        backgroundColor:"#36ae9a",
      },
    },
  },
  plugins: [],
}


