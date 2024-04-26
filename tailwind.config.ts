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
        blue: {
          tiffany: "#8DDBE0",
          nyanza: "#D3FFE9",
          yinMin: "#26547C",
          uranian: "#A3D9FF",
        },
        'pink-red':'#ef476f',
        yellow:'#ffd166',
        'light-olive':'#99d188',
        teal:'#1ea3a3',
        navy:'#0c4857'
        
      },

      dropShadow: {
        primary: "0 0 2px #FFB8D1",
        "glow-bg": "0 0 10px blue",
      },
      animation: {
        "glow-text": "glow-test 3s ease-in-out infinite alternate",
        glow: "glow 3s ease-in-out infinite alternate",
        slideIn: "slideIn 1.5s ease-in-out forwards"
      },
      keyframes: {
        slideIn: {
          "0%": { scale:'0.99', transform: "translateY(1.5%)"},
          "100%": { scale:'1',transform: "translateY(0)"}
        }
      },
    
    },
  },
  plugins: [],
};
export default config;
