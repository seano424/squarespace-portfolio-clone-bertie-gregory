import type {Config} from 'tailwindcss'

const config: Config = {
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
    },
    container: {
      center: true,
      padding: '3rem',
    },
    debugScreens: {
      position: ['bottom', 'right'],
      style: {
        backgroundColor: '#C0FFEE',
        color: 'black',
        padding: '.5rem',
        margin: '.5rem',
      },
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
}
export default config
