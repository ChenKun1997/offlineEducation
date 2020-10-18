module.exports = {
  publicPath:'/pc/static',
  devServer: {
    open: true,
    proxy: {
      '/pc/api': {
        target: 'http://localhost:8000',
        changeOrigin: true
      },
      '/pc/app': {
        target: 'http://localhost:8000',
        changeOrigin: true
      }
    }
  }
}