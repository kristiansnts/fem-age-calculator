/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary-purple': 'hsl(259, 100%, 65%)',
        'light-red': 'hsl(0, 100%, 67%)',
        'off-white': 'hsl(0, 0%, 94%)',
        'light-grey': 'hsl(0, 0%, 86%)',
        'smokey-grey': 'hsl(0, 1%, 44%)'
      }
    },
  },
  plugins: [],
}

