<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once 'db.php';

$input = file_get_contents("php://input");
$data = json_decode($input, true);

// KIỂM TRA: Đã thêm maDinhDanh vào điều kiện empty
if (!empty($data['tenDangNhap']) && !empty($data['email']) && !empty($data['maDinhDanh'])) {
    $ten = mysqli_real_escape_string($conn, $data['tenDangNhap']);
    $email = mysqli_real_escape_string($conn, $data['email']);
    $maDinhDanh = mysqli_real_escape_string($conn, $data['maDinhDanh']); // LẤY MÃ ĐỊNH DANH TỪ REACT
    $quyen = isset($data['quyen']) ? (int)$data['quyen'] : 2; 
    
    // 1. Tạo mã tài khoản tự động
    $maTK = "TK" . rand(1000, 9999); 
    
    // 2. Tạo mật khẩu mặc định
    $matKhauMacDinh = '123456'; 

    // 3. CẬP NHẬT CÂU LỆNH SQL: Đã thêm MaDinhDanh vào đây
    $sql = "INSERT INTO NguoiDung (MaTK, TenDangNhap, MaDinhDanh, Email, Quyen, MatKhau) 
            VALUES ('$maTK', '$ten', '$maDinhDanh', '$email', $quyen, '$matKhauMacDinh')";

    if (mysqli_query($conn, $sql)) {
        echo json_encode(["status" => "success", "message" => "Thêm thành công tài khoản $maDinhDanh!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Lỗi SQL: " . mysqli_error($conn)]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Vui lòng nhập đầy đủ Tên, Email và Mã định danh!"]);
}
mysqli_close($conn);
?>