/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Unbounded', 'sans-serif'],
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: { void: '#07070a', ink: '#ecece6', acid: '#d4ff3a', ultra: '#8b5cff' },
    },
  },
  plugins: [],
};
