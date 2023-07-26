/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#4318FF",
        p: "#707EAE",
        font: "#1B2559",
      },
    },
    fontFamily: {
      body: ['"Plus Jakarta Sans"'],
    },
  },
  plugins: [],
};
