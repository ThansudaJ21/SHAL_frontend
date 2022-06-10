module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      kanit: ['Kanit', 'sans-serif']
    },
    extend: {
      colors: {
        neutral: {
          50: '#f6f6f7',
          100: '#efeff0',
          200: '#e1e2e4',
          300: '#cfcfd2',
          400: '#bababf',
          500: '#a7a7ad',
          600: '#919198',
          700: '#7e7e84',
          800: '#67676c',
          900: '#565659'
        },
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#94c5fc',
          400: '#61a5f9',
          500: '#3b82f5',
          600: '#2663ea',
          700: '#1e4ed7',
          800: '#1f40ae',
          900: '#1f3a89'
        },
        success: {
          50: '#edfcf4',
          100: '#d4f7e2',
          200: '#aceeca',
          300: '#76dfab',
          400: '#3ec988',
          500: '#1ec17b',
          600: '#0e8d59',
          700: '#0c704a',
          800: '#0c593b',
          900: '#0b4933'
        },
        error: {
          50: '#fef2f2',
          100: '#fce7e7',
          200: '#f9d2d4',
          300: '#f5acb1',
          400: '#ed757f',
          500: '#e35060',
          600: '#cf2f48',
          700: '#ae223b',
          800: '#921f38',
          900: '#7d1e35'
        },
        white: '#ffffff',
        black: '#1d1d1f'
      }
    }
  },
}