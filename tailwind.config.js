/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        stickyHeader: {
          '0%' : { transform: 'translateY(-100%)' },
          '100%' : { transform: 'translateY(0)' }
        }
      },
      animation: {
        'headerFixed': 'stickyHeader 500ms ease 0s'
      },
      colors: {
        'main-pink': '#faedeb'
      },
    },
  },
  daisyui: {
    themes: ["lofi", "dark", "cupcake"],
  },
  plugins: [require("daisyui")],
}

