import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './store/reducers/auth'; 
import authReducer from './store/reducers/auth';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(rootReducer, composerEnhancers(
    applyMiddleware(thunk)
));

const rootReducer = combnieReducers({
    auth:authReducer
});

const app = (
    <Provider store = {store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
