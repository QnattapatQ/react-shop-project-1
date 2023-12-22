/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        stickyHeaderScrollDown: {
          '0%' : { transform: 'translateY(-100%)' },
          '100%' : { transform: 'translateY(0)' }
        },
        stickyHeaderScrollUp: {
          '0%' : { transform: 'translateY(0)' },
          '100%' : { transform: 'translateY(-100%)' }
        },
        productLoader: {
          '0%' : { transform: 'scale(0)' },
          '50%' : { transform: 'scale(1.05)' },
          '100%' : { transform: 'scale(1)' }
        },
        stickyProductBarUp: {
          '0%' : { transform: 'translateY(100%)' },
          '100%' : { transform: 'translateY(0)' }
        },
        stickyProductBarDown: {
          '0%' : { transform: 'translateY(0)' },
          '100%' : { transform: 'translateY(100%)' }
        },
      },
      animation: {
        'headerFixed': 'stickyHeaderScrollDown 500ms ease 0s',
        'headerRemoveFixed': 'stickyHeaderScrollUp 500ms ease 0s',
        'productScale': 'productLoader 0.5s',
        'productBarUp': 'stickyProductBarUp 0.5s',
        'productBarDown': 'stickyProductBarDown 0.5s',
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

