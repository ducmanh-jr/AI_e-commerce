# ✉️ Task 3: HTTMDTTHA-10 — Mail Service & API Quên Mật Khẩu OTP

![Build Status](https://img.shields.io/badge/Test_Suite-4%2F4_PASS-10b981?style=for-the-badge&logo=github)
![Sprint](https://img.shields.io/badge/Sprint-Sprint_2-indigo?style=for-the-badge)
![Member](https://img.shields.io/badge/Developer-Nguyen_Duc_Manh-blue?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-Node.js_--_Nodemailer_--_Crypto-0284c7?style=for-the-badge)

---

## 📌 1. TỔNG QUAN NHIỆM VỤ

- **Mã Jira Issue:** `HTTMDTTHA-10`
- **Tên nhiệm vụ:** `[Backend] Viết Mail Service gửi mail OTP cho tính năng Quên Mật Khẩu`
- **Mục tiêu:**
  - Xây dựng dịch vụ Mail Service mô phỏng sinh mã OTP ngẫu nhiên 6 chữ số (`100000` - `999999`).
  - Thiết lập thời hạn hết hạn chính xác 10 phút (`600 giây`).
  - Sinh chuỗi Reset Token 64 ký tự hex ngẫu nhiên bảo mật lưu vào CSDL/Store.

---

## 📁 2. CẤU TRÚC THƯ MỤC CHUẨN KHOA HỌC

```
task 3/
├── 📄 README.md                        # Báo cáo tổng quan Task 3
├── 📁 mã nguồn/                        # Mã nguồn chính dự án
│   └── 📄 mail-service.js              # Logic Mail Service OTP Generator & Store
├── 📁 test/                            # Thư mục kiểm thử & Demo UI
│   ├── 📄 test.js                      # Automated Test Suite (4/4 PASS)
│   └── 📄 index.html                   # Giao diện mô phỏng Hộp thư Email OTP (Light Theme)
└── 📁 kết quả/                         # Kết quả kiểm thử & Minh chứng
    ├── 📄 README.md                    # Báo cáo chi tiết kết quả
    └── 🖼️ task 3.png                   # Ảnh chụp giao diện minh chứng
```

---

## 🔑 3. ĐẶC TẢ KỸ THUẬT MAIL SERVICE

```javascript
const { requestForgotPasswordOTP } = require('./mã nguồn/mail-service');

const res = requestForgotPasswordOTP('user@shopai.vn');
// Returns: { success: true, email: 'user@shopai.vn', otp: '856849', expiresInSeconds: 600, resetToken: '...' }
```

| Tham Số | Mô Tả |
|---|---|
| **Mã OTP** | 6 chữ số ngẫu nhiên (hiệu lực 10 phút = 600,000 ms) |
| **Reset Token** | Chuỗi 64 ký tự Hex ngẫu nhiên tạo bởi `crypto.randomBytes(32)` |
| **Data Store** | In-memory Map Store quản lý OTP theo Key `email.toLowerCase()` |

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
🧪 KIỂM THỬ THỰC NGHIỆM TASK 3: HTTMDTTHA-10 (Mail Service OTP)
===============================================================
✉️ [MAIL SERVICE] Đã gửi OTP 856849 tới user_test_forgot@ecommerce.vn (Hiệu lực 10 phút).
  ✅ [PASS] Gửi yêu cầu Quên mật khẩu thành công.
  ✅ [PASS] Mã OTP sinh ra đúng 6 chữ số.
  ✅ [PASS] Thời gian hết hạn của OTP được thiết lập đúng 10 phút.
  ✅ [PASS] Mã OTP và Reset Token được lưu chính xác trong CSDL/Store.

📊 Kết quả Task 3: 4/4 PASS
===============================================================
```

---

## 🖼️ 5. MINH CHỨNG GIAO DIỆN & KẾT QUẢ

Ảnh chụp giao diện sản phẩm thực tế được lưu tại:  
📁 [`./kết quả/task 3.png`](./kết%20quả/task%203.png)
