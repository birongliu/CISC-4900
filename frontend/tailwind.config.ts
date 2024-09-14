import { url } from "inspector";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
     },
      animation: {
        fadeIn: 'fadeIn 1s',
        fadeOut: 'fadeOut 1s'
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      colors: {
        "light-primary": "rgba(153, 162, 165, 1)",
        "button-primary": "rgba(241, 239, 228, 1)",
        "black-100": "rgba(47, 0, 22, 1)",
        "text-secondary": "rgba(227, 205, 173, 1)",
      },
      backgroundColor: {
        "light-primary": "rgba(241, 239, 228, 1)",
        "dark-primary": "rgba(227, 205, 173, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
