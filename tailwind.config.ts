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
      },
      backgroundImage: {
        'contact': 'linear-gradient(to right, #FFFFE0, #FFFF00, #DFFF00, #9ACD32, #32CD32)',
        'home': 'linear-gradient(to right, #e98fe9, #f890f8, #ed7cb5, #f3349a, #ed794e)',
        'about': 'linear-gradient(to right, #f0b82d, #f37024, #e50914, #de0411, #f32c36)',
        'service': 'linear-gradient(to right, #00bfff, #80dfff, #c0e7ff, #f0f0b4, #f0e68c)',
      },
    },
  },
  plugins: [],
};

export default config;
