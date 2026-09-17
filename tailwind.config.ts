import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0B",
        surface: "#111113",
        border: "#242426",
        text: "#EDEDED",
        muted: "#8A8A8E",
        accent: "#5EEAD4",
        accentDim: "#2DD4BF",
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
      },
      maxWidth: {
        content: "720px",
      },
      typography: () => ({
        DEFAULT: {
          css: {
            maxWidth: "80ch",
          },
        },
      }),
    },
  },
  plugins: [],
};
export default config;
