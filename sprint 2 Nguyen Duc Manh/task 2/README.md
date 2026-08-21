# 🛡️ Task 2: HTTMDTTHA-9 — Protected Routes & Role-Based Access Control (RBAC)

![Build Status](https://img.shields.io/badge/Test_Suite-3%2F3_PASS-10b981?style=for-the-badge&logo=github)
![Sprint](https://img.shields.io/badge/Sprint-Sprint_2-indigo?style=for-the-badge)
![Member](https://img.shields.io/badge/Developer-Nguyen_Duc_Manh-blue?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-Node.js_--_Express_--_JWT-0284c7?style=for-the-badge)

---

## 📌 1. TỔNG QUAN NHIỆM VỤ

- **Mã Jira Issue:** `HTTMDTTHA-9`
- **Tên nhiệm vụ:** `[Backend] Phân quyền truy cập các Route Guard (Protect Route)`
- **Mục tiêu:**
  - Xây dựng Middleware bảo vệ Route Endpoint (`authenticateToken`) kiểm tra Bearer JWT Token.
  - Phân quyền người dùng (`requireRole`) ngăn chặn truy cập trái phép giữa các vai trò `Customer`, `Seller` và `Admin`.
  - Trả về đúng mã HTTP Status Standard: `401 Unauthorized` (chưa đăng nhập) và `403 Forbidden` (không đủ quyền).

---

## 📁 2. CẤU TRÚC THƯ MỤC CHUẨN KHOA HỌC

```
task 2/
├── 📄 README.md                        # Báo cáo tổng quan Task 2
├── 📁 mã nguồn/                        # Mã nguồn chính dự án
│   ├── 📄 route-guard.js               # Middleware authenticateToken & requireRole
│   └── 📄 auth-api.js                  # Router API Auth
├── 📁 test/                            # Thư mục kiểm thử & Demo UI
│   ├── 📄 test.js                      # Automated Test Suite (3/3 PASS)
│   └── 📄 index.html                   # Interactive RBAC Admin Dashboard (Light Theme)
└── 📁 kết quả/                         # Kết quả kiểm thử & Minh chứng
    ├── 📄 README.md                    # Báo cáo chi tiết kết quả
    └── 🖼️ task 2.png                   # Ảnh chụp giao diện minh chứng
```

---

## 🔑 3. ĐẶC TẢ KỸ THUẬT & API ROUTE GUARDS

```javascript
// Example Usage in Express App:
app.get('/api/admin/dashboard', 
    authenticateToken, 
    requireRole(['admin']), 
    (req, res) => res.json({ success: true, message: 'Welcome Admin' })
);
```

| HTTP Status | Trigger Condition | Response Format |
|---|---|---|
| `401 Unauthorized` | Không có Bearer Token trong Authorization Header | `{ success: false, message: "Yêu cầu Token xác thực." }` |
| `403 Forbidden` | Token không hợp lệ hoặc User role không khớp | `{ success: false, message: "Quyền truy cập bị từ chối!" }` |
| `200 OK` | Token hợp lệ & Role được phép truy cập | `{ success: true, data: [...] }` |

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
🧪 KIỂM THỬ THỰC NGHIỆM TASK 2: HTTMDTTHA-9 (Route Guards & RBAC)
===============================================================
  ✅ [PASS] Chặn truy cập Unauthenticated (HTTP 401).
  ✅ [PASS] Chặn Customer vào trang Admin (HTTP 403 Forbidden).
  ✅ [PASS] Cho phép Admin truy cập Admin Dashboard (HTTP 200 OK).

📊 Kết quả Task 2: 3/3 PASS
===============================================================
```

---

## 🖼️ 5. MINH CHỨNG GIAO DIỆN & KẾT QUẢ

Ảnh chụp giao diện sản phẩm thực tế được lưu tại:  
📁 [`./kết quả/task 2.png`](./kết%20quả/task%202.png)
