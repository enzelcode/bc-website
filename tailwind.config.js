/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdf9ed',
          100: '#faf0c8',
          200: '#f5e08e',
          300: '#efc94f',
          400: '#e9b624',
          500: '#d4a017',
          600: '#b07d10',
          700: '#8c5b11',
          800: '#734816',
          900: '#623c18',
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
        'gold-gradient': 'linear-gradient(135deg, #f5e08e 0%, #d4a017 45%, #8c5b11 100%)',
        'gold-shine': 'linear-gradient(110deg, #b07d10 0%, #f5e08e 45%, #efc94f 55%, #b07d10 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 40px rgba(212, 160, 23, 0.25)',
        'gold-soft': '0 10px 40px -10px rgba(212, 160, 23, 0.4)',
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
