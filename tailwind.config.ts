import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#F8FAFC',
          100: '#E2E8F0',
          200: '#CBD5E1',
          300: '#94A3B8',
          400: '#64748B',
          500: '#475569',
          600: '#2C3E41',
          700: '#1F2D2F',
          800: '#141D1E',
          850: '#101718',
          900: '#0F1516',
          950: '#080C0D',
        },
        brand: {
          teal: '#14B8A6',
          tealLight: '#2DD4BF',
          tealDark: '#0D9488',
          tealDeep: '#115E59',
          emerald: '#10B981',
          emeraldLight: '#34D399',
          emeraldDark: '#059669',
        },
        bros: {
          dark: '#080C0D',
          slate: '#0F1516',
          card: '#141D1E',
          cardHover: '#1A2627',
          surface: '#1D2A2B',
          border: 'rgba(45, 212, 191, 0.12)',
          borderHover: 'rgba(45, 212, 191, 0.28)',
          teal: {
            DEFAULT: '#14B8A6',
            light: '#2DD4BF',
            dark: '#0D9488',
            deep: '#115E59',
          },
          emerald: {
            DEFAULT: '#10B981',
            light: '#34D399',
            dark: '#059669',
          },
          silver: '#94A3B8',
          textMuted: '#64748B',
          textSubtle: '#475569',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['var(--font-display)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'sm': '6px',
        'md': '10px',
        'lg': '14px',
        'xl': '20px',
        '2xl': '28px',
        '3xl': '36px',
      },
      boxShadow: {
        'glow-teal': '0 0 35px -5px rgba(20, 184, 166, 0.2)',
        'glow-teal-lg': '0 0 60px -10px rgba(45, 212, 191, 0.25)',
        'card-elevated': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
        'inner-light': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.08)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.3s ease-in-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
