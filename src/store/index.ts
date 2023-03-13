import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './modules/rootSaga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './modules/rootReducer';
import { ICartState } from './modules/cart/types';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middlewares)
  )
);

sagaMiddleware.run(rootSaga);

export default store;