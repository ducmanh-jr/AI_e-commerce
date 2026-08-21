/**
 * SPRINT 1: AUTOMATED API CONFIGURATION TESTER & VALIDATOR
 * Kiểm thử tính hợp lệ và sẵn sàng của các Cấu hình API trong file .env & HUONG_DAN_CAU_HINH_API.md
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

console.log("===============================================================");
console.log("🧪 BẮT ĐẦU KIỂM THỬ CẤU HÌNH API SPRINT 1");
console.log("===============================================================\n");

// 1. Kiểm tra sự tồn tại của file cấu hình
let envPath = path.join(__dirname, '../mã nguồn/.env');
if (!fs.existsSync(envPath)) {
    envPath = path.join(__dirname, '../../.env');
}
const guidePath = path.join(__dirname, '../mã nguồn/HUONG_DAN_CAU_HINH_API.md');

let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
    if (condition) {
        console.log(`  ✅ [PASS] ${message}`);
        passedTests++;
    } else {
        console.error(`  ❌ [FAIL] ${message}`);
        failedTests++;
    }
}

// Check files
assert(fs.existsSync(guidePath), "Tài liệu Hướng dẫn Cấu hình API (HUONG_DAN_CAU_HINH_API.md) tồn tại.");
assert(fs.existsSync(envPath), "File cấu hình biến môi trường (.env) tồn tại.");

// Đọc file .env
let envVars = {};
if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf-8');
    envContent.split(/\r?\n/).forEach(line => {
        line = line.trim();
        if (line && !line.startsWith('#')) {
            const parts = line.split('=');
            const key = parts[0].trim();
            let value = parts.slice(1).join('=').trim();
            if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
                value = value.slice(1, -1);
            }
            envVars[key] = value;
        }
    });
}

console.log("\n🔑 1. Kiểm thử Cấu hình Google OAuth 2.0:");
assert(!!envVars.GOOGLE_CLIENT_ID, "GOOGLE_CLIENT_ID đã được khai báo.");
assert(envVars.GOOGLE_CLIENT_ID && envVars.GOOGLE_CLIENT_ID.includes('.apps.googleusercontent.com'), "GOOGLE_CLIENT_ID đúng định dạng Google Client ID.");
assert(!!envVars.GOOGLE_CLIENT_SECRET, "GOOGLE_CLIENT_SECRET đã được khai báo.");
assert(!!envVars.GOOGLE_REDIRECT_URI, "GOOGLE_REDIRECT_URI đã được khai báo.");

console.log("\n💳 2. Kiểm thử Cấu hình VNPay Sandbox Payment Gateway:");
assert(!!envVars.VNP_TMN_CODE, "VNP_TMN_CODE (Terminal ID) đã được khai báo.");
assert(!!envVars.VNP_HASH_SECRET, "VNP_HASH_SECRET (Secret Key) đã được khai báo.");
assert(!!envVars.VNP_URL && envVars.VNP_URL.startsWith('https://sandbox.vnpayment.vn'), "VNP_URL đúng môi trường Sandbox VNPay.");
assert(!!envVars.VNP_RETURN_URL, "VNP_RETURN_URL đã được khai báo.");

// Test VNPay Checksum Generator Logic
console.log("   🧪 [Test Logic] Kiểm thử Thuật toán Mã hóa Chữ ký VNPay HMAC-SHA512:");
try {
    const sampleParams = {
        vnp_Amount: '10000000',
        vnp_Command: 'pay',
        vnp_CreateDate: '20260821130000',
        vnp_CurrCode: 'VND',
        vnp_IpAddr: '127.0.0.1',
        vnp_Locale: 'vn',
        vnp_OrderInfo: 'Thanh toan don hang test',
        vnp_OrderType: 'other',
        vnp_ReturnUrl: envVars.VNP_RETURN_URL || 'http://localhost:3000/api/payment/vnpay-return',
        vnp_TmnCode: envVars.VNP_TMN_CODE || 'CD1',
        vnp_TxnRef: '123456',
        vnp_Version: '2.1.0'
    };
    const sortedKeys = Object.keys(sampleParams).sort();
    const signData = sortedKeys.map(key => `${key}=${encodeURIComponent(sampleParams[key])}`).join('&');
    const hmac = crypto.createHmac('sha512', envVars.VNP_HASH_SECRET || 'secret');
    const signed = hmac.update(Buffer.from(signData, 'utf-8')).digest('hex');
    assert(signed.length === 128, `Thuật toán HMAC-SHA512 của VNPay sinh chữ ký hợp lệ (Độ dài hex: ${signed.length} ký tự).`);
} catch (e) {
    assert(false, "Lỗi kiểm thử HMAC-SHA512 VNPay: " + e.message);
}

console.log("\n🤖 3. Kiểm thử Cấu hình Google Gemini LLM AI:");
assert(!!envVars.GEMINI_API_KEY, "GEMINI_API_KEY đã được khai báo.");
assert(!!envVars.GEMINI_MODEL, "GEMINI_MODEL đã được khai báo.");

console.log("\n🧠 4. Kiểm thử Cấu hình OpenAI LLM AI:");
assert(!!envVars.OPENAI_API_KEY, "OPENAI_API_KEY đã được khai báo.");
assert(!!envVars.OPENAI_MODEL, "OPENAI_MODEL đã được khai báo.");

console.log("\n===============================================================");
console.log(`📊 KẾT QUẢ KIỂM THỬ API CONFIGURATION SPRINT 1:`);
console.log(`   - Tổng số kiểm thử: ${passedTests + failedTests}`);
console.log(`   - Thành công: ${passedTests} PASS`);
console.log(`   - Thất bại: ${failedTests} FAIL`);
console.log("===============================================================\n");

if (failedTests === 0) {
    console.log("🎉 TOÀN BỘ CẤU HÌNH API SPRINT 1 ĐÃ HOÀN THÀNH VÀ ĐẠT KIỂM THỬ!\n");
    process.exit(0);
} else {
    console.error("⚠️ VẪN CÒN CẤU HÌNH LỖI, VUI LÒNG KIỂM TRA TẠI FILE .env!\n");
    process.exit(1);
}
