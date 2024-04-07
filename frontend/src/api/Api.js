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
    return async dispatch => {
        try {
            const reponse = await axios.get("/api/products/new");
            const data = reponse.data
            dispatch({type: 'PRODUCTS_NEW_SUCCESS', payload: data});
        } catch (error) {
            dispatch({type: 'PRODUCTS_NEW_ERROR', payload: error.message});
        }
    }
}
export  const province = () => {
    return async dispatch => {
        try {
            const reponse = await axios.get("https://vnprovinces.pythonanywhere.com/api/provinces/?basic=true&limit=100");
            const data = reponse.data
            dispatch({type: 'PROVINCE_SUCCESS', payload: data.results});
        } catch (error) {
            dispatch({type: 'PROVINCE_ERROR', payload: error.message});
        }
    }
}

export const dis_tricts = (province_id) => {
    return async dispatch => {
        try {
            const numericDistrictId = Number(province_id);
            const response = await axios.get(`https://vnprovinces.pythonanywhere.com/api/districts/?province_id=${numericDistrictId}&basic=true&limit=100`);
            const data = response.data;
            dispatch({ type: 'DISTRICT_SUCCESS', payload: data.results });
        } catch (error) {
            dispatch({ type: 'DISTRICT_ERROR', payload: error.message });

        }
    };
};
export const commune = (districtId) => {
    return async dispatch => {
        try {
            const numericDistrictId = Number(districtId);
            const response = await axios.get(`https://vnprovinces.pythonanywhere.com/api/wards/?district_id=${numericDistrictId}&basic=true&limit=100`);
            const data = response.data;
            dispatch({ type: 'COMMUNE_SUCCESS', payload: data.results });
        } catch (error) {
            dispatch({ type: 'COMMUNE_ERROR', payload: error.message });

        }
    };
};