module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/mfe/welcome/'
    : '/',
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'development') {
      config.plugins.delete('preload')
    }
  }
}
