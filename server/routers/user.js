const routes = [
  {
    name: '用户信息',
    url: '/user/info',
    middleware: [
      async (ctx) => {
        await ctx.render('index', {
          title: '用户信息',
        });
      },
    ],
  },
];

module.exports = routes;
