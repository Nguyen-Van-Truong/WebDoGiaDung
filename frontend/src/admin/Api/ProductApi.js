import axios from 'axios';

export const addProduct = async (formData) => {
    try {
        const response = await axios.post("/api/products/add", formData, {});
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const fetchProducts = async ({ categoryId, page, size, sortOrder, sortBy }) => {
    try {
        const response = await axios.get(`/api/products/admin/products`, {
            params: { categoryId, page, size, sortOrder, sortBy }
        });
        return response.data;
    } catch (error) {
        console.error('Failed to fetch products:', error);
        throw error;
    }
};