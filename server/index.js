const path = require('path');
const Koa = require('koa');
const Router = require('koa-router');
const staticCache = require('koa-static-cache');

const reactMiddleware = require('./middleware/react');
const email = require('./services/email');
const router = require('./routes');

const app = new Koa();

const port = process.env.PORT || 3000;

const staticPath = path.resolve(__dirname, '..');

app.use(staticCache(staticPath));
// staticCache(path.resolve(__dirname, '..', 'assets'));

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => {
  console.log('listening on port ' + port);
});
