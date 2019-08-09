import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import allReducers from './reducers/index';
import { ConnectedRouter } from 'connected-react-router';
import history from './utils/history';
import AdminContainer from './containers/Admin';

// Import CSS reset and Global Styles
import './styles/theme.scss';

const middlewares = [thunk];
const store = createStore(allReducers, applyMiddleware(...middlewares));
store.subscribe(() => { console.log('store changes', store.getState()); });

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AdminContainer />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
  );
};
render();
