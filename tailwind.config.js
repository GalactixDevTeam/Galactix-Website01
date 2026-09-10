/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        'display-lg': ['56px', { lineHeight: '64px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['44px', { lineHeight: '52px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-sm': ['36px', { lineHeight: '44px', letterSpacing: '-0.02em', fontWeight: '600' }],
        'heading-lg': ['30px', { lineHeight: '38px', letterSpacing: '-0.015em', fontWeight: '600' }],
        'heading-md': ['24px', { lineHeight: '32px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', letterSpacing: '-0.005em' }],
        'body-md': ['16px', { lineHeight: '24px', letterSpacing: '-0.005em' }],
        'body-sm': ['14px', { lineHeight: '20px' }],
        'caption': ['12px', { lineHeight: '16px', letterSpacing: '0.02em', fontWeight: '500' }],
      },

    },
  },

  plugins: [],
};