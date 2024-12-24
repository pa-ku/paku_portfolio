/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        balance: 'key-balance 1s linear infinite',
        profilename: 'key-profile-name 1s  forwards',
        opacity: 'animate-opacity  1s  forwards'
      },
      colors: {
        primary: {
          DEFAULT: '#009de0',
          50: '#d7f3ff',
          100: '#c2edff',
          200: '#8adcff',
          300: '#52cbff',
          400: '#1abaff',
          500: '#009de0',
          600: '#0076a8',
          700: '#004f70',
          800: '#002738',
          900: '#000000',
        }
      }
    },
  },
  plugins: [],
}