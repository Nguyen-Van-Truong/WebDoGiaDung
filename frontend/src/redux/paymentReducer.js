import {
    INITIATE_PAYMENT,
    PAYMENT_SUCCESS,
    PAYMENT_FAILURE,
    SET_ERRORS_PAYMENT,
    SET_ADDRESS,
    SET_SELECTED_PROVINCE,
    SET_SELECTED_DISTRICT_NAME,
    SET_SELECTED_COMMUNE_NAME,
    SET_SELECTED_PROVINCE_NAME,
    SET_SELECTED_DISTRICT, SET_FULL_NAME, SET_NUMBER_PHONE, SET_EMAIL
} from './paymentActions';
const initialState = {
    loading: false,
    paymentUrl: '',
    error: null,
    payment: null,
    paymentId: null,
    errors_payment: '',
    selectedProvinceId: '',
    selectedDistrict: '',
    selectedProvinceName: '',
    selectedDistrictName: '',
    selectedCommuneName: '',
    addressPayment: '',
    fullName: '',
    numberPhone: '',
    emailPayment: ''
};

const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIATE_PAYMENT:
            return {...state, loading: true};
        case PAYMENT_SUCCESS:
            return {
                ...state, loading: false,
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
                payment: action.payload,
                errors_payment: ''

            }
        case SET_ERRORS_PAYMENT :
            return {
                ...state,
                errors_payment: action.payload
            }
        case SET_ADDRESS :
            return {
                ...state,
                addressPayment: action.payload
            }
        case SET_SELECTED_PROVINCE :
            return {
                ...state,
                selectedProvinceId: action.payload
            }
        case SET_SELECTED_DISTRICT_NAME :
            return {
                ...state,
                selectedDistrictName: action.payload
            }
        case SET_SELECTED_COMMUNE_NAME :
            return {
                ...state,
                selectedCommuneName: action.payload
            }
        case SET_SELECTED_PROVINCE_NAME :
            return {
                ...state,
                selectedProvinceName: action.payload
            }
        case SET_SELECTED_DISTRICT:
            return {
                ...state,
                selectedDistrict: action.payload
            }
        case SET_FULL_NAME :
            return {
                ...state,
                fullName: action.payload
            }
        case SET_NUMBER_PHONE:
            return {
                ...state,
                numberPhone: action.payload
            }
        case SET_EMAIL:
            return {
                ...state,
                emailPayment: action.payload
            }
        default:
            return state;
    }
};

export default paymentReducer;
