/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#E2B029",
        "regal-green": "#CEE3DA",
        "navy-900": "#152238",
        "dark-gray-800": "#313131",
        "dark-gray-900": "#1f1f1f",
      },
      width: {
        100: "26rem",
        104: "27rem",
        108: "28rem",
        128: "32rem",
        132: "33rem",
        136: "34rem",
        140: "35rem",
        144: "36rem",
      },
      height: {
        128: "32rem",
        132: "33rem",
        144: "36rem",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "bounce-in-right": {
          "0%": {
            transform: "translateX(0)",
          },
          "25%": {
            transform: "translateX(5px)",
          },
          "50%": {
            transform: "translateX(0)",
          },
          "75%": {
            transform: "translateX(5px)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.8s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "bounce-in-right": "bounce-in-right 1s infinite",
      },
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
  },
  plugins: [],
};
