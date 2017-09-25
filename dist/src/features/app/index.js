'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _app = require('./app.actions');

var _section = require('../../global/components/section');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var css = {
  'text': '_202KjRSdw67KOSv7WFoT-1'
};


const AppComponent = () => _react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(
    'div',
    { className: css.text },
    'Test all the landing pages'
  ),
  _react2.default.createElement(
    'button',
    { onClick: _app.sendEmail },
    'TEST EMAIL'
  ),
  _react2.default.createElement(_section.Section, {
    title: 'my test section',
    description: 'hello this is a test image and i\'d like to see it in all its glory ok? ok love meeee plx.',
    imageSrc: '/assets/test.jpg',
    imageAlt: 'test image'
  })
);

const App = exports.App = AppComponent;