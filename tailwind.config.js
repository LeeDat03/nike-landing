/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "san-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        wide: "1440px",
      },
      colors: {
        primary: "#FF6452",
      },
      backgroundImage: {
        hero: "url('/src/assets/images/collection-background.svg')",
        card: "url('/src/assets/images/thumbnail-background.svg')",
      },
    },
  },

  plugins: [],
};
