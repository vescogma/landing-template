'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Router = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _app = require('../app');

var _about = require('../about');

var _notFound = require('../not-found');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RedirectWithStatus = ({ from, to, status }) => _react2.default.createElement(_reactRouterDom.Route, { render: ({ staticContext }) => {
    if (staticContext) {
      staticContext.status = status;
    }
    return _react2.default.createElement(_reactRouterDom.Redirect, { from: from, to: to });
  } });

const Router = exports.Router = () => _react2.default.createElement(
  _reactRouterDom.Switch,
  null,
  _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _app.App }),
  _react2.default.createElement(_reactRouterDom.Route, { path: '/about', component: _about.About }),
  _react2.default.createElement(_reactRouterDom.Route, { path: '/404', component: _notFound.NotFound }),
  _react2.default.createElement(RedirectWithStatus, {
    status: 404,
    from: '*',
    to: '/404'
  })
);