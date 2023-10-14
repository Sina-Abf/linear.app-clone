import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      background: '#000212',
      white: '#fff',
      'off-white': '#f7f8f8',
      'transparent-white': 'rgba(255,255,255,0.08)',
      'primary-button': '#5e6ad2',
      grey: '#b4bcd099',
      'grey-dark': 'hsla(0,0%,100%,.07)',
      'primary-text': '#b4bcd0'
    },
    fontSize: {
      xs: '1.3rem',
      sm: '1.4rem',
      medium: '1.6rem',
      lg: ['1.8rem', '1.3'],
      xl: ['2.2rem', '1.3'],
      '2xl': '2.4rem',
      '3xl': '2.6rem',
      '4xl': '3.2rem',
      '5xl': '4rem',
      '6xl': ['4.4rem', '1'],
      '7xl': ['4.8rem', '1'],
      '8xl': ['8rem', '1']
    },
    spacing: {
      0: '0',
      1: '0.4rem',
      2: '0.8rem',
      3: '1.2rem',
      4: '1.6rem',
      5: '2rem',
      6: '2.4rem',
      7: '2.8rem',
      8: '3.2rem',
      9: '3.6rem',
      10: '4rem',
      11: '4.4rem',
      12: '4.8rem',
      'navigation-height': 'var(--navigation-height)'
    },
    boxShadow: {
      'primary-high': '0px 7px 32px rgba(0,0,0,.35)'
    },
    backgroundImage: {
      'page-gradient':
        'radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120,119,198,0.3), transparent)'
    }
  },
  plugins: []
};
export default config;
