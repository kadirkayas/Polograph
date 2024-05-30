import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '14rem': '14rem',
        '12rem': '12rem',
        '10rem': '10rem',
        '8rem': '8rem',
        '6rem': '6rem',
      },
    },
  },
  plugins: [],
};

export default config;
