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
        },
        productLoader: {
          '0%' : { transform: 'scale(0)' },
          '50%' : { transform: 'scale(1.05)' },
          '100%' : { transform: 'scale(1)' }
        }
      },
      animation: {
        'headerFixed': 'stickyHeader 500ms ease 0s',
        'productScale': 'productLoader 0.5s'
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

