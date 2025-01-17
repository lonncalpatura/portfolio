import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "background": "#000319",
      "primary": "#253485",
    },
    extend: {
      textColor: {
        "primary": "#ffffff",
        "secondary": "#abb0cc",
        "tertiary": "#8088ae",
      }
    },
  },
  plugins: [],
} satisfies Config;
