/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'enter': 'enter 0.2s ease-out',
        'exit': 'exit 0.15s ease-in forwards',
      },
      keyframes: {
        enter: {
          '0%': { transform: 'scale(0.9) translateY(1rem)', opacity: 0 },
          '100%': { transform: 'scale(1) translateY(0)', opacity: 1 },
        },
        exit: {
          '0%': { transform: 'scale(1) translateY(0)', opacity: 1 },
          '100%': { transform: 'scale(0.9) translateY(1rem)', opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};