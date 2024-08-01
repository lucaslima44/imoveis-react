import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-700": "#7A23F8",
        "purple-900": "#120229",
        "gray-100": "#EFEFEF",
        "blue-300": "#1C3988",
        "blue-700": "#141B2D",
      },
      maxWidth: {
        container: "77.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
