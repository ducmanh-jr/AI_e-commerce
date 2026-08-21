# 🎨 Task 2: HTTMDTTHA-9 — (FE) Kết nối API đăng ký / đăng nhập & protected routes

![Type](https://img.shields.io/badge/Task_Type-FRONTEND_(FE)-indigo?style=for-the-badge)
![Build Status](https://img.shields.io/badge/Test_Suite-3%2F3_PASS-10b981?style=for-the-badge&logo=github)
![Sprint](https://img.shields.io/badge/Sprint-Sprint_2-indigo?style=for-the-badge)
![Member](https://img.shields.io/badge/Developer-Nguyen_Duc_Manh-blue?style=for-the-badge)

---

## 📌 1. TỔNG QUAN NHIỆM VỤ JIRA

- **Mã Jira Issue:** `HTTMDTTHA-9`
- **Loại nhiệm vụ:** `Frontend (FE)`
- **Tên nhiệm vụ:** `(FE) Kết nối API đăng ký / đăng nhập & protected routes`
- **Mục tiêu:**
  - Xây dựng giao diện mô phỏng kết nối API đăng ký / đăng nhập và điều hướng Protected Routes.
  - Xây dựng Bảng điều khiển RBAC Router Guard kiểm tra Bearer JWT Token cho các vai trò `Customer`, `Seller` và `Admin`.
  - Hiển thị trực quan phản hồi HTTP Status: `200 OK`, `401 Unauthorized` và `403 Forbidden`.

---

## 📁 2. CẤU TRÚC THƯ MỤC FE

```
task 2/
├── 📄 README.md                        # Báo cáo tổng quan Task 2
├── 📁 mã nguồn/                        # Mã nguồn FE & Middlewares
│   ├── 📄 route-guard.js               # Logic JWT & RBAC Route Guard
│   └── 📄 auth-api.js                  # Router API Auth
├── 📁 test/                            # Thư mục kiểm thử & Demo UI
│   ├── 📄 index.html                   # Giao diện FE Admin RBAC Dashboard (Light Theme)
│   └── 📄 test.js                      # Automated Test Suite (3/3 PASS)
└── 📁 kết quả/                         # Kết quả kiểm thử & Minh chứng
    ├── 📄 README.md                    # Báo cáo chi tiết kết quả
    └── 🖼️ task 2.png                   # Ảnh chụp giao diện minh chứng
```

---

## 🧪 3. HƯỚNG DẪN CHẠY KIỂM THỬ

```bash
cd test
node test.js
```

### Kết Quả Thực Nghiệm (3/3 PASS):
```text
  ✅ [PASS] Chặn truy cập Unauthenticated (HTTP 401).
  ✅ [PASS] Chặn Customer vào trang Admin (HTTP 403 Forbidden).
  ✅ [PASS] Cho phép Admin truy cập Admin Dashboard (HTTP 200 OK).
📊 Kết quả Task 2: 3/3 PASS
```
