# 🚀 Hướng Dẫn Đăng Ký & Cấu Hình API Dự Án Thương Mại Điện Tử

Tài liệu này hướng dẫn chi tiết quy trình đăng ký, lấy API Keys/Credentials thực tế và cung cấp bộ dữ liệu **Fake / Mock Data** để phục vụ lập trình, kiểm thử local.

---

## 1. 🔑 Google OAuth 2.0 (Đăng nhập tài khoản Google)

Dùng cho tính năng **Đăng nhập / Đăng ký nhanh bằng Google** trên Hệ thống Thương mại Điện tử.

### 📋 Bước đăng ký thực tế:
1. Truy cập [Google Cloud Console](https://console.cloud.google.com/).
2. Tạo một **Project mới** (ví dụ: `ECommerce-App`).
3. Vào **APIs & Services** ➔ **OAuth consent screen**:
   - Chọn **External** ➔ Nhập thông tin tên App, Email hỗ trợ.
4. Vào **APIs & Services** ➔ **Credentials** ➔ Bấm **Create Credentials** ➔ Chọn **OAuth client ID**:
   - **Application type**: Web application.
   - **Authorized JavaScript origins**: `http://localhost:3000`
   - **Authorized redirect URIs**: `http://localhost:3000/api/auth/callback/google` (hoặc URI dự án của bạn).
5. Copy **Client ID** và **Client Secret**.

### 🧪 Thông số Fake / Mock dùng cho Development:
```env
GOOGLE_CLIENT_ID="123456789012-abc123def456ghi789jkl012mno345pq.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="GOCSPX-mock_secret_key_1234567890abcdef"
GOOGLE_REDIRECT_URI="http://localhost:3000/api/auth/callback/google"
```

---

## 2. 💳 VNPay Sandbox (Cổng Thanh Toán Thử Nghiệm)

Dùng để thanh toán đơn hàng trực tuyến qua thẻ ATM, QR Code, Visa/MasterCard trong môi trường Sandbox (Không tốn tiền thật).

### 📋 Bước đăng ký thực tế:
1. Truy cập [VNPay Sandbox Merchant Registration](https://sandbox.vnpayment.vn/devreg/).
2. Điền thông tin đăng ký tài khoản thử nghiệm.
3. Kiểm tra Email từ VNPay để nhận:
   - **Terminal Id (vnp_TmnCode)**
   - **Secret Key (vnp_HashSecret)**
4. Đăng nhập [VNPay Merchant Portal Sandbox](https://sandbox.vnpayment.vn/merchantv2/) để theo dõi giao dịch test.

### 🧪 Thông số Fake / Mock & Thẻ Test:

#### Biến môi trường:
```env
VNP_TMN_CODE="DEMOVNP1"
VNP_HASH_SECRET="A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6"
VNP_URL="https://sandbox.vnpayment.vn/paymentv2/vpcpay.html"
VNP_RETURN_URL="http://localhost:3000/api/payment/vnpay-return"
VNP_API_URL="https://sandbox.vnpayment.vn/merchant_webapi/api/transaction"
```

#### Thông tin Thẻ Test VNPay Sandbox (Ngân hàng NCB):
- **Ngân hàng**: NCB
- **Số thẻ**: `9704198526191432198`
- **Tên chủ thẻ**: `NGUYEN VAN A`
- **Ngày phát hành**: `07/15`
- **Mã OTP**: `123456`

---

## 3. 🤖 Google Gemini API (LLM AI)

Dùng cho **Chatbot tư vấn sản phẩm, tìm kiếm thông minh, viết mô tả sản phẩm tự động**.

### 📋 Bước đăng ký thực tế:
1. Truy cập [Google AI Studio](https://aistudio.google.com/).
2. Đăng nhập bằng tài khoản Google.
3. Nhấp chọn **Get API key** ➔ **Create API key in new project**.
4. Copy đoạn mã API Key bắt đầu bằng `AIzaSy...`.

### 🧪 Thông số Fake / Mock dùng cho Development:
```env
GEMINI_API_KEY="AIzaSyMockGeminiKey_AbCdEfGhIjKlMnOpQrStU"
GEMINI_MODEL="gemini-1.5-flash"
```

---

## 4. 🧠 OpenAI API (ChatGPT / LLM AI)

Dùng làm engine AI dự phòng hoặc tích hợp tính năng phân tích hành vi khách hàng, trích xuất từ khóa.

### 📋 Bước đăng ký thực tế:
1. Truy cập [OpenAI Platform API Keys](https://platform.openai.com/api-keys).
2. Đăng nhập hoặc tạo tài khoản OpenAI.
3. Bấm **Create new secret key**.
4. Đặt tên Key và copy chuỗi key bắt đầu bằng `sk-proj-...`.

### 🧪 Thông số Fake / Mock dùng cho Development:
```env
OPENAI_API_KEY="sk-proj-mockOpenAIKey1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
OPENAI_MODEL="gpt-4o-mini"
```

---

## 🛠️ Hướng dẫn sử dụng file `.env`
1. Copy file `.env.example` thành `.env.local` hoặc `.env`:
   ```bash
   cp .env.example .env.local
   ```
2. Thay thế các giá trị Mock bằng API Keys thật khi triển khai thật (Production).
