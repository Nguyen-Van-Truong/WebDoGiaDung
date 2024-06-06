export const formatCurrency = (amount) => {
    if (amount !== undefined && amount !== null) {
        return amount.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'}).slice(0, -2) + ' VNĐ';
    } else {
        return ''; // hoặc giá trị mặc định khác tùy thuộc vào yêu cầu của bạn
    }
};

export const shortenProductName = (name, maxLength = 15) => {
    return name.length > maxLength ? name.substring(0, maxLength) + '...' : name;
};

export const shortenDescription = (description) => {
    if (description && description.length > 50) {
        return description.substring(0, 50) + '...';
    }
    return description || ''; // Trả về một giá trị mặc định nếu description là null hoặc undefined
};

export const formatDate = (date) => {
    if (date) {
        return new Date(date).toLocaleDateString();
    }
    return ''; // hoặc giá trị mặc định khác tùy thuộc vào yêu cầu của bạn
};
