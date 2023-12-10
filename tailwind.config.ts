import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '380px',
        'mlg': '950px'
      },
      colors: {
        'lime-green-200': '#6dfc6d',
        'lime-green-100': '#84FF84',
      },
    },
  },
}
export default config
