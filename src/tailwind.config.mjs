/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1dc2b4",
                secondary: "#db2424",
            },
        },
    },
    plugins: [],    
}