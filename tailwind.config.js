/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        offWhite: "#D9D9D9",
        mainBlack: "#000000",
        mainWhite: "#FFFFFF",
        mainGreen: "#3A5B22",
      },
    },
  },
  plugins: [],
};
