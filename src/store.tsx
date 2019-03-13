import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import authReducer from './modules/auth/authReducer';
import rootSaga from './modules/sagas';

export default function configureStore(initialState: any) {
    const sagaMiddleware = createSagaMiddleware();

    const rootReducer = combineReducers({
        auth: authReducer
    });

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            sagaMiddleware
        )
    );
    sagaMiddleware.run(rootSaga);
    return store;
};