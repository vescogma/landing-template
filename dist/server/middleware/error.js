"use strict";

const errorMiddleware = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = "woops, something went wrong on our end";
    ctx.app.emit('error', err, ctx);
  }
};

module.exports = errorMiddleware;