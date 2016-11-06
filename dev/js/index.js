import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';

import Reducers from './reducers/index';

const store = createStore(Reducers, applyMiddleware(ReduxPromise));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.querySelector('#container'))
