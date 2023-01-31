/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        "whitesmoke": "#f6f6f6",
      }
    },
  },
  plugins: [],
};
