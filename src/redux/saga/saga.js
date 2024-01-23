import {  takeLatest } from 'redux-saga/effects'
import { REQUEST_GET_TIMEZONE } from '../actions/actionTypes/commonActionType';
import { getTimeZoneData } from './sagas/commonSaga';


// export default saga function
export default function* mySaga() {
    // listen for getTimeZone action
    yield takeLatest(REQUEST_GET_TIMEZONE, getTimeZoneData);
}