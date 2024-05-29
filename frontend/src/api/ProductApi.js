import axios from "axios";

export const fetchProducts = async ({ categoryId, page, size, sortOrder, sortBy }) => {
    try {
        const response = await axios.get(`/api/products/user/products`, {
            params: { categoryId, page, size, sortOrder, sortBy }
        });
        return response.data;
    } catch (error) {
        console.error('Failed to fetch products:', error);
        throw error;
    }
};
