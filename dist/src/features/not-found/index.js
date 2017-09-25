'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotFound = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var css = {
  'text': '_1fCJZjyQOVjUWdkD_CfEDi'
};


const NotFoundComponent = ({ status }) => _react2.default.createElement(
  'div',
  null,
  status,
  ' page not found bitch'
);

const NotFound = exports.NotFound = NotFoundComponent;