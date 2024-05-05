// src/api/paymentApi.js
import axios from "axios";

export const createPayment = async ({ user_id, shippingAddress, code, amount, bankCode, orderInfo }) => {
    const API_URL = `/api/payment/create-payment?user_id=${user_id}&shippingAddress=${shippingAddress}&code=${code}&amount=${amount}&bankCode=${bankCode}&orderInfo=${orderInfo}`;
    try {
        const response = await fetch(API_URL, {
            headers: {
                'Accept': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.paymentUrl && data.id_payment) {
            return { paymentUrl: data.paymentUrl, idPayment: data.id_payment };
        }
        return { paymentUrl: "", idPayment: null };  // Ensure consistent return structure
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};
export const updatePaymentMethod = (id) => {
    return async dispatch => {
        try {
            const numericId = Number(id);
            const reponse = await axios.get(`/api/payment/update?id_payment=${numericId}`);
            const data = reponse.data

            dispatch({type: 'GET_UPDATE_PAYMENT_METHOD_SUCCESS', payload: data});
        } catch (error) {
            dispatch({type: 'GET_UPDATE_PAYMENT_METHOD_ERROR', payload: error.message});
        }
    }
}



