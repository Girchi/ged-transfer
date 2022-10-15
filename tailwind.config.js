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
    },
  },
  plugins: [],
}
