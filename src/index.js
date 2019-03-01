import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
// components
import App from './App';
// store
import * as allReducers from './store/reducer'

const store = createStore(combineReducers(allReducers))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));