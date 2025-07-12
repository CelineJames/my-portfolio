/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class', // ✅ uses user's system preference
  theme: {
    extend: {
      screens: {
        xs: '360px',    // Custom smallest screen
        sm: '640px',    // Small tablets / large phones
        md: '768px',    // Tablets
        lg: '1024px',   // Laptops
        xl: '1280px',   // Desktops
        // 2xl: '1536px' // Optional: Ultra-wide monitors
      },
      colors: {
        primary: '#C4C4C4',
        secondary: '#111827',
        accent: '#f59e0b',
        dark: '#111827',
        light: '#f3f4f6',
      },
      fontFamily: {
        heading: ['Domine', 'serif'],
        sans: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
