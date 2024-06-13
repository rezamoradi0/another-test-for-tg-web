/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          green: {
            500: "#64c07d",
          },
        },
      },
      keyframes: {
        goingUp: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        "spin-slow": "spin 24s linear infinite",
        "spin-slow-revers": "spin 24s linear infinite revers",
        disappear: "goingUp 0.75s ease-in forwards",
      },
    },
  },
  plugins: [],
};

