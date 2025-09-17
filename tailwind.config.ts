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
        primary: "#f14f4f"
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
        scaleUp: {
          '0%': {
            transform: 'scale(0.8)',
            opacity: '0'
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1'
          }
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        floating: {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        }
      },
      animation: {
        "animate-appear": "appear 0.5s ease-in-out",
        "animate-disappear": "appear 0.5s ease-in-out reverse",
        "animate-appear-left": "appearLeft 0.5s ease-in-out",
        "animate-appear-right": "appearLeft 0.5s ease-in-out reverse",
        "text": 'text 1.3s ease infinite',
        "scaleUp": 'scaleUp 0.6s ease-out',
        "fade-in-up": 'fadeInUp 0.8s ease-out',
        "slide-in-left": 'slideInLeft 0.8s ease-out',
        "slide-in-right": 'slideInRight 0.8s ease-out',
        "floating": 'floating 3s ease-in-out infinite'
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
