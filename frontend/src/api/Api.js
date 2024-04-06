import axios from "axios";
 export const fetchProducts = () => {
     return async dispatch => {
         try {
             const response = await axios.get("/api/products/products");

             const data = response.data;
             dispatch ({type: 'FETCH_PRODUCTS_SUCCESS' ,payload :data});
         }
         catch (error) {
             dispatch ({type: 'FETCH_PRODUCTS_ERROR' ,payload : error.message});
         }
     }

}
export  const top_selling = () => {
    return async  dispatch => {
        try {
            const  reponse = await  axios.get("/api/products/top-selling");
            const  data = reponse.data
            dispatch ({type: 'TOP_SELLING_SUCCESS' ,payload :data});
        }
        catch (error) {
            dispatch ({type: 'TOP_SELLING_ERROR' ,payload : error.message});
        }
    }

}
export  const products_new = () => {
    return async  dispatch => {
        try {
            const  reponse = await  axios.get("/api/products/new");
            const  data = reponse.data
            dispatch ({type: 'PRODUCTS_NEW_SUCCESS' ,payload :data});
        }
        catch (error) {
            dispatch ({type: 'PRODUCTS_NEW_ERROR' ,payload : error.message});
        }
    }

}