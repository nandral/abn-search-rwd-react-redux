import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
// import reduxPromise from "redux-promise";
import createSagaMiddleware from "redux-saga";
import reducers from "reducers";
import { watcherSaga } from "actions";

const sagaMiddleware = createSagaMiddleware();

export default props => {
  const { children, initialState = {} } = props;
  const store = createStore(
    reducers,
    initialState,
    compose(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(watcherSaga);

  return <Provider store={store}>{children}</Provider>;
};
