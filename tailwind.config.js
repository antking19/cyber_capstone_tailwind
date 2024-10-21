/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
    theme: {
        extend: {
            width: {
                7.5: ["30px"],
            },
            height: {
                12.5: ["50px"],
            },
            colors: {
                warm: ["#fff0e5"],
                "destructive-foreground": ["#ed145b"],
                "cream-foreground": ["#fff"],
                green: ["#73be48"],
                primary: ["#f7941e"],
                secondary: ["#1cbbb4"],
                background: ["#fff"],
                destructive: ["#ed145b"],
                muted: ["#000"],
            },
            fontFamily: {
                sans: ["Nunito", "sans-serif"],
                jost: ["Jost", "sans-serif"],
                "bubblegum-sans": ["Bubblegum Sans", "sans-serif"],
            },
            padding: {
                7.5: ["30px"],
            },
            gridTemplateColumns: {
                "[60%_40%]": ["60% 40%"],
            },
            gap: {
                7.5: ["30px"],
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
