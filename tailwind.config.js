/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html","./**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Salsa', 'cursive'],
      },
    },
  },
  plugins: [],
}

