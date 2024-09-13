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
      textShadow: {
        default: '2px 2px 2px rgba(0, 0, 0, 0.5)',
        md: '3px 3px 3px rgba(0, 0, 0, 0.5)',
        lg: '4px 4px 4px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
};

