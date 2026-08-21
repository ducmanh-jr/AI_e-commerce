# ⚙️ SPRINT 1: HƯỚNG DẪN & KIỂM THỬ CẤU HÌNH API — NGUYỄN ĐỨC MẠNH

> **Dự án:** Hệ Thống Thương Mại Điện Tử Tích Hợp AI  
> **Sprint:** Sprint 1  
> **Thành viên phụ trách:** Nguyễn Đức Mạnh  
> **Nhiệm vụ chính:** Hướng dẫn Đăng ký, Cấu hình biến môi trường API & Kiểm thử tính hợp lệ  
> **Trạng thái:** 🟢 **100% HOÀN THÀNH & ĐẠT KIỂM THỬ TỰ ĐỘNG (15/15 PASS)**

---

## 🏛️ CẤU TRÚC THƯ MỤC SPRINT 1

```
sprint 1 Nguyen Duc Manh/
├── 📄 README.md                        # Báo cáo kết quả kiểm thử Sprint 1
├── 📄 HUONG_DAN_CAU_HINH_API.md        # Hướng dẫn chi tiết đăng ký Google OAuth, VNPay, Gemini & OpenAI
└── 📄 test.js                          # Script kiểm thử tự động cấu hình API Sprint 1 (15/15 PASS)
```

---

## 📋 DANH MỤC CẤU HÌNH API ĐÃ THỰC HIỆN

1. **🔑 Google OAuth 2.0 (Đăng nhập Google):** Client ID, Client Secret, Callback Redirect URI.
2. **💳 VNPay Sandbox Gateway (Thanh toán ATM & QR):** Terminal ID `CD1`, Secret Key HMAC-SHA512 (Hex 128 chars), Thẻ Test NCB `9704198526191432198`.
3. **🤖 Google Gemini AI Engine (Tư vấn sản phẩm):** API Key, Model `gemini-1.5-flash`.
4. **🧠 OpenAI API (Dự phòng):** API Key, Model `gpt-4o-mini`.

---

## 🧪 HƯỚNG DẪN CHẠY KIỂM THỬ SPRINT 1

Mở Terminal tại thư mục này và chạy:
```bash
node test.js
```

### Kết quả kiểm thử thực nghiệm (15/15 PASS):
```text
===============================================================
📊 KẾT QUẢ KIỂM THỬ API CONFIGURATION SPRINT 1:
   - Tổng số kiểm thử: 15
   - Thành công: 15 PASS
   - Thất bại: 0 FAIL
===============================================================
🎉 TOÀN BỘ CẤU HÌNH API SPRINT 1 ĐÃ HOÀN THÀNH VÀ ĐẠT KIỂM THỬ!
```
