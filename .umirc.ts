import { defineConfig } from 'umi';
import routes from './src/router/index.js';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dynamicImport: {},//开启按需加载
  publicPath: '/',//为了正确引入视频地址
  routes:routes,
  fastRefresh: {},
  ssr: {
    devServerRender: false,
  },
  extraBabelPlugins: [ //styled-components 编译失败
    "babel-plugin-styled-components" //添加该babel插件
  ],
  dva: {},
  hash:true,//设置了之后打包生成的文件都会增加hash字段避免文件名没变有缓存
  // "proxy": {
  //   "/api": { //设置了需要代理的请求头，比如这里定义了 /api ，当你访问如 /api/abc 这样子的请求，就会触发代理
  //     "target": "https://pvp.qq.com",  //设置代理的目标，即真实的服务器地址
  //     "changeOrigin": true, // 设置是否跨域请求资源
  //     "pathRewrite": { "^/api" : "" },  //表示是否重写请求地址，比如这里的配置，就是把 /api 替换成空字符
  //   },
  // },
});
