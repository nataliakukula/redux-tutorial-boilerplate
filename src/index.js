import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';

//create a top level object which stores
//all the state/data kept in the app
// createStore is a redux function that makes the object for us
const store = createStore(allReducers);

ReactDOM.render(
    //Provider is a connects the stored data with our app
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
