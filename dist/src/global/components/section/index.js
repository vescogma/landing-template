'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Section = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var css = {};


const SectionComponent = ({ title, description, imageSrc, imageAlt }) => _react2.default.createElement(
  'div',
  { className: 'section' },
  _react2.default.createElement(
    'div',
    { className: 'title' },
    title
  ),
  _react2.default.createElement(
    'div',
    { className: 'image' },
    _react2.default.createElement('img', { src: imageSrc, alt: imageAlt })
  ),
  _react2.default.createElement(
    'div',
    { className: 'description' },
    description
  )
);

const Section = exports.Section = SectionComponent;