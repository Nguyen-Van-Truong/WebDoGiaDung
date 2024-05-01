import {INITIATE_PAYMENT, PAYMENT_SUCCESS, PAYMENT_FAILURE} from './paymentActions';

const initialState = {
    loading: false,
    paymentUrl: '',
    error: null
};

const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIATE_PAYMENT:
            return {...state, loading: true};
        case PAYMENT_SUCCESS:
            return {...state, loading: false, paymentUrl: action.payload, error: null};
        case PAYMENT_FAILURE:
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
};

export default paymentReducer;
