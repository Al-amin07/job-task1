/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  extend: {
    boxShadow: {
      'custom-red': '0 4px 6px rgba(255, 0, 0, 0.3)', // Red shadow
      'custom-blue': '0 4px 6px rgba(0, 0, 255, 0.3)', // Blue shadow
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

