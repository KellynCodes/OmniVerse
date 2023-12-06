import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-gorditas)"],
      mono: ["var(--font-roboto-mono)"],
    },
    opacity: {
      0: "0",
      10: ".1",
      20: ".2",
      30: ".3",
      40: ".4",
      50: ".5",
      60: ".6",
      70: ".7",
      80: ".8",
      90: ".9",
      100: "1",
    },
    extend: {
      screens: {
        "2xl": "1600px",
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      colors: {
        accent: {
          light: "#131212",
          DEFAULT: "#000000",
          white: "#F2F0F1",
        },
        
        border: {
          light: "",
          DEFAULT: "#0000001a",
          white: "#f0f0f0"
        },

        white: "#ffffff",
        tahiti: {
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
        },
      },
    },
  },
  variants: {
    opacity: ["responsive", "hover", "focus"],
  },
  plugins: [],
};
export default config;
