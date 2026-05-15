import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1C3829',
          dark: '#142A1F',
          mid: '#2D5A3D',
          light: '#4A7C59',
          subtle: '#EBF2ED',
        },
        blush: {
          DEFAULT: '#C9A0A0',
          light: '#F2E8E8',
        },
        sage: {
          DEFAULT: '#F4F7F4',
          dark: '#E6EDE7',
        },
        ink: '#111111',
      },
      fontFamily: {
        manrope: ['var(--font-manrope)', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}

export default config
