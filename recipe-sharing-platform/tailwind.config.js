/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",           // Vite root HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // All React components
    "./public/index.html"     // Optional: include if you reference classes in public HTML
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
