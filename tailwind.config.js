/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c1272d',    // Moroccan red
        secondary: '#006233',  // Moroccan green
        accent: '#ffd700',     // Gold accent
      },
    },
  },
  plugins: [],
}