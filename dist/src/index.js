'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _createBrowserHistory = require('history/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _createStore = require('./config/create-store');

var _router = require('./features/router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const history = (0, _createBrowserHistory2.default)();
const store = (0, _createStore.getConfiguredStore)(history);

const Root = () => _react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(_router.Router, null)
  )
);

_reactDom2.default.render(_react2.default.createElement(Root, null), document.getElementById('root'));