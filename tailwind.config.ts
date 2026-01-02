import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fff5eb",
          100: "#ffe6cc",
          200: "#ffcc99",
          300: "#ffb366",
          400: "#ff9a4d",
          500: "#fa852c",
          600: "#e67724",
          700: "#cc6820",
          800: "#b35a1c",
          900: "#994d18",
        },
        secondary: {
          50: "#f3e6f7",
          100: "#e0bfe8",
          200: "#cd99d9",
          300: "#b973ca",
          400: "#a64dbb",
          500: "#8c26ab",
          600: "#7000a0",
          700: "#5e0071",
          800: "#4d005e",
          900: "#3d004b",
        },
      },
    },
  },
  plugins: [],
};

export default config;
