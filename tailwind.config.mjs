export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blush:    '#FFB3C6',
        lavender: '#C9B8FF',
        mint:     '#B5EAD7',
        peach:    '#FFDAC1',
        sky:      '#C7EEFF',
        cream:    '#FFF9F0',
        ink:      '#3D2C4E',
        'ink-light': '#6B5B7E',
      },
      fontFamily: {
        display: ['Pacifico', 'cursive'],
        body:    ['Nunito', 'sans-serif'],
      },
      borderRadius: {
        card:  '1.25rem',
        badge: '999px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(180, 120, 200, 0.15)',
        'card-hover': '0 8px 32px rgba(180, 120, 200, 0.28)',
      },
    },
  },
  plugins: [],
};
