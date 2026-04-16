import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0088CC",
        accent: "#FF7700",
        yellow: "#FFCC00",
        muted: "#5A7A8A",
      },
      fontFamily: {
        sans: ["var(--font-comfortaa)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
