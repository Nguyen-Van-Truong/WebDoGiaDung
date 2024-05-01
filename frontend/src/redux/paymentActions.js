import createPayment from "../api/paymentApi";

export const INITIATE_PAYMENT = 'INITIATE_PAYMENT';
export const PAYMENT_SUCCESS = 'PAYMENT_SUCCESS';
export const PAYMENT_FAILURE = 'PAYMENT_FAILURE';

export const initiatePayment = () => ({
    type: INITIATE_PAYMENT
});

export const paymentSuccess = (url) => ({
    type: PAYMENT_SUCCESS,
    payload: url
});

export const paymentFailure = (error) => ({
    type: PAYMENT_FAILURE,
    payload: error
});

export const processPayment = ({ amount, bankCode, orderInfo }) => async dispatch => {
    dispatch(initiatePayment());
    try {
        const paymentUrl = await createPayment({ amount, bankCode, orderInfo });
        if (paymentUrl.startsWith("http")) {
            dispatch(paymentSuccess(paymentUrl));
            window.location.href = paymentUrl;
        } else {
            dispatch(paymentFailure('Invalid payment URL'));
        }
    } catch (error) {
        dispatch(paymentFailure(error));
    }
};
