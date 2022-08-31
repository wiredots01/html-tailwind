/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: '#7b6c63',
        secondary: {
          100: '#303030',
          200: '#201911',
          300: '#363636',
          400: '#949494',
          500: '#212121',
          600: '#5b5b5b',
          700: '#222222',
          800: '#929292',
          900: '#c2c2c2',
        },
        footer: {
          100: '#5f5f5f',
          200: '#393939',
          300: '#1c1c1c',
          400: '#595959'
        }
      },
      backgroundImage: {
        'hero-bg': "url('/img/hero-bg.jpg')",
      },
      fontFamily: {
        body: ['Raleway']
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}