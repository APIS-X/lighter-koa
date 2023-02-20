const KoaRouter = require('koa-router');
const router = new KoaRouter();

const home = require('./home');
const user = require('./user');

/**
 * @description 路由数据列表
 * @author APIS
 * 路由数据模型：
 * {
    name: '', // 路由中文名称
    url: '',  // 路由访问链接
    method:'',  // 请求方法，默认为get
    middleware: [] // 中间件数组
  }
 */
const routeList = [...home, ...user];

// 路由动态拼装
for (let i = 0, len = routeList.length; i < len; i++) {
  const { url, method = 'get', middleware = [] } = routeList[i];

  router[method.toLowerCase()](url, ...middleware);
}

module.exports = router;
