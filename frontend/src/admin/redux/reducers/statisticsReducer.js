// frontend/src/redux/reducers/statisticsReducer.js
import {
    FETCH_STATISTICS_REQUEST,
    FETCH_STATISTICS_SUCCESS,
    FETCH_STATISTICS_FAILURE
} from '../actions/statisticsActions';

const initialState = {
    loading: false,
    statistics: {},
    error: '',
};

const statisticsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STATISTICS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_STATISTICS_SUCCESS:
            return {
                loading: false,
                statistics: action.payload,
                error: '',
            };
        case FETCH_STATISTICS_FAILURE:
            return {
                loading: false,
                statistics: {},
                error: action.payload,
            };
        default:
            return state;
    }
};

export default statisticsReducer;
