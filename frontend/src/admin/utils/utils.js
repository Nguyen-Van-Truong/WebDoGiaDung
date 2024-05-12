export const formatCurrency = (amount) => {
    return amount.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'}).slice(0, -2) + ' VNĐ';
};
export const shortenProductName = (name, maxLength = 15) => {
    return name.length > maxLength ? name.substring(0, maxLength) + '...' : name;
};
export const shortenDescription = (description) => {
    if (description.length > 50) {
        return description.substring(0, 50) + '...';
    }
    return description;
};
export const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
};
