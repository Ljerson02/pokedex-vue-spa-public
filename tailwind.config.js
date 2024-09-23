/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '315px',
        md: '570px',
      },
    },
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#F22539',
        secondary: '#C00E20',
        accent: '#ECA539',
        font: {
          primary: '#353535',
          secondary: '#5E5E5E',
          accent: '#ECA539',
          light: '#BFBFBF',
        },
        surface: {
          light: '#F9F9F9',
          medium: '#F5F5F5',
          opaque: '#E8E8E8',
        },
      },
    },
  },
  plugins: [],
};
