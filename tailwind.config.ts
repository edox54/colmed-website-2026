import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        colmedikal: {
          primary: '#0891b2',
          secondary: '#06b6d4',
          accent: '#10b981',
          dark: '#0f172a',
          light: '#f8fafc',
        },
        brand: '#0891b2',
        'brand-vivid': '#06b6d4',
        'brand-light': '#22d3ee',
        'brand-pale': '#cffafe',
        ink: '#0f172a',
        graphite: '#334155',
        mist: '#f1f5f9',
        smoke: '#cbd5e1',
      },
      fontFamily: {
        display: ['Libre Caslon Text', 'Lora', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        caption: ['12px', { lineHeight: '1.5', letterSpacing: '1.2px' }],
        'body-sm': ['14px', { lineHeight: '1.5', letterSpacing: '-0.28px' }],
        subheading: ['20px', { lineHeight: '1.25', letterSpacing: '-0.4px' }],
        'heading-sm': ['24px', { lineHeight: '1.25', letterSpacing: '-0.6px' }],
        heading: ['32px', { lineHeight: '1.2', letterSpacing: '-0.9px' }],
        'heading-lg': ['40px', { lineHeight: '1.2', letterSpacing: '-1.44px' }],
        display: ['80px', { lineHeight: '1.2', letterSpacing: '-1.01px' }],
      },
      borderRadius: {
        input: '8px',
        icon: '12px',
        card: '20px',
        'card-lg': '24px',
        pill: '9999px',
      },
      boxShadow: {
        hairline: 'rgba(0,0,0,0.35) 0px 0px 1px 0px',
        lift: 'rgba(0,0,0,0.15) 0px 1px 1px 0px',
        subtle: 'rgba(0,0,0,0.25) 0px 1px 2px 0px inset',
        card: 'rgba(0,0,0,0.35) 0px 0px 1px 0px, rgba(0,0,0,0.15) 0px 1px 1px 0px',
      },
      spacing: {
        '18': '72px',
        '22': '88px',
        section: '80px',
      },
      maxWidth: {
        page: '1200px',
        'prose-tight': '520px',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in',
        slideUp: 'slideUp 0.5s ease-out',
        slideDown: 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
