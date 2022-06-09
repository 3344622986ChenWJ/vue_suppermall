module.exports = {
  transpileDependencies: true,
  //配置别名
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': 'src/common',//@等价于src(vueCli3适用)
        'components': '@/components',
        'network': 'src/network',
        'views': '@/views',
      }
    }
  }
}
