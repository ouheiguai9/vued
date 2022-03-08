const nodeModulesPath = 'node_modules'
const isProduction = process.env.NODE_ENV === 'production'
//不参与打包的第三方类库
const modules = [
  {
    name: 'vue',
    var: 'Vue',
    paths: [`dist/vue.global${isProduction ? '.prod' : ''}.js`],
  },
  {
    name: 'vue-router',
    var: 'VueRouter',
    paths: [`dist/vue-router.global${isProduction ? '.prod' : ''}.js`],
  },
  {
    name: 'vuex',
    var: 'Vuex',
    paths: [`dist/vuex.global${isProduction ? '.prod' : ''}.js`],
  },
  {
    name: 'element-plus',
    var: 'ElementPlus',
    paths: ['dist/index.css', 'dist/index.full.min.js'],
  },
]
const externals = {}
modules.forEach((module) => {
  module.version = require(`./${nodeModulesPath}/${module.name}/package.json`).version
  module.dir = `${module.name}@${module.version}`
  module.finalPaths = module.paths.map((path) => `library/${module.dir}/${path}`)
  externals[module.name] = module.var
})

// noinspection JSUnusedGlobalSymbols
module.exports = {
  chainWebpack: (config) => {
    //启动后自动打开浏览器
    config.devServer.open(true)
    //排除第三方类库
    config.externals(externals)
    //复制第三方类库dist文件,将第三方类库插入到html中
    config
      .plugin('html-webpack-tags-plugin')
      .use(require('html-webpack-tags-plugin'), [
        {
          tags: modules.flatMap((module) => {
            return module.finalPaths
          }),
          append: false,
        },
      ])
      .after('html')
      .end()
      .plugin('copy-library')
      .use(require('copy-webpack-plugin'), [
        modules.flatMap((module) => {
          return module.paths.map((path, index) => {
            // noinspection JSUnusedGlobalSymbols
            return {
              from: `${nodeModulesPath}/${module.name}/${path}`,
              to: '',
              transformPath() {
                return module.finalPaths[index]
              },
            }
          })
        }),
      ])
      .after('copy')

    config.optimization.minimizer('terser').tap((args) => {
      let option = args[0]
      //删除console.*
      option.terserOptions.compress.drop_console = isProduction
      //禁止生成.map文件
      option.sourceMap = !isProduction
      return args
    })
  },
}
