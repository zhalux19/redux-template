import { all } from 'redux-saga/effects';
import {incrementWatchSaga} from '../features/counter/countSaga';

export default function* rootSaga(){
    yield all([incrementWatchSaga()])
}