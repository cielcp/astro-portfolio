module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '96rem',
        '5/6': '83.333333%',
      },
      maxHeight: {
        100: '28rem',
        '8xl': '96rem',
        '5/6': '83.333333%',
      },
      keyframes: {
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      transitionTimingFunction: {
        custom1: 'cubic-bezier(0.86, 0, 0.07, 1)',
        custom2: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        gradient: 'animatedgradient 10s ease infinite alternate',
      },
      fontFamily: {
        readex: ['Readex Pro', 'sans-serif'],
        heebo: ['Heebo', 'sans-serif'],
      },
      filter: {
        '01': 'var(--filter-01)',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        '.filter-custom': {
          filter: 'var(--filter-01)',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}
