import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import {loadHeores} from './actions/heroActions';
import {loadTopHeores} from  './actions/dashboardAction';
import {loadMessage} from './actions/messageAction';

const store = configureStore();
store.dispatch(loadHeores());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);

