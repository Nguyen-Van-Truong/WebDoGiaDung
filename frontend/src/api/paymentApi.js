// src/api/paymentApi.js
const createPayment = async ({ amount, bankCode, orderInfo }) => {
    const API_URL = `/api/payment/create-payment?amount=${amount}&bankCode=${bankCode}&orderInfo=${orderInfo}`;
    try {
        const response = await fetch(API_URL);
        const paymentUrl = await response.text();
        return paymentUrl;
    } catch (error) {
        throw error;
    }
};

export default createPayment;
