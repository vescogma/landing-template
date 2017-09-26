'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _app = require('./app.actions');

var _components = require('../../global/components');

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
  _react2.default.createElement(_components.Header, {
    title: 'my big title',
    subtitle: 'my small tiny title',
    imageSrc: '/assets/test.jpg',
    imageAlt: 'big image'
  }),
  _react2.default.createElement(
    _components.Grid,
    null,
    _react2.default.createElement(_components.Section, {
      title: 'test grid 1',
      description: 'hello this is a test image and i\'d like to see it in all its glory ok? ok love meeee plx.',
      imageSrc: '/assets/test.jpg',
      imageAlt: 'test image 1'
    }),
    _react2.default.createElement(_components.Section, {
      title: 'test grid 2',
      description: 'hello this is a test image and i\'d like to see it in all its glory ok? ok love meeee plx.',
      imageSrc: '/assets/test.jpg',
      imageAlt: 'test image 2'
    }),
    _react2.default.createElement(_components.Section, {
      title: 'test grid 3',
      description: 'hello this is a test image and i\'d like to see it in all its glory ok? ok love meeee plx.',
      imageSrc: '/assets/test.jpg',
      imageAlt: 'test image 3'
    })
  )
);

const App = exports.App = AppComponent;