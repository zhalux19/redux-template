import { fetchCount } from './counterAPI';
import {put, takeLeading, call} from 'redux-saga/effects';
import {sagaIncrement, sagaIncrementFulfilled, sagaIncrementRejected} from './counterSlice';
import { AxiosResponse } from 'axios';
import { PayloadAction } from '@reduxjs/toolkit';

function* increment(action: PayloadAction<number>){
    try{
        const response:AxiosResponse = yield call(fetchCount, action.payload);
        yield put(sagaIncrementFulfilled(response.data))
    }
    catch(e){
        yield put(sagaIncrementRejected);
    }
}

export function* incrementWatchSaga(){
   yield takeLeading(sagaIncrement.type, increment); 
}