/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navfoot: "#3AB1AA",
        boton: "#6FB1D6",
        barra: "#7DD0FF",
        cardFood: "#8FD7FF",
      },
    },
  },
  plugins: [require("daisyui")],
};
