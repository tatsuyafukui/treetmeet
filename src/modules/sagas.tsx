import { put, call, take, fork } from "redux-saga/effects";
import actionTypes from './actionTypes';

// 追加
function* handleRequestSearchByLocation() {
    while (true) {
        const action = yield take(actionTypes.AUTH_SUCCESS);
        // const { payload, error } = yield call(API.searchByLocation, action.payload.location);
        // if (payload && !error) {
        //     yield put(successSearchByLocation(payload));
        // } else {
        //     yield put(failureSearchByLocation(error));
        // }
    }
}

// 変更なし！
function* handleAuthSignUp() {
    while (true) {
        const action = yield take(actionTypes.AUTH_START);
        // const { payload, error } = yield call(API.user, action.payload);




        // if (payload && !error) {
        //     yield put(successUser(payload));
        // } else {
        //     yield put(failureUser(error));
        // }
    }
}

export default function* rootSaga() {
    yield fork(handleAuthSignUp);
    yield fork(handleRequestSearchByLocation); // 追加
}