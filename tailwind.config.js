/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: "#fff1f4",
          100: "#ffe1e8",
          200: "#ffc2d1",
          300: "#ff94ae",
          400: "#ff5c85",
          500: "#f43f6b",
          600: "#d92a56",
          700: "#b31f45",
          800: "#8c1938",
          900: "#5e1226",
        },
      },
      fontFamily: {
        display: ["'Be Vietnam Pro'", "system-ui", "sans-serif"],
      },
      keyframes: {
        floatUp: {
          "0%": { transform: "translateY(0) scale(1)", opacity: "0" },
          "10%": { opacity: "1" },
          "100%": { transform: "translateY(-120vh) scale(1.4)", opacity: "0" },
        },
        pulseSoft: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
      animation: {
        floatUp: "floatUp linear forwards",
        pulseSoft: "pulseSoft 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
