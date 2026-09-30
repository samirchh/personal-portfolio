import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cool grey-blue "canvas" (like a Figma board), not warm cream.
        canvas: "#E9ECF1",
        frame: "#FFFFFF",
        ink: "#12182B",
        graphite: "#5A6275",
        hairline: "#C9CFDB",
        // The red designers use to annotate mockups. Used for marks only.
        redline: "#E5312B",
        // QA verdict green. Used for status only.
        pass: "#13795B",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        board: "1180px",
      },
    },
  },
  plugins: [],
};
export default config;
