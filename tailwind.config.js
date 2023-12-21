/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'dropdown_animation': 'drop-down_animation 200ms ease 1 alternate'
      },
      keyframes: {
        dropdown_animation: {
          '0%, 50%': {
            opacity: 0
          },
          '100%': {
            opacity: 1
          }
        }
      }
    },
  },
  plugins: [],
}

