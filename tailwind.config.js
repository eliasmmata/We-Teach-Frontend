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
    }
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