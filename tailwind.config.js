/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0A0A0B',
          800: '#141416',
          700: '#1C1C1F',
          600: '#252528',
        },
        orange: {
          500: '#FF6B00',
          400: '#FF8C33',
          600: '#E55F00',
          glow: 'rgba(255, 107, 0, 0.3)',
        },
        gray: {
          400: '#A1A1AA',
          500: '#71717A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 107, 0, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(255, 107, 0, 0.6)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
