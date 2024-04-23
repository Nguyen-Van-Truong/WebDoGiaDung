// frontend/src/admin/redux/reducers/ProductReducer.js
import {
    ADD_PRODUCT_ERROR,
    ADD_PRODUCT_SUCCESS,
    DESCRIPTION,
    PRICE,
    PRODUCT_NAME,
    PRODUCTS,
    QUANTITY,
    SELECTED_CATEGORY_PRODUCT,
    SET_DESCRIPTION,
    SET_PRICE,
    SET_PRODUCT_DETAILS,
    SET_PRODUCT_NAME,
    SET_PRODUCTS,
    SET_QUANTITY,
    SET_SELECTED_CATEGORY_PRODUCT,
    SET_STOCK_QUANTITY,
    SET_TOTAL_QUANTITY,
    SET_VIEW_MODE,
    STOCK_QUANTITY,
    TOTAL_QUANTITY,
    VIEW_MODE
} from '../actions/ProductActions';


const initialState = {
    totalQuantity: 0,
    products :[],
    viewMode : 'list',
    sortOrder :'desc',
    sortBy : 'created_at',
    productName :'',
    description :'',
    price_reducer :'',
    stockQuantity :'',
    selectedCategory :'',
    mediaUrls: [],
};


const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT_DETAILS:
            return {
                ...state,
                productName: action.payload.product_name,
                description: action.payload.description,
                price_reducer: action.payload.price,
                stockQuantity: 0,
                totalQuantity: action.payload.stock_quantity,
                selectedCategory: action.payload.category.categoryId,
                mediaUrls: action.payload.mediaUrls || [],
            };
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                products: [...state.products, action.payload],
                error: null,
            };
        case ADD_PRODUCT_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case TOTAL_QUANTITY:
            return {
                ...state,
                totalQuantity: state.totalQuantity,
            };
        case SET_TOTAL_QUANTITY:
            return {
                ...state,
                totalQuantity: action.payload,
            };
        case  PRODUCTS :
            return {
                ...state,
                products: action.payload
            }
        case SET_PRODUCTS :
            return {
                ...state,
                products: action.payload,
            }
        case  VIEW_MODE :
            return {
                ...state,
                viewMode: state.viewMode
            }
        case  SET_VIEW_MODE :
            return  {
                ...state,
                viewMode: action.payload
            }
        case  PRODUCT_NAME :
            return {
               ...state,
               productName: state.productName
            }
        case  SET_PRODUCT_NAME :
            return {
                ...state,
                productName: action.payload
            }
        case  DESCRIPTION :
            return  {
                ...state ,
                description: state.description
            }
        case SET_DESCRIPTION :
            return {
                ...state,
                description: action.payload
            }
        case PRICE :
            return {
                ...state,
                price_reducer: state.price_reducer
            }
        case SET_PRICE :
            return {
                ...state,
                price_reducer: action.payload
            }
        case  STOCK_QUANTITY :
            return {
                ...state,
                stockQuantity : state.stockQuantity
            }
        case  SET_STOCK_QUANTITY :
            return {
                ...state,
                stockQuantity : action.payload
            }
        case SELECTED_CATEGORY_PRODUCT :
            return {
                ...state ,
                selectedCategory : state.selectedCategory
            }
        case SET_SELECTED_CATEGORY_PRODUCT :
            return {
                ...state,
                selectedCategory:  action.payload
            }

        default:
            return state;
    }
};
export default productReducer;
