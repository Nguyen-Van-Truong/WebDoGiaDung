import {addPayment, createPayment} from "../api/paymentApi";

export const INITIATE_PAYMENT = 'INITIATE_PAYMENT';
export const PAYMENT_SUCCESS = 'PAYMENT_SUCCESS';
export const PAYMENT_FAILURE = 'PAYMENT_FAILURE';
export const ERRORS_PAYMENT = 'ERRORS_PAYMENT'
export const SET_ERRORS_PAYMENT = 'SET_ERRORS_PAYMENT'
export const SELECTED_PROVINCE = 'SELECTED_PROVINCE'
export const SET_SELECTED_PROVINCE = 'SET_SELECTED_PROVINCE'
export const SELECTED_PROVINCE_NAME = 'SELECTED_PROVINCE_NAME'
export const SET_SELECTED_PROVINCE_NAME = 'SET_SELECTED_PROVINCE_NAME'
export const SELECTED_DISTRICT_NAME = 'SELECTED_DISTRICT_NAME'
export const SET_SELECTED_DISTRICT_NAME = 'SET_SELECTED_PROVINCE_DISTRICT_NAME'
export const SELECTED_COMMUNE_NAME = 'SELECTED_COMMUNE_NAME'
export const SET_SELECTED_COMMUNE_NAME = 'SET_SELECTED_COMMUNE_NAME'
export const ADDRESS = 'ADDRESS'
export const SET_ADDRESS = 'SET_ADDRESS'
export const FULL_NAME = 'FULL_NAME'
export const SET_FULL_NAME = 'SET_FULL_NAME'
export const NUMBER_PHONE = 'NUMBER_PHONE';
export const SET_NUMBER_PHONE = 'SET_NUMBER_PHONE';
export const EMAIL = 'EMAIL'
export const SET_EMAIL = 'EMAIL'

export const SET_SELECTED_DISTRICT = 'SET_SELECTED_DISTRICT'
export const setSelectDistrict = (district) => ({
    type: SET_SELECTED_DISTRICT,
    payload: district
})
export const setSelectedProvince = (province) => ({
    type: SET_SELECTED_PROVINCE,
    payload: province
});

export const setSelectedProvinceName = (provinceName) => ({
    type: SET_SELECTED_PROVINCE_NAME,
    payload: provinceName
});

export const setSelectedDistrictName = (districtName) => ({
    type: SET_SELECTED_DISTRICT_NAME,
    payload: districtName
});

export const setSelectedCommuneName = (communeName) => ({
    type: SET_SELECTED_COMMUNE_NAME,
    payload: communeName
});

export const setAddress = (address) => ({
    type: SET_ADDRESS,
    payload: address
});

export const setFullName = (fullName) => ({
    type: SET_FULL_NAME,
    payload: fullName
});
export const setNumberPhone = (number_phone) => ({
    type: SET_NUMBER_PHONE,
    payload: number_phone
})
export const setEmailPayment = (email) => ({
    type: SET_EMAIL,
    payload: email
})
export const initiatePayment = () => ({
    type: INITIATE_PAYMENT
});
export const errors_payment = () => ({
    type: ERRORS_PAYMENT
})

export const set_errors_payment = (error) => ({
    type: SET_ERRORS_PAYMENT,
    payload: error
})
export const paymentSuccess = (url, idPayment) => ({
    type: PAYMENT_SUCCESS,
    payload: {url, idPayment}
});

export const paymentFailure = (error) => ({
    type: PAYMENT_FAILURE,
    payload: error
});

export const processPayment = ({user_id, shippingAddress, code, amount, bankCode, orderInfo}) => async dispatch => {
    dispatch(initiatePayment());
    try {
        const {paymentUrl, idPayment} = await createPayment({
            user_id,
            shippingAddress,
            code,
            amount,
            bankCode,
            orderInfo
        });

        if (paymentUrl !== "" && idPayment) {
            /**
             * lưu duong dan va id nguoi dung bang redũ
             */

            dispatch(paymentSuccess(paymentUrl, idPayment));
            window.location.href = paymentUrl;
        } else {
            dispatch(paymentFailure('Invalid payment data'));
        }
    } catch (error) {
        dispatch(paymentFailure(error));
    }
};