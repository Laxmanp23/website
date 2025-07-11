/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        rotateSlow: 'rotateSlow 6s linear infinite',
        blink: 'blink 1.2s ease-in-out infinite',
      },
      keyframes: {

        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        blink: {
          '0%': {
        opacity: '0',
        transform: 'scale(0.5)',
        borderWidth: '1px',
      },
      '50%': {
        opacity: '1',
        transform: 'scale(1)',
        borderWidth: '2px',
      },
      '100%': {
        opacity: '0',
        transform: 'scale(1.3)',
        borderWidth: '3px',
      },
        }
      },
    },
  },
  plugins: [],
}