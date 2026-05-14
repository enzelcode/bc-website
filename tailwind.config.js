/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#ed5a08',
          100: '#ed5a08',
          200: '#ed5a08',
          300: '#ed5a08',
          400: '#ed5a08',
          500: '#ed5a08',
          600: '#ed5a08',
          700: '#ed5a08',
          800: '#ed5a08',
          900: '#ed5a08',
        },
        ink: {
          950: '#050505',
          900: '#0a0a0a',
          800: '#111111',
          700: '#1a1a1a',
        }
      },
      fontFamily: {
        display: ['Fraunces', 'Cormorant Garamond', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #ed5a08 0%, #ed5a08 100%)',
        'gold-shine': 'linear-gradient(110deg, #ed5a08 0%, #ed5a08 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 40px rgba(237, 90, 8, 0.3)',
        'gold-soft': '0 10px 40px -10px rgba(237, 90, 8, 0.45)',
      },
      animation: {
        'shine': 'shine 6s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
