const controllers = {
  async getUserController(ctx) {
    await ctx.render('index', {
      title: '用户信息',
    });
  },
};

module.exports = controllers;
