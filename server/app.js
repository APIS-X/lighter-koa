const path = require('path');
const Koa = require('koa');
const koaStatic = require('koa-static');
const koaBodyParser = require('koa-bodyparser');
const views = require('koa-views');
const ejs = require('ejs');

const router = require('./routers');

// 环境变量
const config = require('config');
const configEnv = config.get('environment');
global.port = process.env.port || configEnv.port;
global.env = process.env.ENV || configEnv.env;
global.logger = console;

// 中间件 - 模版引擎
ejs.delimiter = '%%';

const app = new Koa();

app
  .use(views(path.resolve(__dirname, './views'), { map: { html: 'ejs' } }))
  .use(koaBodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(port, () => {
  if (process.env.wait_ready) {
    process.send('ready');
  }
  logger.info(`Node Server is running at port ${port}.`);
});

process.on('uncaughtException', (e) => {
  logger.error(e);
  process.exit(1);
});
