/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,html,scss,css}",
    "./pages/**/*.{js,ts,html,scss,css}",
    "./components/**/*.{js,ts,html,scss,css}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,html,scss,css}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};