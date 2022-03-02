const isProduction = process.env.NODE_ENV === "production";
module.exports = {
  chainWebpack: (config) => {
    //启动后自动打开浏览器
    config.devServer.open(true);
    config.externals({
      vue: "Vue",
      "vue-router": "VueRouter",
      vuex: "Vuex",
      "element-plus": "ElementPlus",
    });
    config.optimization.minimizer("terser").tap((args) => {
      let option = args[0];
      //删除console.*
      option.terserOptions.compress.drop_console = isProduction;
      //禁止生成.map文件
      option.sourceMap = !isProduction;
      return args;
    });
    // 三方模块打包优化
    // config.optimization.splitChunks({
    //   chunks: "all",
    //   minSize: 1024 * 60, //单位bytes
    //   cacheGroups: {
    //     vendors: {
    //       name(module) {
    //         // 排除node_modules 然后吧 @ 替换为空 ,考虑到服务器的兼容
    //         const packageName = module.context.match(
    //           /[\\/]node_modules[\\/](.*?)([\\/]|$)/
    //         )[1];
    //         return `${packageName.replace("@", "")}`;
    //       },
    //       test: /[\\/]node_modules[\\/]/,
    //       priority: -10,
    //       chunks: "initial",
    //     },
    //     common: {
    //       name: "chunk-common",
    //       minChunks: 2,
    //       priority: -20,
    //       chunks: "initial",
    //       reuseExistingChunk: true,
    //     },
    //   },
    // });
  },
};
