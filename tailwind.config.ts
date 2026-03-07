import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060D17',
          900: '#0D1929',
          800: '#1B2A4A',
          700: '#243860',
          600: '#2E4A7A',
        },
        brand: {
          50:  '#FFF4ED',
          100: '#FFE4CC',
          200: '#FFC999',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA6B0E',
          700: '#C2570D',
        },
        gold: '#F59E0B',
        primary: '#1B2A4A',
        accent: {
          red:  '#DC2626',
          gold: '#F59E0B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
