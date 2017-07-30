import { takeEvery, call } from 'redux-saga/effects';

import { GET_IPS } from './app.constants';

import { getIPS } from '../../global/socketio/index';

export function* getAddresses() {
  yield call(getIPS);
}

export const appSagas = [
  takeEvery(GET_IPS, getAddresses),
];
