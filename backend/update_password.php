<?php
header("Access-Control-Allow-Origin: http://localhost:3000"); // Cho phép React gọi sang
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') { exit; } // Xử lý kiểm tra luồng

require_once 'db.php'; // Nhúng file kết nối

// 3. Đọc dữ liệu từ React gửi sang (dạng JSON)
$input = file_get_contents("php://input");
$data = json_decode($input, true);

if ($_SERVER['REQUEST_METHOD'] == 'POST' && $data) {
    $maTK = $data['userId'];
    $oldPass = $data['oldPassword'];
    $newPass = $data['newPassword'];

    // Kiểm tra xem có đủ dữ liệu không
    if (empty($maTK) || empty($oldPass) || empty($newPass)) {
        echo json_encode(["success" => false, "message" => "Vui lòng nhập đầy đủ thông tin!"]);
        exit;
    }

    // 4. Truy vấn kiểm tra mật khẩu cũ
    // Cô dùng MaTK vì bảng của em có cột này
    $sql = "SELECT MatKhau FROM NguoiDung WHERE MaTK = '$maTK'";
    $result = mysqli_query($conn, $sql);
    $user = mysqli_fetch_assoc($result);

    if ($user && $user['MatKhau'] === $oldPass) {
        // 5. Cập nhật mật khẩu mới
        $updateSql = "UPDATE NguoiDung SET MatKhau = '$newPass' WHERE MaTK = '$maTK'";
        if (mysqli_query($conn, $updateSql)) {
            echo json_encode(["success" => true, "message" => "Đổi mật khẩu thành công!"]);
        } else {
            echo json_encode(["success" => false, "message" => "Lỗi khi cập nhật vào CSDL!"]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "Mật khẩu cũ không chính xác!"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Yêu cầu không hợp lệ!"]);
}

mysqli_close($conn);
?>