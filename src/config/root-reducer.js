import { combineReducers } from 'redux';

import { appReducer } from '../features/app/app.reducer';

export const rootReducer = combineReducers({
  app: appReducer,
});
