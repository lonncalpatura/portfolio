import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "background": {
        50: "var(--background-50)",
        100: "var(--background-100)",
        200: "var(--background-200)",
        300: "var(--background-300)",
        400: "var(--background-400)",
        500: "var(--background-500)",
        600: "var(--background-600)",
        700: "var(--background-700)",
        800: "var(--background-800)",
        900: "var(--background-900)",
        950: "var(--background-950)",
      },
      "primary": {
        DEFAULT: "var(--primary)",
        0: "var(--primary-0)",
        100: "var(--primary-100)",
        200: "var(--primary-200)",
        300: "var(--primary-300)",
        400: "var(--primary-400)",
        500: "var(--primary-500)",
      },
      "accent": {
        DEFAULT: "var(--accent)",
        50: "var(--accent-50)",
        100: "var(--accent-100)",
        200: "var(--accent-200)",
        300: "var(--accent-300)",
        400: "var(--accent-400)",
        500: "var(--accent-500)",
        600: "var(--accent-600)",
        700: "var(--accent-700)",
        800: "var(--accent-800)",
        900: "var(--accent-900)",
        950: "var(--accent-950)",
      },
      "text": {
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
      }
    },
  },
  plugins: [],
} satisfies Config;
