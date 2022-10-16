/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "hsl(30, 38%, 92%)",
        darkGrayishBlue: "hsl(228, 12%, 48%)",
        darkCyan: "hsl(158, 36%, 37%)",
        veryDarkCyan: "hsl(158, 36%, 25%)",
        veryDarkBlue: "hsl(212, 21%, 14%)",
        link: "hsl(228, 45%, 44%)",
      },
      fontFamily: {
        fraunces: ['"Fraunces"', "serif"],
        montserrat: ['"Montserrat"', "sans-serif"],
      },
      screens: {
        mobile: "376px",
        laptop: "1440px",
      },
    },
  },
  plugins: [],
};
