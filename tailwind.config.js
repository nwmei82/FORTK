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
        'pap': "url('/paper.jpg')",
        'bgt': "url('/bgtest.jpg')",
        'bgt2': "url('/bgt2.jpg')",
        'bgt3': "url('/bg3.jpg')",
        'bgt4': "url('/bgt4.jpg')",
        'bgt5': "url('/bgt5.jpg')",
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}