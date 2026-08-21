# 🔒 Task 5: HTTMDTTHA-47 & 51 — API Đổi Mật Khẩu & Giao Diện Cài Đặt Bảo Mật

![Build Status](https://img.shields.io/badge/Test_Suite-3%2F3_PASS-10b981?style=for-the-badge&logo=github)
![Sprint](https://img.shields.io/badge/Sprint-Sprint_2-indigo?style=for-the-badge)
![Member](https://img.shields.io/badge/Developer-Nguyen_Duc_Manh-blue?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-Node.js_--_bcryptjs_--_HTML5-0284c7?style=for-the-badge)

---

## 📌 1. TỔNG QUAN NHIỆM VỤ

- **Mã Jira Issue:** `HTTMDTTHA-47` & `HTTMDTTHA-51`
- **Tên nhiệm vụ:** `[Backend+Frontend] Viết API Đổi mật khẩu bảo vệ bởi JWT & Giao diện Cài đặt bảo mật`
- **Mục tiêu:**
  - Viết API `/api/auth/change-password` xác thực mật khẩu cũ qua `bcrypt.compareSync`.
  - Mã hóa mật khẩu mới bằng `bcrypt.hashSync` (10 rounds).
  - Xây dựng giao diện Đổi mật khẩu chuẩn Light Theme với thông báo cảnh báo lỗi/thành công trực quan.

---

## 📁 2. CẤU TRÚC THƯ MỤC CHUẨN KHOA HỌC

```
task 5/
├── 📄 README.md                        # Báo cáo tổng quan Task 5
├── 📁 mã nguồn/                        # Mã nguồn chính dự án
│   ├── 📄 change-pass-service.js       # Logic kiểm tra & đổi mật khẩu bcrypt
│   └── 📄 change-ui.html               # Giao diện chính Đổi mật khẩu
├── 📁 test/                            # Thư mục kiểm thử & Demo UI
│   ├── 📄 test.js                      # Automated Test Suite (3/3 PASS)
│   └── 📄 index.html                   # Giao diện test
└── 📁 kết quả/                         # Kết quả kiểm thử & Minh chứng
    ├── 📄 README.md                    # Báo cáo chi tiết kết quả
    └── 🖼️ task 5.png                   # Ảnh chụp giao diện minh chứng
```

---

## 🔑 3. ĐẶC TẢ KỸ THUẬT & API CHANGE PASSWORD

```javascript
const { changePassword } = require('./mã nguồn/change-pass-service');

const res = changePassword(userId, oldPassword, newPassword);
// Output: { success: true, message: 'Đổi mật khẩu thành công!' }
```

| Quy Trình Xác Thực | Kết Quả |
|---|---|
| Mật khẩu cũ không chính xác | Trả về `{ success: false, message: 'Mật khẩu hiện tại không chính xác.' }` |
| Mật khẩu mới < 6 ký tự | Trả về `{ success: false, message: 'Mật khẩu mới phải có ít nhất 6 ký tự.' }` |
| Mật khẩu cũ hợp lệ | Mã hóa băm bcrypt mật khẩu mới & cập nhật thành công |

---

## 🧪 4. HƯỚNG DẪN CHẠY KIỂM THỬ

Mở Terminal tại thư mục `test/` và chạy lệnh:

```bash
cd test
node test.js
```

### Kết Quả Thực Nghiệm (3/3 PASS):
```text
===============================================================
🧪 KIỂM THỬ THỰC NGHIỆM TASK 5: HTTMDTTHA-47 (Change Password API)
===============================================================
  ✅ [PASS] Từ chối đổi mật khẩu khi nhập sai mật khẩu cũ.
  ✅ [PASS] Đổi mật khẩu thành công khi nhập đúng mật khẩu cũ.
  ✅ [PASS] Mật khẩu mới được mã hóa và xác thực chính xác.

📊 Kết quả Task 5: 3/3 PASS
===============================================================
```

---

## 🖼️ 5. MINH CHỨNG GIAO DIỆN & KẾT QUẢ

Ảnh chụp giao diện sản phẩm thực tế được lưu tại:  
📁 [`./kết quả/task 5.png`](./kết%20quả/task%205.png)
