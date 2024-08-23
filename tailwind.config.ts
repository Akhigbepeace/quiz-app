import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#3F0DC5",
        secondaryColor: "#101828",
        tertiaryColor: "#475467",
      },

      fontFamily: {
        red_hat_display: ["var(--font-red-hat-display)"],
        dm_sans: ["var(--font-dm-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
