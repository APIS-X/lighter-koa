const {
  getInfoController,
  getRequestController,
} = require('../controllers/home');

const routes = [
  {
    name: '',
    url: '/home',
    middleware: [getInfoController],
  },
  {
    name: '',
    url: '/post',
    method: 'POST',
    middleware: [getRequestController],
  },
];

module.exports = routes;
