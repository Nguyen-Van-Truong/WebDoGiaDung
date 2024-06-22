import axios from "axios";
import API_BASE_URL from "../config";

export const fetchProducts = async ({ categoryId, page, size, sortOrder, sortBy }) => {
    try {
        const response = await axios.get(`${API_BASE_URL}api/products/user/products`, {
            params: { categoryId, page, size, sortOrder, sortBy }
        });
        return response.data;
    } catch (error) {
        console.error('Failed to fetch products:', error);
        throw error;
    }
};
