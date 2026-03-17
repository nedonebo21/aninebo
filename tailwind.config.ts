import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  // @ts-ignore
  safelist: ['bg-green-500', 'bg-gray-400', 'text-violet-500', 'bg-violet-500'],
} satisfies Config
