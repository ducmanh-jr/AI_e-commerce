# 🔑 Task 4: HTTMDTTHA-46 & 51 — API Verify OTP, Reset Password bcrypt & UI 3 Bước

![Build Status](https://img.shields.io/badge/Test_Suite-4%2F4_PASS-10b981?style=for-the-badge&logo=github)
![Sprint](https://img.shields.io/badge/Sprint-Sprint_2-indigo?style=for-the-badge)
![Member](https://img.shields.io/badge/Developer-Nguyen_Duc_Manh-blue?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-Node.js_--_bcryptjs_--_HTML5-0284c7?style=for-the-badge)

---

## 📌 1. TỔNG QUAN NHIỆM VỤ

- **Mã Jira Issue:** `HTTMDTTHA-46` & `HTTMDTTHA-51`
- **Tên nhiệm vụ:** `[Backend+Frontend] Viết API Verify OTP & Reset Password với mã hóa bcrypt + Giao diện 3 Bước`
- **Mục tiêu:**
  - Viết API `/api/auth/verify-otp` kiểm tra tính hợp lệ của mã OTP và cấp Reset Token.
  - Viết API `/api/auth/reset-password` băm mật khẩu mới bằng `bcryptjs` (salt round = 10).
  - Xây dựng giao diện Wizard 3 bước chuẩn Light Theme cho quy trình khôi phục mật khẩu.

---

## 📁 2. CẤU TRÚC THƯ MỤC CHUẨN KHOA HỌC

```
task 4/
├── 📄 README.md                        # Báo cáo tổng quan Task 4
├── 📁 mã nguồn/                        # Mã nguồn chính dự án
│   ├── 📄 reset-service.js             # Logic verify OTP & băm mật khẩu bcrypt
│   └── 📄 forgot-ui.html               # Giao diện chính Quên mật khẩu 3 bước
├── 📁 test/                            # Thư mục kiểm thử & Demo UI
│   ├── 📄 test.js                      # Automated Test Suite (4/4 PASS)
│   └── 📄 index.html                   # Giao diện test
└── 📁 kết quả/                         # Kết quả kiểm thử & Minh chứng
    ├── 📄 README.md                    # Báo cáo chi tiết kết quả
    ├── 🖼️ task 4.png                   # Ảnh chụp minh chứng Backend API
    └── 🖼️ task 4_fe.png                # Ảnh chụp minh chứng Frontend UI 3 Bước
```

---

## 🔑 3. ĐẶC TẢ API & BẢO MẬT BCRYPT

```javascript
// 1. Verify OTP:
const res = verifyOTP(email, '654321');
// Output: { success: true, resetToken: '...' }

// 2. Reset Password với Bcrypt Hash (10 rounds):
const resReset = resetPassword(email, resetToken, 'NewStrongPass123!');
// Output: { success: true, message: 'Đặt lại mật khẩu thành công!' }
```

---

## 🧪 4. HƯỚNG DẪN CHẠY KIỂM THỬ

Mở Terminal tại thư mục `test/` và chạy lệnh:

```bash
cd test
node test.js
```

### Kết Quả Thực Nghiệm (4/4 PASS):
```text
===============================================================
🧪 KIỂM THỬ THỰC NGHIỆM TASK 4: HTTMDTTHA-46 (Verify OTP & Reset Pass)
===============================================================
  ✅ [PASS] Từ chối mã OTP sai ('000000').
  ✅ [PASS] Xác thực mã OTP đúng ('654321') và trả về Reset Token.
  ✅ [PASS] Cập nhật mật khẩu mới thành công.
  ✅ [PASS] Đăng nhập thành công bằng mật khẩu vừa reset.

📊 Kết quả Task 4: 4/4 PASS
===============================================================
```

---

## 🖼️ 5. MINH CHỨNG GIAO DIỆN & KẾT QUẢ

Ảnh chụp minh chứng được lưu tại:  
📁 [`./kết quả/task 4.png`](./kết%20quả/task%204.png)  
📁 [`./kết quả/task 4_fe.png`](./kết%20quả/task%204_fe.png)
