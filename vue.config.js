module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://api9.wochu.cn',   //代理接口
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''    //代理的路径
        }
      }
    }
  }
}