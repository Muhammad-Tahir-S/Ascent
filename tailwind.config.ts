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
        "ghost-white": "#F5F0F6",
        primary: "#FFB8D1",
        "primary-hl": "#EF476F",
        secondary: "#331832",
        "secondary-hl": "#FFD166",
        blue: { tiffany: "#8DDBE0", nyanza: "#D3FFE9" },
      },

      dropShadow: {
        primary: "0 0 2px #FFB8D1",
        "glow-bg": "0 0 10px blue",
      },
      animation: {
        "glow-text": "glow-test 3s ease-in-out infinite alternate",
        glow: "glow 3s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
export default config;
