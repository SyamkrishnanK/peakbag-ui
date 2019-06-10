import { all, takeEvery } from "redux-saga/effects";
import { sagaFn as defaultSaga } from "./apisaga";

import { actionTypes } from "./../action";

function createSaga(sagaFn) {
  return function*(type) {
    yield takeEvery(type, sagaFn);
  };
}

export default function* rootSaga() {
  yield all([...Object.values(actionTypes).map(createSaga(defaultSaga))]);
}
