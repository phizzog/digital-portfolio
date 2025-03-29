/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors (Wrestling mat colors)
        'primary-red': '#D32F2F',
        'primary-blue': '#1976D2',
        
        // Secondary Colors (AI-inspired)
        'secondary-blue': '#4FC3F7',
        'secondary-green': '#7CB342',
        
        // Neutral Colors
        'neutral-dark': '#212121',
        'neutral-medium': '#757575',
        'neutral-light': '#F5F5F5',
      },
      fontFamily: {
        sans: ['var(--font-open-sans)'],
        heading: ['var(--font-montserrat)'],
        quote: ['var(--font-merriweather)'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
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
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}; 