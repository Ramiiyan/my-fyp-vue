module.exports = {
  devServer: {
    proxy: 'http://127.0.0.1:5000/rovoSpec',
  },
  // devServer: { 
  //   proxy: { 
  //     '/backend': { 
  //       target: 'http://127.0.0.1:5000/backend', 
  //       changeOrigin: true, 
  //       pathRewrite: { 
  //         '^/backend': '', 
  //       } 
  //     } 
  //   } 
  // },
  // externals: {
  //   io:'socket.io',
  // },
  transpileDependencies: [
    'vuetify'
  ],
  
  

}
