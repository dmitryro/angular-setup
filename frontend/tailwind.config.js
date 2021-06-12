const { guessProductionMode } = require("@ngneat/tailwind");

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
    prefix: '',
    mode: 'jit',
    purge: {
      content: [
        './src/**/*.{html,ts,css,scss,sass,less,styl}',
      ]
    },
    darkMode: 'media', // or 'media' or 'class'
    theme: {
      gridPlugin: {
        columns: 12,
        gutterWidth: 1,
        gutterUnit: 'rem',
        prefix: 'c-',
      },
      fill: {
          current: 'currentColor',
      },
      fill: theme => ({
        'red': theme('colors.red.500'),
        'green': theme('colors.green.500'),
        'blue': theme('colors.blue.500'),
        'white': theme('colors.white.500'),
      }),
      extend: {
          ripple: theme => ({
            colors: theme('colors')
          }),
      },
      ripple: theme => ({
         colors: theme('colors')
      }),
    },
    variants: {
      extend: {
        outline: ["focus"],
        gridTemplateColumns: ['hover', 'focus'],
        fill: ['hover'],
      },
    },
    plugins: [require('@tailwindcss/forms'),
              require('@tailwindcss/typography'),
              require('tailwindcss-box-shadow'),
              require('tailwindcss-ripple')],
    corePlugins: {
       boxShadow: false,
    },
};
