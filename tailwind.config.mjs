/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': '#4D7C0F',
        'primary-dark': '#3F6212',
        'secondary': '#CA8A04',
        'neutral': '#FAFAF9',
        'dark': '#1C1917',
        'accent': {
          100: '#ECFCCB',
          200: '#D9F99D',
          300: '#BEF264',
          400: '#A3E635',
        },
        'earth': {
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
        }
      },
      fontFamily: {
        sans: ['Josefin Sans', 'system-ui', 'sans-serif'],
        display: ['Cardo', 'serif'],
        body: ['Josefin Sans', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            'max-width': '65ch',
            color: '#374151',
            h1: {
              fontFamily: 'Cardo, serif',
              fontWeight: '700',
            },
            h2: {
              fontFamily: 'Cardo, serif',
              fontWeight: '600',
            },
            h3: {
              fontFamily: 'Cardo, serif',
              fontWeight: '600',
            },
          },
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'fade-in': 'fade-in 1s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(1)' },
          '75%': { transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 