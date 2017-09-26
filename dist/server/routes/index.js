'use strict';

const fs = require('fs');
const path = require('path');
const Router = require('koa-router');
const reactMiddleware = require('../middleware/react');

const router = new Router();

router.get('/email', async ctx => {
  try {
    await email.testEmail();
    ctx.status = 200;
    ctx.message = 'email sent';
  } catch (e) {
    ctx.throw(500, e);
  }
});

router.get('*', reactMiddleware);

module.exports = router;