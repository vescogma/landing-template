const path = require('path');
const Koa = require('koa');
const Router = require('koa-router');
const staticCache = require('koa-static-cache');

const reactMiddleware = require('./middleware/react');
const email = require('./services/email');

const app = new Koa();
const router = new Router();

router.get('/', reactMiddleware);
router.get('/email', async (ctx) => {
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
app.use(staticCache(path.join(__dirname, '..', 'dist')));

app.listen(8080, () => {
  console.log('listening on port 8080');
});
