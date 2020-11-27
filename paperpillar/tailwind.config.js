const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#EF4B6C',
        'text-primary': '#5238B3',
        'text-black': '#212529',
      },
      maxWidth: {
        container: '1140px',
      },
      fontFamily: {
        playfair: 'Playfair Display',
        mont: 'Montserrat',
      },
    },
  },
  variants: {},
  plugins: [],
}
