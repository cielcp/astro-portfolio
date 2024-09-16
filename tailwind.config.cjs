module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '96rem',
        '5/6': '83.333333%',
      },
      maxHeight: {
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
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        gradient: 'animatedgradient 10s ease infinite alternate',
      },
      fontFamily: {
        readex: ['Readex Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
