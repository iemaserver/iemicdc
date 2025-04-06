import type { Config } from "tailwindcss";

const config: Config = {
  // darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // primary: "#7091e6"
        primary: "#3f51b5"
      },
      keyframes: {
        appear: {
          from: {
            opacity: "0",
            transform: "translateY(10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
        appearLeft: {
          from: {
            opacity: "0",
            transform: "translateX(10px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0px)",
          },
        },
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
            'transform': "scale(1, 1)"
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
            'transform': "scale(1.1, 1.1)"
          },
        },
      },
      animation: {
        "animate-appear": "appear 0.5s ease-in-out",
        "animate-disappear": "appear 0.5s ease-in-out reverse",
        "animate-appear-left": "appearLeft 0.5s ease-in-out",
        "animate-appear-right": "appearLeft 0.5s ease-in-out reverse",
        "text": 'text 1.3s ease infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
