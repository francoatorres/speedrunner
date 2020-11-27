const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        dark: '#343434',
        lessdark: '#525252',
        lightdark: '#3a3a3a',
        primary: '#00E472',
        'primary-darker': '#20da7d',
        supergray: 'gray',
        'c-span': '#c2c2c2',
        'darker': '#2d2d2d',
        'darkest': '#1f1f1f',
      },
      fontSize: {
        span: '9.6px',
      },
      lineHeight: {
        headline: '1.1em',
      },
      borderRadius: {
        exacly: '50px',
      }
    },
  },
  variants: {},
  plugins: [],
}
