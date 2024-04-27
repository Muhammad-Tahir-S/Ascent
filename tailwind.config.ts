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
        'purple-pink': "#FFB8D1",
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
        navy:'#0c4857',
        wine:'#331832',

        
      },

      dropShadow: {
        primary: "0 0 2px #FFB8D1",
        "glow-bg": "0 0 10px blue",
      },
      animation: {
        "glow-text": "glow-text 3s ease-in-out infinite alternate",
        glow: "glow 3s ease-in-out infinite alternate",
        slideIn: "slideIn 0.4s ease-in forwards",
        breathe: 'breathe 4s ease-in-out infinite',

      },
      keyframes: {
        slideIn: {
          "0%": { scale:'0.97', transform: "translateY(1.5%)", opacity:'0'},
          "100%": { scale:'1',transform: "translateY(0)",opacity:'1'}
        },
        breathe: {
          "0%, 100%": { transform: "translateY(0)", scale:'1', filter:'brightness(105%)' },
          "50%": { transform: "translateY(2px)", scale:'0.98',filter:'brightness(100%)'  },
        },
      },
    
    },
  },
  plugins: [],
};
export default config;
