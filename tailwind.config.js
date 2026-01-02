/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [],
    theme: {
        extend: {
            colors: {
                blue: {
                    900: "hsl(209, 23%, 22%)", // Dark Mode Elements
                    950: "hsl(207, 26%, 17%)", // Dark Mode Background
                },
                grey: {
                    50: "hsl(0, 0%, 99%)", // Light Mode Background
                    400: "hsl(0, 0%, 50%)", // Light Mode Input
                    950: "hsl(200, 15%, 8%)", // Light Mode Text
                },
            },
            fontFamily: {
                display: "Nunito Sans",
            },
            boxShadow: {
                "base": "0 2px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                "mdd": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
            },
        },
    },
    plugins: [],
}
