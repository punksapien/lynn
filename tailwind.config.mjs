/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Lexend Deca"', 'sans-serif'],
        sans: ['"Lexend Deca"', 'sans-serif'],
      },
      colors: {
        lynn: {
          gold: '#C5A059',
          dark: '#1a1a1a',
          cream: '#F9F8F4',
          stone: '#2A2A2A',
        },
      },
      keyframes: {
        'scroll-logos': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'scroll-logos': 'scroll-logos 75s linear infinite',
      },
    },
  },
  plugins: [],
};
