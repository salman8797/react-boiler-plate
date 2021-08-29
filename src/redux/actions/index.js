import { all } from 'redux-saga/effects';
import userSaga from './example.saga';

export default function* rootSaga(){
    yield all([
        userSaga(),
    ])
}