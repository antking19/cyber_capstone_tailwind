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
                15: ["60px"],
            },
            gridTemplateColumns: {
                "[60%_40%]": ["60% 40%"],
            },
            gap: {
                7.5: ["30px"],
            },
            spacing: {
                7.5: ["30px"],
                15: ["60px"],
                12.5: ["50px"],
            },
            gridTemplateColumns: {
                "[37%_auto]": ["37% auto"],
            },
            maxHeight: {
                15: ["60px"],
            },
            boxShadow: {
                sm: ["0 0 10px 0 rgba(0 0 0 / 0.2)"],
                "3xl": ["0px 4.4px 20px -1px rgba(19, 16, 34, 0.1)"],
                "4xl": ["0px 4.4px 20px -1px rgba(19, 16, 34, 0.05)"],
            },
            backgroundImage: {
                "testimonial-banner": "url('../images/bg2-img.png')",
                "newsletter-banner": "url('../images/bg-img.png')",
                "newsletter-egg": "url('../images/egg-shap.png')",
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
