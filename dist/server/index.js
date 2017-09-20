'use strict';

const path = require('path');
const Koa = require('koa');
const Router = require('koa-router');
const staticCache = require('koa-static-cache');

const reactMiddleware = require('./middleware/react');
const email = require('./services/email');

const app = new Koa();
const router = new Router();

const prod = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 3000;

router.get('/', reactMiddleware);
router.get('/email', async ctx => {
  try {
    await email.testEmail();
    ctx.status = 200;
    ctx.message = 'email sent';
  } catch (e) {
    ctx.throw(500, e);
  }
});

app.use(router.routes());
app.use(router.allowedMethods());

const staticPath = path.join(__dirname, '..', ...(prod ? [] : ['dist']));

app.use(staticCache(staticPath));

app.listen(port, () => {
  console.log('listening on port ' + port);
});