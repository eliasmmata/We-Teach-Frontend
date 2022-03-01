module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    '../node_modules/flowbite/**/*.js.js',
    './node_modules/flowbite/**/*.js.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat, mono-sans'],
        MontserratBold: ['MontserratBold, mono-sans'],
      },
      colors: {
        'darkpurple': '#2B193D',
        'spacecadet': '#2C365E',
        'independence': '#484D6D',
        'wintergreen': '#4B8F8C',
        'tuscany': '#C5979D',
        'indigo': {
          900: '#2B193D',
        },
        'background': {
          100: '#F8F2F3',
          200: '#D7EAE9',
          900: '#2B193D',
        }
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