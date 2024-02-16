import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-50": "#40798C",
        "bg-100": "#1F363D",
        primary: { 100: "#CFE0C3" },
        secondary: { 100: "#242331" },
        blue: { tiffany: "#8DDBE0", nyanza: "#D3FFE9" },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "sidebar-wrapper": " 4px 0px 40px rgba(166, 181, 211, 0.25)",
      },
      dropShadow: {
        "glow-primary": "0 0 2px #CFE0C3",
        "glow-bg": "0 0 10px blue",
      },
      animation: {
        glow: "glow 3s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
export default config;
