/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        keyframes: {
            "bounce-effect": {
                '0%, 100%': { 
                    transform: 'translateY(0)'
                },
                '50%': {
                    transform: 'translateY(-20px)'
                }
            }
        },
        animation: {
            "bounce-effect": "bounce-effect 2s infinite"
        }
    },
  },
  plugins: [
    function({addUtilities}) {
        const newUtility = {
            ".hide-scrollbar::-webkit-scrollbar": {
                display: "none"
            },
            "hide-scrollbar": {
                "-ms-overflow-style": "none",
                "scrollbar-width": "none"
            }
        }
        addUtilities(newUtility)
    }
  ],
}