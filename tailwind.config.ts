import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brown800: "hsl(14, 45%, 36%)",
        stone100: "hsl(30, 54%, 90%)",
        stone150: "hsl(30, 18%, 87%)",
        stone600: "hsl(30, 10%, 34%)",
        stone900: "hsl(24, 5%, 18%)",
        rose50: "hsl(330, 100%, 98%)",
        rose800: "hsl(332, 51%, 32%)",
      }
    },
  },
  plugins: [],
};
export default config;
