/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-background':
          'linear-gradient(90deg, #3f66e6 0%, #3c16a4 100%)',
      },
      colors: {
        metal: {
          50: '#636367',
          100: '#5c5c61',
          200: '#55555b',
          300: '#4e4e54',
          400: '#47474d',
          500: '#404046',
          600: '#39393f',
          700: '#323237',
          800: '#2b2b30',
          900: '#242428',
          950: '#1d1d20',
        },
        lightBlue: {
          50: '#e6f7ff',
          100: '#b3e6ff',
          200: '#80d4ff',
          300: '#4dc2ff',
          400: '#1aafff',
          500: '#008cff',
          600: '#0079e6',
          700: '#0066cc',
          800: '#0052b3',
          900: '#004099',
          950: '#003380',
        },
        darkBlue: {
          50: '#2c7fa9',
          100: '#29779f',
          200: '#266f95',
          300: '#23678b',
          400: '#205f82',
          500: '#1d5778',
          600: '#1a506e',
          700: '#184966',
          800: '#15415e',
          900: '#123a54',
          950: '#0f3249',
        },
        customBlue: {
          100: '#3E43CA',
          200: '#3c16a4',
          300: '#03030f',
        },
      },
      borderImage: {
        'gradient-border': 'linear-gradient(180deg, #3f66e6, #3c16a4)',
      },
    },
  },
  plugins: [],
}
