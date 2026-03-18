<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Gọi đúng file config giống api_login.php
require_once 'config/db_config.php'; 

// Lấy maTK từ URL (React gửi lên qua params)
$maTK = $_GET['maTK'] ?? '';

if (empty($maTK)) {
    echo json_encode(["status" => "error", "message" => "Thiếu mã tài khoản"]);
    exit;
}

try {
    // SQL kết nối các bảng để lấy danh sách sinh viên thuộc đoàn của GV này
    $sql = "SELECT d.MaDoan, d.TenDoan, d.NamHoc, dv.TenDonVi, 
                   sv.MaSV, sv.HoTen AS HoTenSV, sv.Nganh
            FROM NguoiDung n
            JOIN GiangVienDH g ON n.MaDinhDanh = g.MaGVDH
            JOIN DoanThucTap d ON g.MaGVDH = d.MaGVDH
            JOIN DonViThucTap dv ON d.MaTruong = dv.MaDV
            JOIN ChiTietPhanCong ct ON d.MaDoan = ct.MaDoan
            JOIN SinhVien sv ON ct.MaSV = sv.MaSV
            WHERE n.MaTK = :maTK";

    $stmt = $conn->prepare($sql);
    $stmt->execute(['maTK' => $maTK]);
    
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Trả về dữ liệu (dù trống cũng trả về mảng rỗng để React không lỗi)
    echo json_encode([
        "status" => "success",
        "data" => $result
    ]);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Lỗi CSDL: " . $e->getMessage()]);
}
?>