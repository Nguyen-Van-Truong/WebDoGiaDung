import {addPayment, createPayment} from "../api/paymentApi";

export const INITIATE_PAYMENT = 'INITIATE_PAYMENT';
export const PAYMENT_SUCCESS = 'PAYMENT_SUCCESS';
export const PAYMENT_FAILURE = 'PAYMENT_FAILURE';

export const initiatePayment = () => ({
    type: INITIATE_PAYMENT
});

export const paymentSuccess = (url, idPayment) => ({
    type: PAYMENT_SUCCESS,
    payload: { url, idPayment }
});

export const paymentFailure = (error) => ({
    type: PAYMENT_FAILURE,
    payload: error
});

export const processPayment = ({ user_id, shippingAddress, code, amount, bankCode, orderInfo }) => async dispatch => {
    dispatch(initiatePayment());
    try {
        const { paymentUrl, idPayment } = await createPayment({ user_id, shippingAddress, code, amount, bankCode, orderInfo });

        if (paymentUrl !== "" && idPayment) {

            dispatch(paymentSuccess(paymentUrl, idPayment));  // Update this if you change the paymentSuccess action structure
            window.location.href = paymentUrl;
        } else {
            dispatch(paymentFailure('Invalid payment data'));
        }
    } catch (error) {
        dispatch(paymentFailure(error));
    }
};