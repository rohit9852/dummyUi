import { actionTypes } from 'actions/videoMessages';
import { errorMessages } from 'constants/index';
import get from 'lodash/get';

export const defaultState = {
    isFetchingSchoolData: false,
    isFetchingSchoolInfoByName: false,
    fetchSchoolInfoByNameError: null,
    schoolInfoByName: {},
    isSchoolDataFetched: false,
    fetchSchoolDataError: null,
    schoolData: {},
    additionalVideos: [
        {
            "id": "QYiGH7HkD7o",
            "text": "Mrs Revathi Srinivasan - Director, Singhania Group of Schools",
            "youtubeVideoId": "QYiGH7HkD7o"
        },
        {
            "id": "1P7etvi69GY",
            "text": "Mrs Lyndall Bain - Education Director, South Australia",
            "youtubeVideoId": "1P7etvi69GY"
        },
        {
            "id": "NWZnej9D520",
            "text": "Mr Sajeel Khanna - SVP BlueEnt & co-founder at SmartHug",
            "youtubeVideoId": "NWZnej9D520"
        },
    ],
    additionalVideosTestimonials: [
        {
            "id": "1312c",
            "text": "Arin Chaubal - Student, Sulochana Devi Singhania School",
            "youtubeVideoId": "yOlHB24-TDE"
        },
        {
            "id": "13123ewsdscvx",
            "text": "Webinar on \"Educator's Role in preventing Suicidal tendencies among Youth\"",
            "youtubeVideoId": "SA_xJtdAuUo"
        },
        {
            "id": "13123ewsdscc323x",
            "text": "Webinar on \"Educator's Role in preventing Suicidal tendencies among Youth\"",
            "youtubeVideoId": "SA_xJtdAuUo"
        },
    ],
}

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case actionTypes.GET_SCHOOL_DATA: {
            return {
                ...state,
                isFetchingSchoolData: true,
                isSchoolDataFetched: false,
                fetchSchoolDataError: null,
            }
        }
        case actionTypes.GET_SCHOOL_DATA_SUCCESS: {
            return {
                ...state,
                isFetchingSchoolData: false,
                isSchoolDataFetched: true,
                schoolData: get(payload, 'data', {}),
            };
        }
        case actionTypes.GET_SCHOOL_DATA_FAILURE: {
            return {
                ...state,
                isFetchingSchoolData: false,
                isSchoolDataFetched: false,
                fetchSchoolDataError: get(payload, "message", errorMessages.API_ERROR),
            }
        }
        case actionTypes.GET_SCHOOL_INFO_BY_NAME: {
            return {
                ...state,
                isFetchingSchoolInfoByName: true,
                fetchSchoolInfoByNameError: null,
            }
        }
        case actionTypes.GET_SCHOOL_INFO_BY_NAME_SUCCESS: {
            return {
                ...state,
                isFetchingSchoolInfoByName: false,
                schoolInfoByName: get(payload, 'data', {}),
            }
        }
        case actionTypes.GET_SCHOOL_INFO_BY_NAME_FAILURE: {
            return {
                ...state,
                isFetchingSchoolInfoByName: false,
                fetchSchoolInfoByNameError: get(payload, 'message', '')
            }
        }
        default:
            return state
    }
}

export default reducer
