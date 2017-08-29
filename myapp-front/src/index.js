import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store/store';
import {Routers} from './router/index';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <App>
            {Routers}
        </App>
    </Provider>
,document.getElementById('root'));