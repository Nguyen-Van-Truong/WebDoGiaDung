import axios from "axios";

import {loginSuccess, resetRegistrationMessage} from "../redux/Action";
import {debounce, throttle} from "lodash";
import {check_success} from "../redux/RegisterAction";


export const fetchProducts = () => {
    return async dispatch => {
        try {
            const response = await axios.get("/api/products/products");

            const data = response.data;
            console.log(data);
            dispatch({type: 'FETCH_PRODUCTS_SUCCESS', payload: data});
        } catch (error) {
            dispatch({type: 'FETCH_PRODUCTS_ERROR', payload: error.message});
        }
    }

}
/**
 *
 * tăng hiệu suất ngắt trễ cho fetchProducts là 2000ms
 * @type {DebouncedFunc<(function(*): void)|*>}
 */
export const fetchProductsDebounced = debounce(dispatch => {
    fetchProducts()(dispatch);
}, 5000);
export const throttledFetchProducts = throttle((dispatch) => {
    fetchProducts()(dispatch);
}, 3000, {leading: true});

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
export const top_sellingDebounced = debounce(dispatch => {
    top_selling()(dispatch);
}, 5000);
export const throttledTop_selling = throttle((dispatch) => {
    top_selling()(dispatch);
}, 3000, {leading: true});
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
/**
 * lam tan so suat hien api giam cu sau 5ms
 * @type {DebouncedFunc<(function(*): void)|*>}
 */
export const productsNewsDebounced = debounce(dispatch => {
    products_new()(dispatch);
}, 5000);
export const throttledProductsNew = throttle((dispatch) => {
    products_new()(dispatch);
}, 3000, {leading: true});

/**
 * api tỉnh thành
 * @returns {(function(*): Promise<void>)|*}
 */
export const province = () => {
    return async dispatch => {
        try {
            const response = await axios.get("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json");
            const data = response.data;
            const provinces = data.map(province => ({
                id: province.Id,
                name: province.Name
            }));
            dispatch({ type: 'PROVINCE_SUCCESS', payload: provinces });
        } catch (error) {
            dispatch({ type: 'PROVINCE_ERROR', payload: error.message });
        }
    }
}

export const dis_tricts = (provinceId) => {
    return async dispatch => {
        try {
            const response = await axios.get("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json");
            const data = response.data;
            const districts = data.find(province => province.Id === provinceId).Districts.map(district => ({
                id: district.Id,
                name: district.Name
            }));
            dispatch({ type: 'DISTRICT_SUCCESS', payload: districts });
        } catch (error) {
            dispatch({ type: 'DISTRICT_ERROR', payload: error.message });
        }
    };
};

export const commune = (districtId) => {
    return async dispatch => {
        try {
            const response = await axios.get("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json");
            const data = response.data;
            const communes = data.flatMap(province => province.Districts)
                .find(district => district.Id === districtId).Wards.map(commune => ({
                    id: commune.Id,
                    name: commune.Name
                }));
            dispatch({ type: 'COMMUNE_SUCCESS', payload: communes });
        } catch (error) {
            dispatch({ type: 'COMMUNE_ERROR', payload: error.message });
        }
    };
};
/**
 * api dang ki
 * @param userData
 * @param onSuccess
 * @returns {(function(*, *): Promise<void>)|*}
 */
export const register = (userData, onSuccess) => {

    return async (dispatch, getState) => {
        try {

            const response = await axios.post("/api/users/register", userData);
            const data = response.data;
            dispatch({type: 'REGISTER_SUCCESS', payload: data.message || data});
            console.log(data.message);
            /**
             * tu dong chuyen trang khi dang ki thah cong mac dinh 4s
             */
            setTimeout(() => {
                if (onSuccess) onSuccess(); // Gọi hàm onSuccess nếu được truyền vào
                /**
                 * xét giá trị cho việc thông báo lại là chuỗi ''
                 */
                dispatch(resetRegistrationMessage());
                dispatch(check_success(''));
                /**
                 * xoá mã code ra khỏi session
                 */
                sessionStorage.removeItem('code');
            }, 3000);


        } catch (error) {

            const errorMessage = error.response.data;
            dispatch({
                type: 'REGISTER_ERROR',
                payload: errorMessage
            });
        }
    }
}
/**
 * api dang nhap
 * @param email
 * @param password
 * @returns {(function(*): Promise<void>)|*}
 */
export const login = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post('/api/users/login', {email, password});
            const data = response.data;
            dispatch({type: 'LOGIN_SUCCESS', payload: data});


        } catch (error) {
            const errorMessage = error.response.data;
            dispatch({type: 'LOGIN_ERROR', payload: errorMessage});

        }
    };
};
/**
 * api gui ma otp
 * @param email
 * @param code
 * @param onSuccess
 * @returns {(function(*): Promise<void>)|*}
 */
export const otp = (email, code, onSuccess) => {
    return async dispatch => {
        try {
            const response = await axios.post('/sendOtp', {email, code});
            const data = response.data;
            dispatch({type: 'OTP_SUCCESS', payload: data});
            setTimeout(() => {
                if (onSuccess) onSuccess(code);
                dispatch(check_success(data));
                dispatch(resetRegistrationMessage());
            }, 1000);
        } catch (error) {
            const errorMessage = error.response.data;
            dispatch({type: 'OTP_ERROR', payload: errorMessage});

        }
    };
}
/**
 * check email toon tai hay chua
 */
export const checkEmail = (email) => {
    return async dispatch => {
        try {
            const response = await axios.post('/checkEmail', {email});
            const data = response.data;
            dispatch({type: 'CHECK_EMAIL_SUCCESS', payload: data});
        } catch (error) {
            const errorMessage = error.response.data;
            dispatch({type: 'CHECK_EMAIL_ERROR', payload: errorMessage});
        }
    };
}

/**
 * api cap nhap password
 * @param id
 * @param oldPassword
 * @param newPassword
 * @returns {(function(*): Promise<void>)|*}
 */
export const updatePassword = (id, oldPassword, newPassword) => {
    return async dispatch => {
        const numericId = Number(id);
        try {

            const response = await axios.get(`/api/users/updatePassword?id=${numericId}&oldPassword=${oldPassword}&newPassword=${newPassword}`);
            const data = response.data;
            console.log(data);
            dispatch({type: 'UPDATE_PASSWORD_SUCCESS', payload: data});
        } catch (error) {
            const errorMessage = error.response.data;
            dispatch({type: 'UPDATE_PASSWORD_ERROR', payload: errorMessage});

        }
    };
}
/**
 * api them thong bao
 * @param id
 * @param message
 * @returns {(function(*): Promise<void>)|*}
 */
export const notification = (id, message) => {
    return async dispatch => {
        const numericId = Number(id);
        try {
            const response = await axios.get(`/addNotification?id=${numericId}&message=${message}`);
            const data = response.data;
            console.log(data);
            dispatch({type: 'NOTIFICATION_SUCCESS', payload: data});
        } catch (error) {
            const errorMessage = error.response.data;
            dispatch({type: 'NOTIFICATION_ERROR', payload: errorMessage});

        }
    };
}
