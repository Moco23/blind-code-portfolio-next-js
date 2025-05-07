import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    // Make sure 'darkMode' is set if you rely on the 'dark:' prefix based on media query
    darkMode: "media", // or 'class' if you prefer manual toggling
    theme: {
        extend: {
            // Add or modify the 'colors' object here
            colors: {
                border: "rgb(var(--border) / <alpha-value>)",
                background: "rgb(var(--background) / <alpha-value>)",
                foreground: "rgb(var(--foreground) / <alpha-value>)",
                primary: {
                    DEFAULT: "rgb(var(--primary) / <alpha-value>)",
                    foreground: "rgb(var(--primary-foreground) / <alpha-value>)",
                },
                secondary: {
                    DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
                    foreground: "rgb(var(--secondary-foreground) / <alpha-value>)",
                },
                muted: {
                    DEFAULT: "rgb(var(--muted) / <alpha-value>)",
                    foreground: "rgb(var(--muted-foreground) / <alpha-value>)",
                },
                card: {
                    DEFAULT: "rgb(var(--card) / <alpha-value>)",
                    foreground: "rgb(var(--card-foreground) / <alpha-value>)",
                },
                // You can add more colors here if needed (e.g., accent, destructive)
            },
            // You might have other extensions here (fonts, animations, etc.)
            // Ensure your Geist font variables are correctly referenced if needed
            // fontFamily: {
            //   sans: ['var(--font-geist-sans)'],
            //   mono: ['var(--font-geist-mono)'],
            // },
        },
    },
    plugins: [],
};
export default config;
