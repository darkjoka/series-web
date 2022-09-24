module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx', './widgets/**/*.tsx'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
