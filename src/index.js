import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux'

import App from './App';
import store from './app/store'
// import 'antd/dist/antd.css';

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App/> 
        {/* This app in inside the provider which means every componetn inside app has access to the store */}
        </Provider>
    </Router>,
    document.getElementById('root')
);
 