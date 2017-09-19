'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _app = require('./app.actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var css = {
  'text': '_202KjRSdw67KOSv7WFoT-1'
};


const AppComponent = () => _react2.default.createElement(
  'div',
  null,
  'TEST OUT YOUR LANDING PAGE YEAAA',
  _react2.default.createElement(
    'div',
    { className: css.text },
    'HELLO WORLD!'
  ),
  _react2.default.createElement(
    'button',
    { onClick: _app.sendEmail },
    'TEST EMAIL'
  )
);

const App = exports.App = AppComponent;