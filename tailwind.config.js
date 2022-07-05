/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif',
      },
      backgroundImage: {
        'lightMain':"url('/src/assets/bg-light-main.jpg')",
        'darkMain':"url('/src/assets/bg-dark-main.jpg')"
      },
      colors: {
        blue: {
          500: '#00A6FB',
          600: '#0582CA',
          700: '#006494',
          800: '#023047',
          900: '#051923',
        },
        gray: {
          400:'#C3CCD4',
          700:'#3D4149',
          800:'#282C35',
        }
      }
    },
  },
  plugins: [],
}
