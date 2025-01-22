import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "white",
      transparent: "transparent",

      background: {
        50: "rgba(236, 240, 248, 1)",
        100: "rgba(218, 225, 241, 1)",
        200: "rgba(181, 195, 227, 1)",
        300: "rgba(143, 164, 214, 1)",
        400: "rgba(106, 134, 200, 1)",
        500: "rgba(69, 104, 186, 1)",
        600: "rgba(55, 83, 149, 1)",
        700: "rgba(41, 62, 112, 1)",
        800: "rgba(28, 42, 74, 1)",
        900: "rgba(14, 21, 37, 1)",
        950: "rgba(7, 10, 19, 1)",
      },
      primary: {
        DEFAULT: "rgba(15, 23, 42, 1)",
        0: "rgba(18, 23, 38, 1)",
        100: "rgba(38, 45, 64, 1)",
        200: "rgba(63, 68, 85, 1)",
        300: "rgba(87, 92, 107, 1)",
        400: "rgba(111, 115, 128, 1)",
        500: "rgba(139, 142, 152, 1)",
      },
      accent: {
        DEFAULT: "rgba(63, 252, 140, 1)",
        50: "rgba(230, 255, 240, 1)",
        100: "rgba(205, 254, 225, 1)",
        200: "rgba(155, 253, 194, 1)",
        300: "rgba(104, 253, 164, 1)",
        400: "rgba(54, 252, 133, 1)",
        500: "rgba(4, 251, 103, 1)",
        600: "rgba(3, 201, 82, 1)",
        700: "rgba(2, 151, 62, 1)",
        800: "rgba(2, 100, 41, 1)",
        900: "rgba(1, 50, 21, 1)",
        950: "rgba(0, 25, 10, 1)",
      },
      text: {
        DEFAULT: "hsl(220, 45%, 95%)",
        2: "hsl(222, 35%, 80%)",
        3: "hsl(222, 30%, 70%)",
        4: "hsl(222, 25%, 60%)",
        5: "hsl(222, 20%, 50%)",
        6: "hsl(222, 15%, 40%)",
        7: "hsl(222, 10%, 30%)",
        8: "hsl(222, 5%, 20%)",
      },
      
    },
    
    extend: {
      textColor: {
        "color": {
          DEFAULT: "var(--text)",
          2: "var(--text-2)",
          3: "var(--text-3)",
          4: "var(--text-4)",
          5: "var(--text-5)",
          6: "var(--text-6)",
          7: "var(--text-7)",
          8: "var(--text-8)",
        },
      },
      strokeWidth: {
        "3": "3px",
        "4": "4px",
      },
      borderWidth: {
        "1": "1px",
      }
    },
  },
  plugins: [],
} satisfies Config;
