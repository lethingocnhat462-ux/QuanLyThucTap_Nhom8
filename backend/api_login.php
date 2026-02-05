<?php
// Chỉ cần một bộ header chuẩn là đủ
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// Xử lý yêu cầu OPTIONS từ trình duyệt (CORS Preflight)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once 'config/db_config.php';

// Nhận dữ liệu từ Frontend (JSON)
$data = json_decode(file_get_contents("php://input"), true);

// SỬA TẠI ĐÂY: Dùng 'mssv' thay vì 'username' để khớp với React của bạn
$user_input = $data['mssv'] ?? ''; 
$pass_input = $data['password'] ?? '';

if (!empty($user_input) && !empty($pass_input)) {
    try {
        $sql = "SELECT MaTK, TenDangNhap, MatKhau, Quyen, Email FROM NguoiDung WHERE TenDangNhap = :user";
        $stmt = $conn->prepare($sql);
        $stmt->execute(['user' => $user_input]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($row && $pass_input == $row['MatKhau']) {
            echo json_encode([
                "status" => "success", // React sẽ kiểm tra result.status === "success"
                "message" => "Đăng nhập thành công",
                "user" => [
                    "MaTK" => $row['MaTK'],
                    "Quyen" => $row['Quyen'],
                    "Email" => $row['Email']
                ]
            ]);
        } else {
            http_response_code(401);
            echo json_encode(["status" => "error", "message" => "Tài khoản hoặc mật khẩu không chính xác"]);
        }
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Lỗi CSDL: " . $e->getMessage()]);
    }
} else {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Vui lòng nhập đầy đủ thông tin"]);
}