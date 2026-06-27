/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        bg: {
          DEFAULT: '#0c0c0c',
          2: '#111111',
          3: '#171717',
        },
        card: '#141414',
        accent: {
          DEFAULT: '#e8673c',
          2: '#f08050',
          dim: 'rgba(232,103,60,0.10)',
        },
        border: {
          DEFAULT: 'rgba(255,255,255,0.07)',
          2: 'rgba(255,255,255,0.13)',
        },
        text: {
          DEFAULT: '#f0ede8',
          2: '#8a8880',
          3: '#4e4c49',
        },
        green: '#3db88a',
        blue: '#4a90d9',
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'fade-up': 'fadeUp 0.65s ease forwards',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(22px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      maxWidth: {
        container: '1080px',
      },
    },
  },
  plugins: [],
}
