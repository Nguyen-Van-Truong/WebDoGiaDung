// frontend/src/redux/actions/statisticsActions.js
import axios from 'axios';

// Action Types
export const FETCH_STATISTICS_REQUEST = 'FETCH_STATISTICS_REQUEST';
export const FETCH_STATISTICS_SUCCESS = 'FETCH_STATISTICS_SUCCESS';
export const FETCH_STATISTICS_FAILURE = 'FETCH_STATISTICS_FAILURE';

// Action Creators
export const fetchStatisticsRequest = () => ({
    type: FETCH_STATISTICS_REQUEST,
});

export const fetchStatisticsSuccess = (statistics) => ({
    type: FETCH_STATISTICS_SUCCESS,
    payload: statistics,
});

export const fetchStatisticsFailure = (error) => ({
    type: FETCH_STATISTICS_FAILURE,
    payload: error,
});

// Thunk Action to Fetch Statistics
export const fetchStatistics = () => {
    return async (dispatch) => {
        dispatch(fetchStatisticsRequest());
        try {
            const response = await axios.get('http://localhost:8080/api/statistics');
            dispatch(fetchStatisticsSuccess(response.data));
        } catch (error) {
            dispatch(fetchStatisticsFailure(error.message));
        }
    };
};
