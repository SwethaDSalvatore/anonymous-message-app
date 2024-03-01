/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html","./**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    
      colors:{
        darkPrimary : "#023246",
        darkSecondary: "#287094",
        lightPrimary:"#D4D4CE",
        lightSecondary:"#F6F6FC"
      },
      fontFamily: {
       
        custom: ['Salsa', 'cursive'],
      },
    },
  },
  plugins: [],
}

