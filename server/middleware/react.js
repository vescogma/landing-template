const path = require('path');
const fs = require('fs');
const reactDOMServer = require('react-dom/server');
const AppComponent = require('../../src/features/app');

const reactMiddleware = async ctx => {
  const indexPath = path.join(__dirname, '..', '..', 'dist', 'index.html');
  const htmlString = fs.readFileSync(indexPath);
  const root = reactDOMServer.renderToString(AppComponent.App());
  const body = htmlString.toString().replace('<div id="root">', `<div id="root">${root}`);
  ctx.body = body;
  ctx.type = 'html';
};

module.exports = reactMiddleware;
