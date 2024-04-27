export const formatPrice = (price) => {
    let priceStr = price.toString();
    let result = '';

    if (priceStr.length <= 5) {
        result = priceStr.slice(0, 1) + '.' + priceStr.slice(1);
    }
    else

            if (priceStr.length === 6) {
                result = priceStr.slice(0, 1) + '.' + priceStr.slice(2);
            }

     else {

        // Lặp qua chuỗi số và chèn dấu chấm sau mỗi ba số
        while (priceStr.length > 3) {
            let len = priceStr.length;
            // Chèn dấu chấm trước ba số cuối cùng
            result = '.' + priceStr.substring(len - 3) + result;
            // Cắt bỏ ba số cuối cùng đã xử lý
            priceStr = priceStr.substring(0, len - 3);
        }

        // Thêm phần còn lại của chuỗi số (nếu có) vào kết quả
        result = priceStr + result;


    }


    return result;
};