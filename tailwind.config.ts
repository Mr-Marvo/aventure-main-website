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
      fontSize: {
        fluid: "clamp(28px, 11.9vw, 200px)",
      },
    },
  },
  plugins: [],
};

export default config;
