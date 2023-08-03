/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      container: {
        center: true,
        padding: "15px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1170px",
        },
      },
      boxShadow: {
        serviceIcon: "0 20px 160px rgba(45, 51, 60, .2)",
        quoteIcon: "0 50px 120px rgba(0, 0, 0, .08)",
      },
    },
  },
  plugins: [],
};
