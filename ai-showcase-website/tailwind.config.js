/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4F46E5', // Indigo-600 as primary
        'secondary': '#EC4899', // Pink-500 as secondary
        'light-bg': '#F9FAFB', // Gray-50 for light backgrounds
        'dark-bg': '#1F2937',  // Gray-800 for dark backgrounds
        'light-text': '#F3F4F6', // Gray-100 for text on dark backgrounds
        'dark-text': '#111827',  // Gray-900 for text on light backgrounds
        'accent-hover': '#3730A3', // Darker Indigo for hover on primary
        'secondary-hover': '#DB2777', // Darker Pink for hover on secondary
      },
    },
  },
  plugins: [],
}
