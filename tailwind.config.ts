import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "card-back": "url('/images/bg-card-back.png')",
        "card-front": "url('/images/bg-card-front.png')",
        "bg-mobile": "url('/images/bg-main-mobile.png')",
        "bg-desktop": "url('/images/bg-main-desktop.png')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        Neutral: {
          light_grayish_violet: "hsl(var(--light-grayish-violet))",
          dark_grayish_violet: "hsl(var(--dark-grayish-violet))",
          very_dark_violet: "hsl(var(--very-dark-violet))",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
