# 🤖 KỶ LUẬT LẬP TRÌNH CLAUDE CODE & AI AGENTS

Dự án: **Hệ thống Thương mại điện tử tích hợp AI**

## 1. Lệnh Kiểm Thử Chạy Bắt Buộc
- **Chạy Kiểm Thử Cấu Hình API (Sprint 1):** `node test-api-config.js`
- **Chạy Kiểm Thử Auth & Security (Sprint 2):** `node test-auth-suite.js`
- **Khởi chạy Server Local:** `npm start` (hoặc `node server.js`)

## 2. Tiêu Chuẩn Giao Diện UI/UX
- Thiết kế giao diện theo phong cách Modern Glassmorphism & Neo-Brutalism mượt mà.
- Form đăng ký, đăng nhập bắt buộc tích hợp thanh đo độ mạnh mật khẩu bảo mật (Password Strength Meter).
- Phân quyền người dùng linh hoạt với Route Guard (Customer, Seller, Admin).

## 3. Quy Tắc Chống Lỗi
- Kiểm tra dữ liệu đầu vào cẩn thận, xử lý mã hóa mật khẩu bcrypt & token JWT an toàn.
- Dịch vụ gửi email OTP reset mật khẩu phải tạo mã OTP 6 chữ số có hiệu lực giới hạn gian (ví dụ: 10 phút).
