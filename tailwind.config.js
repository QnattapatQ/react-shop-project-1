/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fixedHeader: {
          '100%' : { transform: 'translateY(50%)' }
        }
      },
    },
  },
  plugins: [],
}

