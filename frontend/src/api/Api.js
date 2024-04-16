import axios from "axios";

import {loginSuccess, resetRegistrationMessage} from "../redux/Action";


export const fetchProducts = () => {
    return async dispatch => {
        try {
            const response = await axios.get("/api/products/products");

            const data = response.data;
            dispatch({type: 'FETCH_PRODUCTS_SUCCESS', payload: data});
        } catch (error) {
            dispatch({type: 'FETCH_PRODUCTS_ERROR', payload: error.message});
        }
    }

}
export const top_selling = () => {
    return async dispatch => {
        try {
            const reponse = await axios.get("/api/products/top-selling");
            const data = reponse.data
            dispatch({type: 'TOP_SELLING_SUCCESS', payload: data});
        } catch (error) {
            dispatch({type: 'TOP_SELLING_ERROR', payload: error.message});
        }
    }

}
export const products_new = () => {
    return async dispatch => {
        try {
            const reponse = await axios.get("/api/products/new");
            const data = reponse.data
            dispatch({type: 'PRODUCTS_NEW_SUCCESS', payload: data});
        } catch (error) {
            dispatch({type: 'PRODUCTS_NEW_ERROR', payload: error.message});
        }
    }
}
export const province = () => {
    return async dispatch => {
        try {
            const reponse = await axios.get("https://vnprovinces.pythonanywhere.com/api/provinces/?basic=true&limit=100");
            const data = reponse.data
            dispatch({type: 'PROVINCE_SUCCESS', payload: data.results});
        } catch (error) {
            dispatch({type: 'PROVINCE_ERROR', payload: error.message});
        }
    }
}

export const dis_tricts = (province_id) => {
    return async dispatch => {
        try {
            const numericDistrictId = Number(province_id);
            const response = await axios.get(`https://vnprovinces.pythonanywhere.com/api/districts/?province_id=${numericDistrictId}&basic=true&limit=100`);
            const data = response.data;
            dispatch({type: 'DISTRICT_SUCCESS', payload: data.results});
        } catch (error) {
            dispatch({type: 'DISTRICT_ERROR', payload: error.message});

        }
    };
};
export const commune = (districtId) => {
    return async dispatch => {
        try {
            const numericDistrictId = Number(districtId);
            const response = await axios.get(`https://vnprovinces.pythonanywhere.com/api/wards/?district_id=${numericDistrictId}&basic=true&limit=100`);
            const data = response.data;
            dispatch({type: 'COMMUNE_SUCCESS', payload: data.results});
        } catch (error) {
            dispatch({type: 'COMMUNE_ERROR', payload: error.message});

        }
    };
};
export const register = (userData  , onSuccess) => {

    return async (dispatch, getState) => {
        try {

            const response = await axios.post("/api/users/register", userData);
            const data = response.data;
            dispatch({type: 'REGISTER_SUCCESS', payload: data.message  || data});
            console.log(data.message);
            /**
             * tu dong chuyen trang khi dang ki thah cong mac dinh 4s
             */
            setTimeout(() => {
                if (onSuccess) onSuccess(); // Gọi hàm onSuccess nếu được truyền vào
                   dispatch(resetRegistrationMessage());
            }, 4000);


        } catch (error) {

            const errorMessage = error.response.data;
            dispatch({
                type: 'REGISTER_ERROR',
                payload: errorMessage
            });
        }
    }
}
export const login = (email, password  ) => {
    return async dispatch => {
        try {
            const response = await axios.post('/api/users/login', { email, password });
            const data = response.data;
            dispatch({ type: 'LOGIN_SUCCESS', payload: data });
            const is_admin = response.data.is_admin;
            console.log(is_admin);

        } catch (error) {
            const errorMessage = error.response.data;
            dispatch({type: 'LOGIN_ERROR', payload: errorMessage});

        }
    };
};
export const otp = (email, code , onSuccess) => {
    return async dispatch => {
        try {
            const response = await axios.post('/sendOtp', { email, code});
            const data = response.data;
            console.log(data);
            dispatch({ type: 'OTP_SUCCESS', payload: data });
            setTimeout(() => {
                if (onSuccess) onSuccess();
                dispatch(resetRegistrationMessage());
            }, 1000);
        } catch (error) {
            const errorMessage = error.response.data;
            dispatch({type: 'OTP_ERROR', payload: errorMessage});

        }
    };
}