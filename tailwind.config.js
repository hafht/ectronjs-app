/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/**/*.{html,ts}'],
  theme: {
    extend: {
      screens: {
        sm: '576px',
        // => @media (min-width: 576px) { ... }

        md: '960px',
        // => @media (min-width: 960px) { ... }

        lg: '1440px',
        // => @media (min-width: 1440px) { ... }
      },
      spacing: {
        35: '35px',
      },
      colors: {
        primary: '#3E82FB',
      },
    },
  },
  plugins: [],
};
