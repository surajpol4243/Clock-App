import { call, put } from 'redux-saga/effects'
import { getTimeZoneListApiCall } from '../api/commonApiCall';
import { receiveAddAlarm, receiveGetTimeZone, receiveRemoveAlarm, receiveSetUserData } from '../../actions/actionCreators/commonActionCreators';

// export function to get time zone data
export function* getTimeZoneData(action) {

    try {
        // call Time-Zone API
        const data = yield call(getTimeZoneListApiCall, action.obj);
        // dispatch success action
        yield put(receiveGetTimeZone(data));
    } catch (error) {
        // dispatch error acton
        yield put(receiveGetTimeZone(error))
    }
};

// export funcation to set user Info
export function* setUserInfo(action) {
    try {
        // Get data from action
        console.log(action.obj)
        const data = action?.obj;
        // dispatch ser user info action
        yield put(receiveSetUserData(data))
    } catch (error) {
        // dispatch empty user info action
        yield put(receiveSetUserData({}))
    }
}

// export funcation to add add Alarm
export function* addAlarmItem(action) {
    try {
        // Get data from action
        const data = action?.obj;
        // Dispatch add alarm
        yield put(receiveAddAlarm(data))
    } catch (error) {

    }
}

// export funcation to remove Alarm
export function* removeAlarmItem(action){
    try {
        //Get data from action
        const data = action?.obj
        // Dispatch removeAlarm action
        yield put(receiveRemoveAlarm(data));
    } catch (error) {
        
    }
}
