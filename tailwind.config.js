/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "rgb(13, 26, 60)",
        primaryDark: "rgb(11, 17, 36)",
        accent1: "rgb(233, 95, 110)",
        accent2: "rgb(210, 77, 92)",
        primaryWhite: "rgb(245,245,245)",
      },
      aspectRatio: {
        "2/3": "2 / 3",
      },
    },
  },
  plugins: [],
};
