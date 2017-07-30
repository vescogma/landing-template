const path = require('path');
const fs = require('fs');

const Koa = require('koa');
const IO = require('koa-socket');
const staticCache = require('koa-static-cache');

const getIpList = require('./utils/get-ips').getIpList;

// setup

const app = new Koa();
const io = new IO();

io.attach(app);

app.use(staticCache(path.join(__dirname, '..', 'dist')));

app.use(async ctx => {
  const indexPath = path.join(__dirname, '..', 'dist', 'index.html');
  ctx.body = fs.createReadStream(indexPath);
  ctx.type = 'html';
});

// socketio

io.on('connection', ctx => {
  console.log('connected', ctx.socket.id);
  console.log('# of connections', io.connections.size);
  const { ips, last } = getIpList(ctx.socket, io.connections, true);

  io.broadcast('update', { ips, last });
});

io.on('disconnect', ctx => {
  console.log('disconnected', ctx.socket.id);
  console.log('# of connections', io.connections.size);
  const { ips, last } = getIpList(ctx.socket.socket, io.connections);

  io.broadcast('update', { ips, last });
});

io.on('ips', ctx => {
  console.log('async ip request', ctx.socket.id);
  const { ips, last } = getIpList(null, io.connections);

  io.broadcast('update', { ips, last });
});

// listen

app.listen(8080, () => {
  console.log('listening on port 8080');
});
