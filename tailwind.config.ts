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
        canvas: "#FAFAFA",
        surface: {
          DEFAULT: "#F3F3F5",
          subtle: "#F7F7F9",
          card: "#FFFFFF",
        },
        charcoal: {
          DEFAULT: "#111111",
          muted: "#444444",
        },
        zinc: {
          muted: "#666666",
        },
        forest: {
          DEFAULT: "#1A4D2E",
          dark: "#143E24",
          light: "#EAF5EE",
          emerald: "#15803D",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Inter"',
          "system-ui",
          "sans-serif",
        ],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
