/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        offWhite: "#D9D9D9",
        mainBlack: "#000000",
        secondaryBlack: "#0f1419",
        grayLink1: "#536471",
        mainWhite: "#FFFFFF",
        mainGreen: "#3A5B22",
        borderColor: "#2F3336",
        textColor1: "#0f1419",
      },
    },
  },
  plugins: [],
};
