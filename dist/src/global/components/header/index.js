'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var css = {
  'base': '_2VRJ3zkHrQQLtBaIwVsRVG',
  'wrapper': '_1zqbq-ngdJ-2688-xsASfh',
  'title': '_10FZmZrAunaiMism3b5dFz',
  'subtitle': '_3F8zMrBZdbsf3kRm--R5Wp'
};


const HeaderComponent = ({ title, subtitle, imageSrc, imageAlt }) => _react2.default.createElement(
  'section',
  {
    className: css.base,
    style: { backgroundImage: `url(${imageSrc})` }
  },
  _react2.default.createElement(
    'div',
    { className: css.wrapper },
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
  )
);

const Header = exports.Header = HeaderComponent;