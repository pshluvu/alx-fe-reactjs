/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",          // <-- important for Vite
    "./src/**/*.{js,jsx,ts,tsx}" // <-- all React components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
