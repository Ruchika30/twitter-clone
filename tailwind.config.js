/** @type {import('tailwindcss').Config} */

// const Colors = require('./src/tokens/color');


module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            borderRadius: {
                'xl': '2rem',
            },
            colors: {
                twitterBlue: '#1C9BEF'
            }
        },
    },
    plugins: [],
}