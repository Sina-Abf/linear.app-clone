import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      background: '#000212',
      'white-a08': 'rgba(255,255,255,0.08)',
      white: '#fff',
      'primary-button': '#5e6ad2'
    },
    fontSize: {
      xs: '1.3rem',
      sm: '1.4rem',
      medium: '1.6rem',
      lg: ['2.2rem', '1.3'],
      '5xl': ['8rem', '1']
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
      12: '4.8rem'
    }
  },
  plugins: []
};
export default config;
