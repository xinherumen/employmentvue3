const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        // 换为要跨域的网址
        target: 'http://iwenwiki.com/',
        changeOrigin: true
      }
    }
  }
})
// // vue.config.js
// module.exports = {
//   chainWebpack: (config) => {
//     config.plugin('define').tap((args) => {
//       args[0]['__VUE_PROD_HYDRATION_MISMATCH_DETAILS__'] = JSON.stringify(true);
//       return args;
//     });
//   },
// };
