module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
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