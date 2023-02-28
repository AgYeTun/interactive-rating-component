/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      overpass: ["Overpass", "sans-serif"],
    },
    extend: {
      colors: {
        "orange": "#fb7413",
        "light-grey": "hsl(217, 12%, 63%)",
        "medium-grey": "hsl(216, 12%, 24%)",
        "dark-blue": "hsl(213, 19%, 14%)",
        "very-dark-blue": "hsl(216, 12%, 8%)",
      },
    },
  },
  plugins: [],
};
