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
          DEFAULT: '#070b12',
          2: '#0d1220',
          3: '#111827',
        },
        card: '#0d1525',
        accent: {
          DEFAULT: '#3b82f6',
          2: '#60a5fa',
          dim: 'rgba(59,130,246,0.10)',
        },
        border: {
          DEFAULT: 'rgba(59,130,246,0.10)',
          2: 'rgba(59,130,246,0.22)',
        },
        text: {
          DEFAULT: '#e8f0fe',
          2: '#8fa8c8',
          3: '#3d5275',
        },
        green: '#22d3a4',
        blue: '#60a5fa',
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
