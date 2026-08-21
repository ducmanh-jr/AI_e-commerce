# 📊 BÁO CÁO TỔNG KẾT DỰ ÁN: SPRINT 1 & SPRINT 2 (NGUYỄN ĐỨC MẠNH)

> **Repository GitHub:** [ducmanh-jr/AI_e-commerce](https://github.com/ducmanh-jr/AI_e-commerce)  
> **Thành viên phụ trách:** Nguyễn Đức Mạnh  
> **Trạng thái kiểm thử:** 🟢 **100% HOÀN THÀNH VÀ ĐẠT KIỂM THỬ THỰC NGHIỆM**

---

## ⚙️ SPRINT 1: HƯỚNG DẪN CẤU HÌNH API & KIỂM THỬ TỰ ĐỘNG

- **🔹 Mã nguồn:** Cấu hình biến môi trường `.env`, `.env.example` và tài liệu `HUONG_DAN_CAU_HINH_API.md` ➔ [📂 Xem Thư Mục Mã Nguồn Sprint 1 Trên GitHub](https://github.com/ducmanh-jr/AI_e-commerce/tree/main/sprint%201%20Nguyen%20Duc%20Manh/m%C3%A3%20ngu%E1%BB%93n)
- **🧪 Kiểm thử:** Script `test.js` kiểm thử 15 tiêu chí API & Giao diện Dashboard `index.html` ➔ [🧪 Xem Thư Mục Kiểm Thử Sprint 1 Trên GitHub](https://github.com/ducmanh-jr/AI_e-commerce/tree/main/sprint%201%20Nguyen%20Duc%20Manh/test)
- **🏆 Kết quả:** Báo cáo tổng kết đạt **15/15 PASS (100%)** ➔ [📊 Xem Thư Mục Kết Quả Sprint 1 Trên GitHub](https://github.com/ducmanh-jr/AI_e-commerce/tree/main/sprint%201%20Nguyen%20Duc%20Manh/k%E1%BA%BFt%20qu%E1%BA%A3)

---

## 🚀 SPRINT 2: PHÂN HỆ XÁC THỰC & BẢO MẬT TÀI KHOẢN (5 TASKS)

### 🔹 Task 1: HTTMDTTHA-6 — Form Đăng ký/Đăng nhập & Password Strength Meter
- **🔹 Mã nguồn:** Form Đăng ký/Đăng nhập, Design System Light Theme và `password-meter.js` ➔ [📂 Xem Mã Nguồn Task 1 Trên GitHub](https://github.com/ducmanh-jr/AI_e-commerce/tree/main/sprint%202%20Nguyen%20Duc%20Manh/task%201/m%C3%A3%20ngu%E1%BB%93n)
- **🧪 Kiểm thử:** Script `test.js` đánh giá 4 cấp độ độ mạnh mật khẩu (**4/4 PASS**) ➔ [🧪 Xem Folder Test Task 1 Trên GitHub](https://github.com/ducmanh-jr/AI_e-commerce/tree/main/sprint%202%20Nguyen%20Duc%20Manh/task%201/test)
- **🏆 Kết quả:** Báo cáo Markdown & Ảnh minh chứng `task 1.png` ➔ [📊 Xem Folder Kết Quả Task 1 Trên GitHub](https://github.com/ducmanh-jr/AI_e-commerce/tree/main/sprint%202%20Nguyen%20Duc%20Manh/task%201/k%E1%BA%BFt%20qu%E1%BA%A3)

---

### 🔹 Task 2: HTTMDTTHA-9 — Protected Routes & RBAC Route Guards
- **🔹 Mã nguồn:** Middleware `route-guard.js` (JWT + Role Security) & `auth-api.js` ➔ [📂 Xem Mã Nguồn Task 2 Trên GitHub](https://github.com/ducmanh-jr/AI_e-commerce/tree/main/sprint%202%20Nguyen%20Duc%20Manh/task%202/m%C3%A3%20ngu%E1%BB%93n)
- **🧪 Kiểm thử:** Script `test.js` kiểm thử HTTP 401, 403, 200 (**3/3 PASS**) & Admin Dashboard `index.html` ➔ [🧪 Xem Folder Test Task 2 Trên GitHub](https://github.com/ducmanh-jr/AI_e-commerce/tree/main/sprint%202%20Nguyen%20Duc%20Manh/task%202/test)
- **🏆 Kết quả:** Báo cáo Markdown & Ảnh minh chứng `task 2.png` ➔ [📊 Xem Folder Kết Quả Task 2 Trên GitHub](https://github.com/ducmanh-jr/AI_e-commerce/tree/main/sprint%202%20Nguyen%20Duc%20Manh/task%202/k%E1%BA%BFt%20qu%E1%BA%A3)

---

### 🔹 Task 3: HTTMDTTHA-10 — Mail Service & API Quên Mật Khẩu OTP
- **🔹 Mã nguồn:** Backend `mail-service.js` (Sinh mã OTP 6 số, 10 phút expiration & Reset Token) ➔ [📂 Xem Mã Nguồn Task 3 Trên GitHub](https://github.com/ducmanh-jr/AI_e-commerce/tree/main/sprint%202%20Nguyen%20Duc%20Manh/task%203/m%C3%A3%20ngu%E1%BB%93n)
- **🧪 Kiểm thử:** Script `test.js` xác minh sinh OTP & Store (**4/4 PASS**) & UI Hộp thư mô phỏng ➔ [🧪 Xem Folder Test Task 3 Trên GitHub](https://github.com/ducmanh-jr/AI_e-commerce/tree/main/sprint%202%20Nguyen%20Duc%20Manh/task%203/test)
- **🏆 Kết quả:** Báo cáo Markdown & Ảnh minh chứng `task 3.png` ➔ [📊 Xem Folder Kết Quả Task 3 Trên GitHub](https://github.com/ducmanh-jr/AI_e-commerce/tree/main/sprint%202%20Nguyen%20Duc%20Manh/task%203/k%E1%BA%BFt%20qu%E1%BA%A3)

---

### 🔹 Task 4: HTTMDTTHA-46 & 51 — API Verify OTP, Reset Password bcrypt & UI 3 Bước
- **🔹 Mã nguồn:** Service `reset-service.js` (Băm mật khẩu bcrypt 10 rounds) & Giao diện `forgot-ui.html` ➔ [📂 Xem Mã Nguồn Task 4 Trên GitHub](https://github.com/ducmanh-jr/AI_e-commerce/tree/main/sprint%202%20Nguyen%20Duc%20Manh/task%204/m%C3%A3%20ngu%E1%BB%93n)
- **🧪 Kiểm thử:** Script `test.js` kiểm thử Verify OTP & Reset Pass (**4/4 PASS**) & UI Wizard test ➔ [🧪 Xem Folder Test Task 4 Trên GitHub](https://github.com/ducmanh-jr/AI_e-commerce/tree/main/sprint%202%20Nguyen%20Duc%20Manh/task%204/test)
- **🏆 Kết quả:** Báo cáo Markdown & Ảnh minh chứng `task 4.png`, `task 4_fe.png` ➔ [📊 Xem Folder Kết Quả Task 4 Trên GitHub](https://github.com/ducmanh-jr/AI_e-commerce/tree/main/sprint%202%20Nguyen%20Duc%20Manh/task%204/k%E1%BA%BFt%20qu%E1%BA%A3)

---

### 🔹 Task 5: HTTMDTTHA-47 & 51 — API Đổi Mật Khẩu & Giao Diện Cài Đặt Bảo Mật
- **🔹 Mã nguồn:** Service `change-pass-service.js` (Xác thực mật khẩu cũ bcrypt) & Giao diện `change-ui.html` ➔ [📂 Xem Mã Nguồn Task 5 Trên GitHub](https://github.com/ducmanh-jr/AI_e-commerce/tree/main/sprint%202%20Nguyen%20Duc%20Manh/task%205/m%C3%A3%20ngu%E1%BB%93n)
- **🧪 Kiểm thử:** Script `test.js` kiểm thử Đổi mật khẩu (**3/3 PASS**) & Security Settings UI ➔ [🧪 Xem Folder Test Task 5 Trên GitHub](https://github.com/ducmanh-jr/AI_e-commerce/tree/main/sprint%202%20Nguyen%20Duc%20Manh/task%205/test)
- **🏆 Kết quả:** Báo cáo Markdown & Ảnh minh chứng `task 5.png` ➔ [📊 Xem Folder Kết Quả Task 5 Trên GitHub](https://github.com/ducmanh-jr/AI_e-commerce/tree/main/sprint%202%20Nguyen%20Duc%20Manh/task%205/k%E1%BA%BFt%20qu%E1%BA%A3)
