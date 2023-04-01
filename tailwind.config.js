/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Dancing-script": ["Dancing Script", "cursive"],
        "jost": ["Jost", "sans-serif"],
        "Poppins": ["Poppins", "sans-serif"],
        "monserrat": ["Montserrat", "sans-serif"],
        "tilt-wrap": ["Tilt Warp", "cursive"]
      }
    },
  },
  plugins: [],
}

