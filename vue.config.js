// noinspection JSUnusedGlobalSymbols
const isProduction = process.env.NODE_ENV === "production";
//不参与打包的第三方类库
const modules = [
  {
    name: "vue",
    var: "Vue",
    paths: ["dist/vue.global.js"],
  },
  {
    name: "vue-router",
    var: "VueRouter",
    paths: ["dist/vue-router.global.prod.js"],
  },
  {
    name: "vuex",
    var: "Vuex",
    paths: ["dist/vuex.global.prod.js"],
  },
  {
    name: "element-plus",
    var: "ElementPlus",
    paths: ["dist/index.css", "dist/index.full.min.js"],
  },
];
const externals = {};
modules.forEach((module) => {
  module.version = require(`${module.name}/package.json`).version;
  module.dir = `${module.name}@${module.version}`;
  module.lastPaths = module.paths.map(
    (path) => `library/${module.dir}/${path}`
  );
  externals[module.name] = module.var;
});

module.exports = {
  chainWebpack: (config) => {
    //启动后自动打开浏览器
    config.devServer.open(true);
    //排除第三方类库
    config.externals(externals);
    //复制第三方类库dist文件
    config
      .plugin("copy-library")
      .use(require("copy-webpack-plugin"), [
        modules.flatMap((module) => {
          return module.paths.map((path, index) => {
            return {
              from: `node_modules/${module.name}/${path}`,
              to: "",
              transformPath() {
                return module.lastPaths[index];
              },
            };
          });
        }),
      ])
      .after("copy");

    config.optimization.minimizer("terser").tap((args) => {
      let option = args[0];
      //删除console.*
      option.terserOptions.compress.drop_console = isProduction;
      //禁止生成.map文件
      option.sourceMap = !isProduction;
      return args;
    });
  },
};
