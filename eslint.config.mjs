import baseConfig from '@nedonebo21/eslint-config'

const configWithoutDuplicateTsPlugin = baseConfig.map(configItem => {
  const plugins = configItem.plugins

  if (!plugins || !plugins['@typescript-eslint']) {
    return configItem
  }

  const hasTypescriptRules = Object.keys(configItem.rules ?? {}).some(ruleName =>
    ruleName.startsWith('@typescript-eslint/')
  )

  if (hasTypescriptRules) {
    return configItem
  }

  const restPlugins = { ...plugins }
  delete restPlugins['@typescript-eslint']

  if (Object.keys(restPlugins).length === 0) {
    const restConfigItem = { ...configItem }
    delete restConfigItem.plugins

    return restConfigItem
  }

  return {
    ...configItem,
    plugins: restPlugins,
  }
})

const config = [
  ...configWithoutDuplicateTsPlugin,
  {
    rules: {
      '@next/next/no-img-element': 'off',
    },
  },
]

export default config
