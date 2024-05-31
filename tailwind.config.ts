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
      height: {
        '16rem': '16rem',
        '28rem': '28rem',
        '32rem': '32rem',
        '36rem': '36rem',
      },
      lineHeight: {
        '3rem': '3rem',
        '4rem': '4rem',       
      }
    },
  },
  plugins: [],
};

export default config;
