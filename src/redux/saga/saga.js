import {  takeLatest } from 'redux-saga/effects'
import { REQUEST_GET_TIMEZONE, REQUEST_SET_USER_DATA } from '../actions/actionTypes/commonActionType';
import { getTimeZoneData, setUserInfo } from './sagas/commonSaga';


// export default saga function
export default function* mySaga() {
    // listen for getTimeZone action
    yield takeLatest(REQUEST_GET_TIMEZONE, getTimeZoneData);
    yield takeLatest(REQUEST_SET_USER_DATA,setUserInfo)
}