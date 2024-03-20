/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    fontFamily: {
      WorkSans: "Work Sans, sans-serif",
    },
    extend: {
      backgroundImage: {
        "desktop-image": "url('./background-pattern-desktop.svg')",
        "mobile-image": "url('./background-pattern-mobile.svg')",
      },
      content: {
        "plus-icon": 'url("./icon-plus.svg")',
        "minus-icon": 'url("./icon-minus.svg")',
      },
    },
  },
  plugins: [],
};
