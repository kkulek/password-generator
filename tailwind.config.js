/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                darkest: '#18171F',
                dark: '#24232C',
                light: '#817D92',
                lightest: '#E6E5EA',
                accent: '#A4FFAF',
                pass: {
                    weakest: '#F64A4A',
                    weak: '#FB7C58',
                    medium: '#F8CD65',
                    strong: '#A4FFAF'
                }
            },
            fontFamily: {
                primary: ['JetBrains Mono', 'monospace']
            }
        },
    },
    plugins: [],
}
