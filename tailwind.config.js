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
        card: '#131313',
        customBlue: {
          100: '#3E43CA',
          200: '#3c16a4',
          300: '#03030f',
          400: '#06061c',
        },
      },
      borderImage: {
        'gradient-border': 'linear-gradient(180deg, #3f66e6, #3c16a4)',
      },
    },
  },
  plugins: [],
}
