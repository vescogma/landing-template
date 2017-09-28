'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Section = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var css = {
  'wrapper': '_1LQTI2G9nJOYge1kRRuESo',
  'image': '_185nQ-jbk_awNiQi6NBUCP',
  'content': 'tkDwbsyklFXqO8uR6hAO5',
  'title': '_1CkjF2deUxPToiJJE7ilPt',
  'description': '_1Ag59yyXQNtONz0peQCJb'
};


const SectionComponent = ({ title, description, imageSrc, imageAlt }) => _react2.default.createElement(
  'section',
  { className: css.wrapper },
  _react2.default.createElement(
    'div',
    { className: css.image },
    _react2.default.createElement('img', { src: imageSrc, alt: imageAlt })
  ),
  _react2.default.createElement(
    'div',
    { className: css.content },
    _react2.default.createElement(
      'div',
      { className: css.title },
      title
    ),
    _react2.default.createElement(
      'div',
      { className: css.description },
      description
    )
  )
);

const Section = exports.Section = SectionComponent;