import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            colors: {
                spicy: {
                    50: "#fff3e0",
                    100: "#ffe0b2",
                    200: "#ffcc80",
                    300: "#ffb74d",
                    400: "#ffa726",
                    500: "#ff9100",
                    600: "#ff6d00",
                    700: "#ff3d00",
                    800: "#dd2c00",
                    900: "#d50000",
                },
                dark: {
                    50: "#2a2a2a",
                    100: "#1f1f1f",
                    200: "#1a1a1a",
                    300: "#151515",
                    400: "#111111",
                    500: "#0d0d0d",
                    600: "#0a0a0a",
                    700: "#080808",
                    800: "#050505",
                    900: "#020202",
                },
            },
            keyframes: {
                "slide-up": {
                    "0%": { transform: "translateY(30px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                glow: {
                    "0%, 100%": { boxShadow: "0 0 15px rgba(255,61,0,0.5)" },
                    "50%": { boxShadow: "0 0 30px rgba(255,145,0,0.8)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                "pulse-glow": {
                    "0%, 100%": { opacity: "0.6" },
                    "50%": { opacity: "1" },
                },
            },
            animation: {
                "slide-up": "slide-up 0.6s ease-out",
                glow: "glow 2s ease-in-out infinite",
                float: "float 3s ease-in-out infinite",
                "pulse-glow": "pulse-glow 2s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};

export default config;
