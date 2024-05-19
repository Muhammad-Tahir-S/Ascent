import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ghost-white": "#F5F0F6",
        "purple-pink": "#FFB8D1",
        blue: {
          tiffany: "#8DDBE0",
          nyanza: "#D3FFE9",
          yinMin: "#26547C",
          uranian: "#A3D9FF",
        },
        "pink-red": "#ef476f",
        yellow: "#ffd166",
        "light-olive": "#99d188",
        teal: "#1ea3a3",
        navy: "#0c4857",
        wine: "#331832",
        "deep-purple": "#181A23",
        "new-purple": "#382D49",
      },
      boxShadow: {
        card: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
      },
      dropShadow: {
        primary: "0 0 2px #FFB8D1",
        "glow-bg": "0 0 10px blue",
      },
      animation: {
        "glow-text": "glow-text 3s ease-in-out infinite alternate",
        glow: "glow 3s ease-in-out infinite alternate",
        slideIn: "slideIn 0.4s ease-in forwards",
        breathe: "breathe 4s ease-in-out infinite",
        "loading-orb-bounce": "loading-orb-bounce 4s ease-in-out infinite",
        "draw-up": "draw-up 1s ease-in",
        "swish-down": "swish-down 2s ease-in infinite;",
        "swish-up": "swish-up 2s ease-in infinite;",
      },
      keyframes: {
        slideIn: {
          "0%": { scale: "0.97", transform: "translateY(1.5%)", opacity: "0" },
          "100%": { scale: "1", transform: "translateY(0)", opacity: "1" },
        },
        breathe: {
          "0%, 100%": {
            transform: "translateY(0)",
            scale: "0.95",
            filter: "brightness(105%)",
          },
          "50%": {
            scale: "1",
            transform: "translateY(2px)",
            filter: "brightness(100%)",
          },
        },
        "loading-orb-bounce": {
          " 0%, 100%": {
            transform: "translateY(-50%)",
            scale: "1",
            "animation-timing-function": " cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "translateY(-45%)",
            scale: "0.95",
            "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
          },
        },
        "draw-up": {
          "100%": {
            transform: "translateY(-100%)",
          },
        },
        "swish-down": {
          "0%": {
            transform: "translateY(-10%)",
          },
          "50%": {
            transform: "translateY(10%)",
          },
          "50.01%": {
            transform: "translateY(-10%)",
          },
          "100%": {
            transform: "translateY(10%)",
          },
        },
        "swish-up": {
          "0%": {
            transform: "translateY(10%)",
          },
          "50%": {
            transform: "translateY(-10%)",
          },
          "50.01%": {
            transform: "translateY(10%)",
          },
          "100%": {
            transform: "translateY(-10%)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
