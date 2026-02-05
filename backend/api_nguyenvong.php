<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

date_default_timezone_set('Asia/Ho_Chi_Minh');

require_once 'config/db_config.php'; 

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { exit; }

$data = json_decode(file_get_contents("php://input"), true);

if ($data) {
    try {
        $now = date('Y-m-d H:i:s'); // Lấy thời gian thực

        // Câu lệnh SQL lưu vào bảng NguyenVong (viết đúng như ảnh phpMyAdmin)
        $sql = "INSERT INTO NguyenVong (MaSV, NV1, NV2, NV3, GhiChu, ThoiGian) VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->execute([
            $data['maSV'], 
            $data['nv1'], 
            $data['nv2'], 
            $data['nv3'], 
            $data['ghiChu'],
            $now
        ]);

        echo json_encode([
            "status" => "success", 
            "message" => "Đăng ký thành công!",
            "time" => $now
        ]);
    } catch (PDOException $e) {
        echo json_encode(["status" => "error", "message" => "Lỗi DB: " . $e->getMessage()]);
    }
}
?>