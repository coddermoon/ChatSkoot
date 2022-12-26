/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
     'primary':'#C147E9',
     'secondary':'#015871',
     'bgPrimary':'#10121B',
     'bgSecondary':'#191D2B',
     'white':'#FFF',
     'secondaryWhite':'#8b8b8b',
     'highlight':'#cdcdcd'
    },
    extend: {},
  },
  plugins: [],
}
