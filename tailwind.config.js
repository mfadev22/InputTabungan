/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{html,js}"],
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        cambria: ["Cambria"],
        courierNew: ["Courier New"],
        tahoma: ["Tahoma"],
      },
      colors: {
        primary: "#14b8a6",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      screen: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
