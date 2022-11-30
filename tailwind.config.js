/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primaryColor": "#E5E5E5",
        'mainGreen': '#327F37',
        'secondaryGreen': '#1A8917',
        'mainBlack': '#292D33',
        'lightGray': '#727A82',
        'bgGray': '#E0E2E7'
      },
      screens: {
        xs: '440px',
      },
      boxShadow: {
        'big': '0px 1px 5px rgba(41, 45, 51, 0.04), inset 0px -1px 0px rgba(41, 45, 51, 0.1)',
        'small': '0px 2px 2px rgba(41, 45, 51, 0.04)',
      },
    },
  },
  plugins: [],
}
