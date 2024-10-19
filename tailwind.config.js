/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Nunito", "sans-serif"],
                jost: ["Jost", "sans-serif"],
                "bubblegum-sans": ["Bubblegum Sans", "sans-serif"],
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
