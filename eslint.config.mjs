import baseConfig from '@nedonebo21/eslint-config'

const config = [
  ...baseConfig,
  {
    rules: {
      '@next/next/no-img-element': 'off',
    },
  },
]

export default config
