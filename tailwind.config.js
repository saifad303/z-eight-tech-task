/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xss: "384px",
      xs: "512px",
      sm: "640px",
      md: "768px",
      lmd: "896px",
      lg: "1024px",
      sxl: "1152px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1792px",
    },
    extend: {},
  },
  plugins: [],
};
