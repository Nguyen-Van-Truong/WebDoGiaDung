# eTTShop - Web Bán Đồ Gia Dụng

## Tổng Quan về Dự Án

**eTTShop** là một trang web thương mại điện tử chuyên về đồ gia dụng, nhằm mục tiêu cung cấp một trải nghiệm mua sắm trực tuyến tiện lợi và nhanh chóng cho người dùng. Dự án này phát triển nhằm đáp ứng nhu cầu ngày càng tăng về mua sắm trực tuyến, đồng thời cải thiện trải nghiệm người dùng thông qua việc áp dụng các công nghệ web hiện đại.

## Công Nghệ và Kỹ Thuật Sử Dụng

### Công Nghệ
- **Front-end:** React, Bootstrap, Tailwind CSS
- **Back-end:** Spring Framework
- **Database:** MySQL
- **Giao Tiếp:** REST API
- **Chat:** WebSocket

### Kỹ Thuật

#### Front-end
- **Single Page Application (SPA) với React:** Cung cấp trải nghiệm người dùng mượt mà và nhanh chóng.
- **Responsive Design với Bootstrap và Tailwind CSS:** Đảm bảo giao diện thích ứng với mọi kích thước màn hình.
- **React Paginate:** Phân trang.
- **Redux:** Quản lí trạng thái.
- **React:** Phát triển giao diện các component.
- **React Router:** Điều hướng trang.
- **Validation:** Kiểm tra định dạng hoặc tồn tại của email.

#### Back-end
- **Microservices Architecture với Spring Boot:** Dễ dàng mở rộng và bảo trì thông qua các microservices độc lập.
- **RESTful API:** Giao tiếp linh hoạt giữa front-end và back-end.
- **Bảo Mật với Spring Security:** Đảm bảo thông tin người dùng và dữ liệu hệ thống được bảo vệ.
- **Quản Lý Dữ Liệu với Spring Data JPA và MySQL:** Tối ưu hóa quá trình quản lý và truy vấn dữ liệu.
- **Spring WebSocket:** Cải thiện trải nghiệm chat thời gian thực.
- **Chatbot AI:** Ollama model qwen2:0.5b

## Chức Năng Chính

### Cho Người Dùng (User)
- Đăng nhập.
- Đăng ký.
- Quên mật khẩu.
- Thông tin người dùng (đổi mật khẩu và cập nhật thông tin người dùng).
- Giỏ hàng (thêm, xóa sản phẩm).
- Thanh toán online VNPay.
- Tìm kiếm sản phẩm.
- Chi tiết sản phẩm.
- Lịch sử đơn hàng.
- Chat app.

### Cho Quản Trị Viên (Admin)
- Thêm, sửa, xóa sản phẩm.
- Danh sách và chi tiết tài khoản.
- Danh sách, chi tiết đơn hàng và cập nhật trạng thái đơn hàng.
- Danh sách và chi tiết sản phẩm.
- Báo cáo và thống kê.
- Chatbot AI Ollama model qwen2:0.5b.
- Tìm kiếm sản phẩm và tài khoản.

## Triển khai

- **Deploy Docker** lên Azure Container Apps.

---

Dự án **eTTShop** cam kết mang lại trải nghiệm mua sắm trực tuyến tốt nhất cho khách hàng, với sự hỗ trợ đắc lực từ công nghệ hiện đại và đội ngũ phát triển chuyên nghiệp.
