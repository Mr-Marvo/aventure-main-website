import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        baunk: ["Baunk", "sans-serif"],
      },
      colors: {
        buttonGreen: "var(--buttonGreen)",
      },
    },
  },
  plugins: [],
};

export default config;
