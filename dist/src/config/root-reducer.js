'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rootReducer = undefined;

var _redux = require('redux');

var _app = require('../features/app/app.reducer');

const rootReducer = exports.rootReducer = (0, _redux.combineReducers)({
  app: _app.appReducer
});