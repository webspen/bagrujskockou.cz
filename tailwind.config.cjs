/** @type {import("tailwindcss").Config} */
const defaultTheme = require("tailwindcss/defaultTheme")


module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "sans": [ "Manrope", ...defaultTheme.fontFamily.sans ],
                "display": [ "Space Grotesk", "Manrope", ...defaultTheme.fontFamily.sans ],
            },
            colors: {
                // Accent: cyan. Neutrals: cool gray. Matches the site's original palette.
                brand: {
                    50: "#ECFEFF",
                    100: "#CFFAFE",
                    200: "#A5F3FC",
                    300: "#67E8F9",
                    400: "#22D3EE",
                    500: "#06B6D4", // primary
                    600: "#0891B2",
                    700: "#0E7490",
                    800: "#155E75",
                    900: "#164E63",
                },
                ink: {
                    50: "#FFFFFF",
                    100: "#F3F4F6",
                    200: "#E5E7EB",
                    700: "#4B5563",
                    800: "#374151",
                    900: "#1F2937", // primary dark — matches original bg-gray-800
                    950: "#111827",
                },
            },
            boxShadow: {
                "card": "0 1px 2px rgba(17, 24, 39, 0.06), 0 8px 24px -8px rgba(17, 24, 39, 0.14)",
                "card-hover": "0 2px 6px rgba(17, 24, 39, 0.08), 0 18px 36px -12px rgba(17, 24, 39, 0.28)",
                "brand-glow": "0 8px 24px -8px rgba(6, 182, 212, 0.55)",
            },
            keyframes: {
                "fade-up": {
                    "0%": { opacity: "0", transform: "translateY(16px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "fade-in": {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
            },
            animation: {
                "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
                "fade-in": "fade-in 0.8s ease-out both",
            },
        },
    },
    plugins: [
        require("tailwind-scrollbar"),
    ],
}
