'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grid = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var css = {
  'wrapper': 'BSgCAbrF2ufmXNg73DpT8'
};


const GridComponent = ({ children }) => _react2.default.createElement(
  'section',
  { className: css.wrapper },
  children
);

const Grid = exports.Grid = GridComponent;