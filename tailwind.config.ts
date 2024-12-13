import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}", // Add ShadCN UI components
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)", // Add primary color for ShadCN UI
        "primary-foreground": "var(--primary-foreground)", // Text for primary buttons
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)", // Text for accent buttons
        ring: "var(--ring)", // Focus ring color
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Default font for ShadCN UI
      },
    },
  },
  plugins: [],
} satisfies Config;
