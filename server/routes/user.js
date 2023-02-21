const { getUserController } = require('../controllers/user');

const routes = [
  {
    name: '用户信息',
    url: '/user/info',
    middleware: [getUserController],
  },
];

module.exports = routes;
