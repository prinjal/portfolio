/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        heroGradientStart: "rgb(110, 152, 248)",
        heroGradientVia: "rgb(236, 110, 86)",
        heroGradientEnd: "rgb(80, 130, 108)",
        backgroundOpacity: ["active"],
        // You can add as many custom colors as you need
      },
    },
  },
  plugins: [],
};
