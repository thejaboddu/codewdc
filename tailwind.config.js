/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './app/***/**/*.{ts,tsx}',
    './components/***/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
        'spin-slow': 'spin 20000ms linear infinite',
        'bounce-slow': 'bounce 6s infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
        container: {
            screens: {
              sm: '100%',
              md: '100%',
              lg: '1024px',
              xl: '1280px',
              '2xl': '1536px',
              '3xl': '1630px',
              '4xl': '1720px',
            },
        },
      colors: {
        'theme-black':'#292929',
        'theme-blue': '#004393',
        'theme-red':'#E53314',
        'theme-grey':'#2D2D2D',
        'theme-lightgrey':'#cfcfcf',
        'theme-red': '#E53314',
        'theme-red-drak': '#aa3420',
        'theme-drakewhite': '#F8F8F8',
        'theme-Fantasy':'#F4F3EE',
        'theme-FantasyLight':'#F3F2EA',
        'theme-light-grey': '#efefef',
        'theme-violet' : '#1f3d8f'
      },
      fontSize: {
        '7xl': ['70px', {
            lineHeight: '1.2',
          }],
        '5xl': ['40px', {
          lineHeight: '1.2',
        }],
        '8xl': ['88px', {
          lineHeight: '1.2',
        }]
      },
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif'],
        'Nunito': ['Nunito Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'line-pattern': "url('/assets/images/line.svg')",
        'light-scratch': "url('/assets/images/business_bg.svg')",
        'blue-line': "url('/assets/images/bg-line.svg')",
        'box-hover-gredient': 'linear-gradient(180deg, #FFFFFF00 0%, #EFEFEF80 61%, #2D2D2DC2 100%)'
      },
      gridTemplateColumns: {
        'auto-fill-5': 'repeat(auto-fill, 20px)',
      },
      minHeight: {
        '11': '2.75rem',
        '24': '6rem',
      },
      minWidth: {
        '11': '2.75rem',
        '24': '6rem',
      },
      maxWidth: {
        '652' : '40.75rem'
      },
      inset: {
        '1/2.5': '12%',
        '1/5.5': '15%',
        '1/6': '16%',
        '1/7': '17%',
        '2/5': '40%',
      },
      padding:{
        '68': '68px',
      },
      rotate: {
        '13': '13deg',
      },
      height: {
        '550': '34.375rem'
      },
      width: {
        '450': '28.125rem'
      },
      aspectRatio: {
        'video-ratio': '2.26/1',
      },
      letterSpacing: {
        'small-tighter-letter-spacing':'-0.045rem',
        'big-tighter-letter-spacing':'-0.131rem',
        'bigger-tighter-letter-spacing':'-0.165rem'
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}