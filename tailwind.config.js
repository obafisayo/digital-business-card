/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#D3E97A",
        secondary: "#238636",
        brandOffwhite: "#C7C7C7",
        brandGray: "#484848"
      },
      container: {
        center: true,
        padding:{
          DEFAULT: "1rem",
          sm: "2rem"
        }
      },
      // fontFamily: {
      //   bebas: "Bebas Neue"
      // },
    },
  },
  plugins: [],
};

