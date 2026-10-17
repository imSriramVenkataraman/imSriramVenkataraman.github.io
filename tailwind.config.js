/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#0a0e14', 2: '#0e141c' },
        card: '#111a24',
        line: '#1c2a36',
        fg: '#e6edf3',
        soft: '#c8d3dd',
        muted: '#8b98a5',
        teal: '#2dd4bf',
        cyan: '#22b8e6',
        ok: '#22c55e',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      keyframes: { spin: { to: { transform: 'rotate(360deg)' } } },
      animation: { orbit: 'spin 60s linear infinite', counter: 'spin 60s linear infinite reverse' },
    },
  },
  plugins: [],
}
