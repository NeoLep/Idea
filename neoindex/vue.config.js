module.exports = {
  publicPath: './',
  devServer: {
    proxy: {  
      '/api': {
        target: 'https://api.ixiaowai.cn',   //路径指向本地主机地址
        port:80,     //端口号
        //ws: true, 
        changeOrigin: true,
        pathRewrite:{
            '^/api': '/api'   // 这个的实际路径为关键字 /api = /api + /data/api = http://web.h5.com/data/api
        }
      }
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
}

