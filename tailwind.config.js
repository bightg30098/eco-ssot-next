const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

const baseSizes = {
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  11: '2.75rem',
  12: '3rem',
  13: '3.25rem',
  14: '3.5rem',
  15: '3.75rem',
  16: '4rem',
  18: '4.5rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
}

const gridTemplates = {
  7: 'repeat(7, minmax(0, 1fr))',
  8: 'repeat(8, minmax(0, 1fr))',
  9: 'repeat(9, minmax(0, 1fr))',
  10: 'repeat(10, minmax(0, 1fr))',
  11: 'repeat(11, minmax(0, 1fr))',
  12: 'repeat(12, minmax(0, 1fr))',
  13: 'repeat(13, minmax(0, 1fr))',
  14: 'repeat(14, minmax(0, 1fr))',
  15: 'repeat(15, minmax(0, 1fr))',
  16: 'repeat(16, minmax(0, 1fr))',
  17: 'repeat(17, minmax(0, 1fr))',
  18: 'repeat(18, minmax(0, 1fr))',
  19: 'repeat(19, minmax(0, 1fr))',
  20: 'repeat(20, minmax(0, 1fr))',
  21: 'repeat(21, minmax(0, 1fr))',
  22: 'repeat(22, minmax(0, 1fr))',
  23: 'repeat(23, minmax(0, 1fr))',
  24: 'repeat(24, minmax(0, 1fr))',
}

const gridSpans = {
  'span-7': 'span 7 / span 7',
  'span-8': 'span 8 / span 8',
  'span-9': 'span 9 / span 9',
  'span-10': 'span 10 / span 10',
  'span-11': 'span 11 / span 11',
  'span-12': 'span 12 / span 12',
  'span-13': 'span 13 / span 13',
  'span-14': 'span 14 / span 14',
  'span-15': 'span 15 / span 15',
  'span-16': 'span 16 / span 16',
  'span-17': 'span 17 / span 17',
  'span-18': 'span 18 / span 18',
  'span-19': 'span 19 / span 19',
  'span-20': 'span 20 / span 20',
  'span-21': 'span 21 / span 21',
  'span-22': 'span 22 / span 22',
  'span-23': 'span 23 / span 23',
  'span-24': 'span 24 / span 24',
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      ...defaultTheme.screens,
      sm: { max: '1024px' },
      md: { min: '1024px' },
      lg: { min: '1280px' },
      xl: { min: '1366px' },
      '2xl': { min: '1536px' },
      '1k': { min: '1920px' },
      '2k': { min: '2560px' },
      '4k': { min: '3840px' },
      '5k': { min: '5120px' },
      '8k': { min: '7680px' },
    },
    extend: {
      colors: {
        gray: colors.neutral,
        primary: {
          ...colors.emerald,
          500: '#21CC97',
          600: '#489C9C',
          700: '#3F7879',
          800: '#30494D',
          900: '#203033',
        },
        dangerous: {
          ...colors.red,
          500: '#FF4E4E',
          700: '#D23B5F',
          900: '#69061E',
        },
        yellow: {
          ...colors.yellow,
          DEFAULT: '#FACA00',
        },
        orange: {
          ...colors.orange,
          DEFAULT: '#FF9300',
        },
        blue: {
          ...colors.blue,
          DEFAULT: '#3BAEE5',
        },
      },
      maxHeight: {
        ...baseSizes,
      },
      maxWidth: {
        ...baseSizes,
      },
      minHeight: {
        ...baseSizes,
      },
      minWidth: {
        ...baseSizes,
      },
      gridTemplateRows: {
        ...gridTemplates,
      },
      gridTemplateColumns: {
        ...gridTemplates,
      },
      gridRow: {
        ...gridSpans,
      },
      gridColumn: {
        ...gridSpans,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
