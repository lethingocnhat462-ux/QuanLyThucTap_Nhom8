<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once 'config/db_config.php';

$data = json_decode(file_get_contents("php://input"), true);

// CẬP NHẬT: Nhận 'identity' từ React (bao gồm cả Mã số hoặc Email)
$user_input = $data['identity'] ?? ''; 
$pass_input = $data['password'] ?? '';

if (!empty($user_input) && !empty($pass_input)) {
    try {
        // CẬP NHẬT SQL: Tìm kiếm ở cả cột TenDangNhap HOẶC cột Email
// SQL có 2 vị trí cần điền dữ liệu là :user1 và :user2
$sql = "SELECT MaTK, TenDangNhap, MatKhau, Quyen, Email 
        FROM NguoiDung 
        WHERE TenDangNhap = :user1 OR Email = :user2 
        LIMIT 1";

$stmt = $conn->prepare($sql);

// Truyền cùng một giá trị $user_input vào cả 2 tham số
$stmt->execute([
    'user1' => $user_input,
    'user2' => $user_input
]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        // Kiểm tra mật khẩu (Hiện tại em đang so sánh thô)
        if ($row && $pass_input == $row['MatKhau']) {
            echo json_encode([
                "status" => "success",
                "message" => "Đăng nhập thành công",
                "user" => [
                    "MaTK" => $row['MaTK'],
                    "Ten" => $row['TenDangNhap'],
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