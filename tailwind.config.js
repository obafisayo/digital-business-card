/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#5790DF",
        secondary: "#093D89",
        brandOffwhite: "#E9E9EB",
        brandGray: "#484848",
        brandGreen: "#2BBE9B",
        brandSky: "#E6EEFA",
        textPrimary: "#6C7A9C",
      },
      container: {
        center: true,
        padding:{
          DEFAULT: "1rem",
          sm: "2rem"
        }
      },
      animation: {
        'blob-bounce': 'blob-bounce 5s infinite ease',
      },
      keyframes: {
        'blob-bounce': {
          '0%': { transform: 'translate(-100%, -100%) translate3d(0, 0, 0)' },
          '25%': { transform: 'translate(-100%, -100%) translate3d(100%, 0, 0)' },
          '50%': { transform: 'translate(-100%, -100%) translate3d(100%, 100%, 0)' },
          '75%': { transform: 'translate(-100%, -100%) translate3d(0, 100%, 0)' },
          '100%': { transform: 'translate(-100%, -100%) translate3d(0, 0, 0)' },
        },
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

