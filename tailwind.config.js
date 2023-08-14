const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*{html,js}'],
  theme: {
    colors: {
      ...colors,
    },
    extend: {
      animation: {
        changeBackgroundColor: 'changeBackgroundColor 10s linear infinite',
      },
      keyframes: {
        changeBackgroundColor: {
          '0%, 100%': {
            'background-color': '#CBB6DD',
          },
          '20%': {
            'background-color': '#9381BF',
          },
          '40%': {
            'background-color': '#3C437A',
          },
          '60%': {
            'background-color': '#1D274A',
          },
          '80%': {
            'background-color': '#232834',
          },
        },
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
};
