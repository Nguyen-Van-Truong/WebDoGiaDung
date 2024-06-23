const API_BASE_URL = "http://localhost:8080/";
const IMAGE_BASE_URL = "http://localhost:8080";

const getFullImageUrl = (path) => {
    if (!path) {
        return '';
    }
    if (path.startsWith('http://') || path.startsWith('https://')) {
        return path;
    }
    return `${IMAGE_BASE_URL}${path.startsWith('/') ? '' : '/'}${path}`;
};

export default API_BASE_URL;
export { IMAGE_BASE_URL, getFullImageUrl };
