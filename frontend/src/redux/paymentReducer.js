import {INITIATE_PAYMENT, PAYMENT_SUCCESS, PAYMENT_FAILURE} from './paymentActions';

const initialState = {
    loading: false,
    paymentUrl: '',
    error: null,
    payment:null,
    paymentId:null
};

const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIATE_PAYMENT:
            return {...state, loading: true};
        case PAYMENT_SUCCESS:
            return {...state, loading: false,
                paymentUrl: action.payload.url,
                paymentId: action.payload.idPayment
                , error: null,
            payment: action.payload
            };
        case PAYMENT_FAILURE:
            return {...state, loading: false, error: action.payload};
        case "PAYMENT_SUCCESS":
            return {
                ...state,
                payment: action.payload

            }
        default:
            return state;
    }
};

export default paymentReducer;
