'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRouterDom = require('react-router-dom');

var _router = require('../../src/features/router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const indexPath = _path2.default.join(__dirname, '..', '..', 'index.html');
const indexHTML = _fs2.default.readFileSync(indexPath).toString();

const reactMiddleware = async ctx => {
  let context = {};

  const content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRouterDom.StaticRouter,
    { location: ctx.url, context: context },
    _react2.default.createElement(_router.Router, null)
  ));

  const bodyWithContent = indexHTML.replace('<div id="root">', `<div id="root">${content}`);

  if (context.url) {
    ctx.status = 302;
    ctx.redirect(context.url);
  }

  if (context.status === 404) {
    ctx.status = 404;
  } else {
    ctx.status = 200;
  }

  ctx.body = bodyWithContent;
  ctx.type = 'html';
};

module.exports = reactMiddleware;