import axios from 'axios';

export const addProduct = async (formData) => {
    try {
        const response = await axios.post("/api/products/add", formData, {});
        return response.data;
    } catch (error) {
        throw error;
    }
};
