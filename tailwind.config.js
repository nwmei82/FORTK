module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        'mitr' : ['Mitr','serif'],
        'fair' : ['Playfair Display','serif'],
        'athiti' : ['Athiti','serif']
      },
      backgroundImage: {
        'bgs': "url('/bgt.jpg')",
        'cov': "url('/cover.jpg')",
        'pap': "url('/paper.jpg')"
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}