/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        main: "minmax(18rem, 20rem) 1fr",
      },
      colors: {
        amethyst: "#9b59b6",
        wisteria: "#8e44ad",
      },
    },
  },
  plugins: [],
};
