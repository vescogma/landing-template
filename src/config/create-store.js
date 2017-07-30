import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';

export function getConfiguredStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(
      createLogger({ collapsed: true, duration: true }),
      sagaMiddleware,
    ),
  ));

  sagaMiddleware.run(rootSaga);

  return store;
}
