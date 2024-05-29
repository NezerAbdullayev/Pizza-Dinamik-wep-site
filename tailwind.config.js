/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
      colors: {
        "pizzaBlack": "#333",
        "pizzaRed": "#e74c3c",
      },
      backgroundImage:{
        "header-img": "url('./src/assets/home-bg.jpg')"
      },
      fontSize:{
        fontPizza:"1.563rem" //25px
      },
      gridTemplateColumns: {
        'auto-fit-22rem': 'repeat(auto-fit, minmax(0, 22rem))',
        'auto-fit-19rem': 'repeat(auto-fit, minmax(0, 17rem))',
        "grid-cart":  "repeat(auto-fit, minmax(13rem, 1fr));"
      },
      keyframes: {
        'animate-pizza-left': {
          '0%': { transform: 'translateX(5rem)' },
        },
        'animate-pizza-right': {
          '0%': { transform: 'translateX(-5rem)' },
        },
      },
      animation: {
        'pizza-animation-left': 'animate-pizza-left 0.3s linear',
        "pizza-animation-right" : 'animate-pizza-right 0.3s linear',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.clip-path-custom-active': {
          'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        },
        '.clip-path-custom-passiv': {
          'clip-path': 'polygon(0 0, 100% 0, 100% 0, 0 0)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },

  ],
};
