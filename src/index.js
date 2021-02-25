import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import reportWebVitals from './reportWebVitals';

import './index.css';

import App from './App';
import {cartReducer} from './reducers/cartReducer';
import {orderReducer} from './reducers/orderReducer';
import {productsReducer} from './reducers/productsReducer';


const reducer = combineReducers({
  'cart': cartReducer,
  'order': orderReducer,
  'productsItems': productsReducer
})

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
