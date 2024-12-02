/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        round: "50%",
      },

      colors: {
        "primary-white": "#e6edf3",
        "primary-black": "#010409",
        "secondary-black": "#0d1117",
        "primary-green": "#238636",
        "primary-blue": "#2f81f7",
        "primary-grey": "#6e7681",
      },
      backgroundImage: {
        coding: "url('./assets/images/bg-coding.png')",
      },
    },
  },
  plugins: [],
};
