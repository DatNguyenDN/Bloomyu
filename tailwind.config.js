/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#7B7B7B",

      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        roboto:["Roboto", "sans-serif"]
      },
      fontSize:{
          '14':'14px',
          '16':'16px',
          '18':'18px',
          '20':'20px',
          '28':'28px',
          '35':'35px',
      }
    },
    //'md': "767px",
    screens: {
      'sm': "640px",
      'md': "848px",
      'lg': "1024px",
      'xl': "1280px",
    },
    
  },
  plugins: [require("daisyui")],
};