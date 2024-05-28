import axios from "axios";

export const search = (keyword ,onSuccess) => {
    return async dispatch => {
        try {
            const response = await axios.post(`/api/products/search?keyword=${keyword}`);
            const data = response.data;
            dispatch({type: 'SEARCH_SUCCESS', payload: data});
            if (onSuccess) onSuccess();
        } catch (error) {
            const errorMessage = error.response.data;
            dispatch({type: 'SEARCH_ERROR', payload: errorMessage});

        }
    };
}