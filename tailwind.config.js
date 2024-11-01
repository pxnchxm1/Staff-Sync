/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "425px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1440px",
        },
        extend: {
            screens: {
                ssm: "320px",
            },
            animation: {
                "loop-scroll-up": "loop-scroll-up 20s linear infinite",
                "loop-scroll-down": "loop-scroll-down 20s linear infinite",
                "loop-scroll-left": "loop-scroll-left 20s linear infinite",
            },
            keyframes: {
                "loop-scroll-up": {
                    from: { transform: "translateY(0)" },
                    to: { transform: "translateY(-100%)" },
                },
                "loop-scroll-down": {
                    from: { transform: "translateY(-100%)" },
                    to: { transform: "translateY(0)" },
                },
                "loop-scroll-left": {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(-100%)" },
                },
            },
            colors: {
                light: "white",
                dark: "#1b1b1b",
                lightgrey: "#e6e4e4",
                lightblack: "#57636c",
            },
        },
    },
    plugins: [],
};
