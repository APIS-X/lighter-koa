const controllers = {
  async getInfoController(ctx) {
    await ctx.render('index', {
      title: '首页',
    });
  },
  async getRequestController(ctx) {
    ctx.body = {
      query,
      body: ctx.request.body,
      request: ctx.request,
    };
  },
};

module.exports = controllers;
