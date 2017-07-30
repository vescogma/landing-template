import { all } from 'redux-saga/effects';

import { appSagas } from '../features/app/app.sagas';

export function* rootSaga() {
  yield all([
    ...appSagas,
  ]);
}
