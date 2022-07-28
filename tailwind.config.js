/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['IBM Plex Sans', ...fontFamily.sans]
    },
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1'
      },
      spacing: {
        28: '7rem'
      },
      boxShadow: {
        small: '0 8px 16px rgba(0, 0, 0, 0.18)',
        medium: '0 12px 35px rgba(0, 0, 0, 0.18)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
