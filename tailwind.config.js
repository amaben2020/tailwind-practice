/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    // custom breakpoints
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      // custom breakpoints
      colors: {
        brightRed: 'hsl(12,88%, 59%',
        brightRedLight: 'hsl(12,88%, 69%',
        brightRedSupLight: 'hsl(12,88%, 95%',
      },
    },
  },
  plugins: [],
};
