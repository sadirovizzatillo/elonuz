const { getWebpackConfig } = require('nuxt')

module.exports = async () => {
  const nuxtWebpackConfig = await getWebpackConfig('client', {
    for: 'dev',
    configOverides: {
      tailwindcss: {
        jit: false,
      },
    },
  })
  return {
    components: '../common/components/**/[A-Z]*.vue',
    webpackConfig: nuxtWebpackConfig,
  }
}
