module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    '../node_modules/flowbite/**/*.js.js',
    './node_modules/flowbite/**/*.js.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat, cursive'],
        MontserratBold: ['MontserratBold, cursive'],
      },
      colors: {
        'darkpurple': '#2B193D',
        'spacecadet': '#2C365E',
        'independence': '#484D6D',
        'wintergreen': '#4B8F8C',
        'tuscany': '#C5979D',
      }
    },
  },
  variants: {
    extend: {
      fontFamily: ['hover', 'focus'],
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  corePlugins: {
    fontFamily: true,
  },
}