import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import { rootReducer } from './root-reducer';

export function getConfiguredStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(
      createLogger({ collapsed: true, duration: true }),
    ),
  ));

  return store;
}
