/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#13588f',
        'primary-light': '#336a9e',
        'primary-dark': '#0d4070',
        secondary: '#7fa6c3',
        'secondary-light': '#a5c3dc',
        'secondary-dark': '#5a89ad',
        accent: '#f44336',
        'accent-light': '#f77066',
        'accent-dark': '#d32f2f',
        'apple-blue': '#0071e3',
        'apple-gray': '#f5f5f7',
        'apple-light-gray': '#fafafa',
        'apple-dark': '#1d1d1f',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      boxShadow: {
        'apple': '0 4px 24px rgba(0, 0, 0, 0.08)',
        'apple-hover': '0 8px 32px rgba(0, 0, 0, 0.12)',
      },
      borderRadius: {
        'xs': '0.25rem',
        'sm': '0.375rem',
        'md': '0.5rem',
        'lg': '1rem',
        'xl': '1.5rem',
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '1.5rem',
        'lg': '2rem',
        'xl': '3rem',
        '2xl': '4rem',
      }
    },
  },
  plugins: [],
  safelist: [
    'bg-primary', 'text-primary', 'border-primary', 'from-primary', 'to-primary',
    'bg-primary/10', 'bg-primary/20', 'bg-primary/30',
    'bg-secondary', 'text-secondary', 'border-secondary', 'from-secondary', 'to-secondary',
    'bg-secondary/10', 'bg-secondary/20', 'bg-secondary/30',
    'bg-accent', 'text-accent', 'border-accent', 'from-accent', 'to-accent',
    'bg-accent/10', 'bg-accent/20', 'bg-accent/30'
  ]
} 