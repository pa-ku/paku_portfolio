/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        balance: "key-balance 1s linear infinite",
        profilename: "key-profile-name 1s  forwards",
        opacity: "animate-opacity  1s  forwards",
      },
      colors: {
        primary: {
          DEFAULT: "#009de0",
          50: "#d7f3ff",
          100: "#c2edff",
          200: "#8adcff",
          300: "#52cbff",
          400: "#1abaff",
          500: "#009de0",
          600: "#0076a8",
          700: "#004f70",
          800: "#002738",
          900: "#000000",
        },
        background: {
          DEFAULT: "#1e2837",
          100: "#516c94",
          200: "#455b7d",
          300: "#384a66",
          400: "#2b3a4f",
          500: "#1f2938",
          600: "#121821",
          700: "#05070a",
          800: "#000000",
          900: "#000000",
        },
        secundary: {
          DEFAULT: "#00f5b8",
          100: "#adffeb",
          200: "#80ffdf",
          300: "#52ffd4",
          400: "#24ffc8",
          500: "#00f5b8",
          600: "#00c795",
          700: "#009973",
          800: "#006b50",
          900: "#003d2e",
        },
      },
    },
  },
  plugins: [],
};
