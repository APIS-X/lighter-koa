const routes = [
  {
    name: '',
    url: '/home',
    middleware: [
      async (ctx) => {
        await ctx.render('index', {
          title: '首页',
        });
      },
    ],
  },
  {
    name: '',
    url: '/post',
    method: 'POST',
    middleware: [
      async (ctx) => {
        ctx.body = {
          query,
          body: ctx.request.body,
          request: ctx.request,
        };
      },
    ],
  },
];

module.exports = routes;
