import { put, takeLatest } from 'redux-saga/effects';
import {
    getSchoolData,
    getSchoolInfoByName
} from 'apis';
import {
    actionTypes,
    getSchoolDataSuccess,
    getSchoolDataFailure,
    getSchoolInfoByNameSuccess,
    getSchoolInfoByNameFailure,
} from 'actions/videoMessages';

function* onGetSchoolData() {
    try {
        const data = yield getSchoolData();
        yield put(getSchoolDataSuccess(data));
    } catch (error) {
        yield put(getSchoolDataFailure(error));
    }
}

function* onGetSchoolInfoByName(payload) {
    try {
        const data = yield getSchoolInfoByName(payload);
        yield put(getSchoolInfoByNameSuccess(data));
    } catch (error) {
        yield put(getSchoolInfoByNameFailure(error))
    }
}

export default [
    takeLatest(actionTypes.GET_SCHOOL_DATA, onGetSchoolData),
    takeLatest(actionTypes.GET_SCHOOL_INFO_BY_NAME, onGetSchoolInfoByName),
]
