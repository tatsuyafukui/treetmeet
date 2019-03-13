import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import * as serviceWorker from './serviceWorker';
import authReducer from './modules/auth/authReducer';
import rootSaga from './modules/sagas';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
    auth: authReducer
});
const store = createStore(
    rootReducer,
    applyMiddleware(
        sagaMiddleware
    )
);

sagaMiddleware.run(rootSaga);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);



ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
