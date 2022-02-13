module.exports = {
    devServer: {
      proxy: {
        '/zhihu': {
          target: 'http://news-at.zhihu.com/api/3',
          changeOrigin: true,
          pathRewrite:{
            '^/zhihu': ''
          }
        },
    }
  }
}