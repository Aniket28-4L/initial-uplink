/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:      '#0e0d0c',
        surface: '#1a1714',
        maroon:  '#8b3a3a',
        maroon2: '#a84444',
        maroon3: '#c25252',
        text:    '#f0ece6',
        text2:   '#9a9086',
        text3:   '#5a5248',
      },
      fontFamily: {
        serif: ['DM Serif Display', 'serif'],
        mono:  ['DM Mono', 'monospace'],
        sans:  ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
