/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: 'rgb(var(--paper) / <alpha-value>)',
        parchment: 'rgb(var(--parchment) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        coal: 'rgb(var(--coal) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        'accent-deep': 'rgb(var(--accent-deep) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
