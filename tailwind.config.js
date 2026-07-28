/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0D0D0D",
        gold: {
          DEFAULT: "#C8A045",
          light: "#E3C077",
          dim: "rgba(200,160,69,0.14)",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderColor: {
        gold: "rgba(200,160,69,0.35)",
      },
    },
  },
  plugins: [],
};
