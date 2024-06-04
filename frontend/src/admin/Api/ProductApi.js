// frontend/src/admin/Api/ProductApi.js
import axios from 'axios';

export const addProduct = async (formData) => {
    try {
        const response = await axios.post("/api/products/add", formData, {});
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const fetchProducts = async ({ categoryId, page, size, sortOrder, sortBy, keyword }) => {
    try {
        const response = await axios.get(`/api/products/admin/products`, {
            params: { categoryId, page, size, sortOrder, sortBy, keyword }
        });
        return response.data;
    } catch (error) {
        console.error('Failed to fetch products:', error);
        throw error;
    }
};


export const fetchProductDetails = async (productId) => {
    try {
        const response = await axios.get(`/api/products/product-detail?id=${productId}`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch product details:', error);
        throw error;
    }
};

export const updateProduct = async (productId, formData) => {
    const config = {
        headers: {'Content-Type': 'multipart/form-data'}
    };
    try {
        const response = await axios.put(`/api/products/update/${productId}`, formData, config);
        return response.data;  // Return data for success handling in the component
    } catch (error) {
        console.error('Failed to update product:', error);
        throw error;  // Rethrow to handle in the component
    }
};

export const fetchStatusesApi = async () => {
    try {
        const response = await axios.get('/api/products/statuses');
        return response.data; // Return the statuses directly
    } catch (error) {
        console.error('Failed to fetch statuses:', error);
        throw error; // Rethrow the error to be handled by the caller
    }
};
