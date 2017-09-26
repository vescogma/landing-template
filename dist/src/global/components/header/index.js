'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var css = {};


const HeaderComponent = ({ title, subtitle, imageSrc, imageAlt }) => _react2.default.createElement(
  'section',
  { className: css.wrapper },
  _react2.default.createElement(
    'div',
    { className: css.image },
    _react2.default.createElement('img', { src: imageSrc, alt: imageAlt })
  ),
  _react2.default.createElement(
    'div',
    { className: css.title },
    title
  ),
  _react2.default.createElement(
    'div',
    { className: css.subtitle },
    subtitle
  )
);

const Header = exports.Header = HeaderComponent;