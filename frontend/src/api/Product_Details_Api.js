import axios from "axios";
import API_BASE_URL from "../config";

/**
 * api chi tiet san pham
 * @param id
 * @param onSuccess
 * @returns {(function(*): Promise<void>)|*}
 */
export const product_details = (id, onSuccess) => {
    return async dispatch => {
        try {
            const numericId = Number(id);
            const response = await axios.get(`${API_BASE_URL}api/products/product-detail?id=${numericId}`);
            const data = response.data;


            console.log("du lieu la", data);

            dispatch({type: 'DETAILS_SUCCESS', payload: data});
            if (onSuccess) onSuccess();
        } catch (error) {
            dispatch({type: 'DETAILS_ERROR', payload: error.message});
        }
    };
};
