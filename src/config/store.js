import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";

import rootReducer from "./reducer";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [];

if (process.env.NODE_ENV === `development`) {
  const loggerMiddleware = createLogger({
    collapsed: (getState, action, logEntry) => !logEntry.error
  });
  middlewares.push(loggerMiddleware);
}

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, ...middlewares)
);

sagaMiddleware.run(rootSaga);

export default store;

export const dispatch = action => store.dispatch(action);
