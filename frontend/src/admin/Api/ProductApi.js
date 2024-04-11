import axios from 'axios';

export const addProduct = async (productData) => {
    try {
        const response = await axios.post("/api/products/add", productData);
        return response.data;
    } catch (error) {
        throw error;
    }
};
