/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "roboto-f": ["Roboto Flex", "sans-serif"],
        "roboto-c": ["Roboto Condensed", "sans-serif"],
        "bebas-neue": ["Bebas Neue", "sans-serif"],
      },
      fontSize: {
        "15-base": ["0.9rem", { lineHeight: "1.4rem" }],
        "1xs": ["1.3rem", { lineHeight: "2rem" }],
        "2xs": ["1rem", { lineHeight: "1.4rem" }],
        "10xl": ["2.5rem", { lineHeight: "3rem" }],
        "11xl": ["4.8rem", { lineHeight: "5.2rem" }],
      },
      padding: {
        "88px": "88px",
        "120px": "120px",
        "328px": "328px",
        "376px": "376px",
      },
      colors: {
        "custom-gray": "#282828",
        "custom-blue": "#0147FF",
      },
      width: {
        1440: "90 rem",
        600: "37.5 rem",
        1064: "66.5rem",
      },
      height: {
        825: "52 rem",
        446: "27.9 rem",
        404.37:"25.3 rem"
      },
      blur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};