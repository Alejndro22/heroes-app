/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'mountbatten-pink': '#987284',
        'earth-yellow': '#E0A458',
        'munsell-blue': '#048BA8',
        emerald: '#16DB93',
      },
    },
  },
  plugins: [],
};
