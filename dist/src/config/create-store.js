'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConfiguredStore = getConfiguredStore;

var _redux = require('redux');

var _reduxLogger = require('redux-logger');

var _rootReducer = require('./root-reducer');

function getConfiguredStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;

  const store = (0, _redux.createStore)(_rootReducer.rootReducer, composeEnhancers((0, _redux.applyMiddleware)((0, _reduxLogger.createLogger)({ collapsed: true, duration: true }))));

  return store;
}