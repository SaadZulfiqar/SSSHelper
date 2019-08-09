import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import allReducers from './reducers/index';
import { ConnectedRouter } from 'connected-react-router';
import history from './utils/history';
import Routes from './routes';

const middlewares = [thunk];
const store = createStore(allReducers, applyMiddleware(...middlewares));
store.subscribe(() => { console.log('store changes', store.getState()); });

const MOUNT_NODE = document.getElementById('app');
const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>,
    MOUNT_NODE
  );
};
render();
