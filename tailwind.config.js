const plugin = require("tailwindcss/plugin");

const enlargeFirst = plugin(function ({ addUtilities }) {
  const newUtilities = {
    ".enlarge-first:first-letter": {
      "font-size": "96px",
      float: "left",
      "margin-right": "10px",
      "font-weight": "800",
      display: "block",
      "line-height": "76px",
    },
  };
  addUtilities(newUtilities, ["responsive"]);
});

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#111111",
      white: "#FFFFFF",
      onyx: "#2F3436",
      grey: "#949494",
      grey2: "#E5E5E5",
      grey3: "#F5F5F5",
      ruby: "#CE5374",
      emerald: "#31ac8b",
      green: "#6E9075",
      beige: "#FAE3C6",
      beige2: "#FDF2EE",
      blue: "#0062A9",
    },
    fontSize: {
      xs: ".75rem", //12px
      sm: ".875rem", //14px
      tiny: ".875rem", //14px
      base: "1rem", //16px
      lg: "1.125rem", //18px
      xl: "1.25rem", //20px
      "2xl": "1.5rem", //24px
      "3xl": "1.75rem", //30px 1.875; 28 1.75
      "4xl": "2.25rem", //36px
      "5xl": "3rem", //48px
      "6xl": "3.375rem", //54px
      "7xl": "5.0625rem", //80px
      "8xl": "6rem", //96px
    },
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      max: "1920px",
      "2max": "2160px",
    },
    fontFamily: {
      display: ["stanley", "Source Serif Pro", "Georgia", "serif"],
      accent: ["officecode", "Monaco", "monospace"],
      base: [
        "opensans",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Ubuntu",
        "Trebuchet MS",
        "Lucida Grande",
        "sans-serif",
      ],
    },
    maxHeight: {
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      full: "100%",
      700: "700px",
      500: "500px",
    },
    extend: {
      backgroundImage: (theme) => ({
        test: "url('app/assets/images/test.jpg')",
        hero: "url('../../assets/images/ratio_pt1.svg')",
      }),
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
        18: "repeat(18, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-13": "span 13 / span 13",
        "span-14": "span 14 / span 14",
        "span-15": "span 15 / span 15",
        "span-16": "span 16 / span 16",
        "span-17": "span 17 / span 17",
        "span-18": "span 18 / span 18",
      },
      gridColumnStart: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
        18: "18",
      },
      gridColumnEnd: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
        18: "18",
      },
    },
  },
  plugins: [enlargeFirst],
};
