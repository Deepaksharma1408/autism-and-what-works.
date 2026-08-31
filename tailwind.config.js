/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#FFFDF8',
          card: '#FFFFFF',
          soft: '#F7F9FC',
          navy: '#0F172A',
          charcoal: '#1E293B',
          primary: '#FF7A59',
          'primary-hover': '#E86645',
          lavender: '#F2DEFA',
          'lavender-dark': '#8E44AD',
          sky: '#E3F2FD',
          'sky-dark': '#0284C7',
          mint: '#E0F2FE',
          'mint-dark': '#0D9488',
          yellow: '#FFEAC7',
          'yellow-dark': '#D97706',
          coral: '#FFDED3',
          pink: '#FCE4EC',
          'pink-dark': '#DB2777',
          teal: '#E0F7FA',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Nunito', 'Poppins', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(15, 23, 42, 0.05)',
        'soft-md': '0 8px 24px -4px rgba(15, 23, 42, 0.08)',
        'soft-lg': '0 16px 32px -6px rgba(15, 23, 42, 0.12)',
        'card-hover': '0 20px 40px -12px rgba(255, 122, 89, 0.15)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
