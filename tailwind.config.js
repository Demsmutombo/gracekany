/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    container: {
      center: true,
      padding: '15px',
      screens: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px'
      }
    },
    extend: {
      colors: {
        primary: '#0BCEAF',
        secondary: '#6c757d',
        dark: '#343a40',
        danger: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8',
        light: '#ffffff'
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      boxShadow: {
        sm: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)'
      }
    }
  },
  plugins: []
}
