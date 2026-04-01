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
        $now = date('Y-m-d H:i:s');
        $maSV = $data['maSV'];
        $nvs = [1 => $data['nv1'], 2 => $data['nv2'], 3 => $data['nv3']];
        $ghiChu = $data['ghiChu'] ?? '';

        // 1. Lưu vào bảng NguyenVong
        $sqlNV = "REPLACE INTO NguyenVong (MaSV, NV1, NV2, NV3, GhiChu, ThoiGian) VALUES (?, ?, ?, ?, ?, ?)";
        $stmtNV = $conn->prepare($sqlNV);
        $stmtNV->execute([$maSV, $nvs[1], $nvs[2], $nvs[3], $ghiChu, $now]);

        // 2. Xóa kết quả cũ để tính toán lại từ đầu (đảm bảo tính đúng đắn của chỉ tiêu)
        $conn->prepare("DELETE FROM KetQua WHERE MaSV = ?")->execute([$maSV]);

        $finalSchool = "Hết chỉ tiêu (Vui lòng liên hệ khoa)";
        $finalNV = 0;
        $isMatched = false;

        // 3. Xét từng nguyện vọng từ 1 đến 3
        foreach ($nvs as $thuTu => $tenDV) {
            if (empty($tenDV)) continue;

            // Truy vấn kiểm tra chỉ tiêu và số lượng đã tuyển thực tế
            $stmtCheck = $conn->prepare("
                SELECT 
                    (SELECT ChiTieu FROM DonViThucTap WHERE TenDonVi = ?) as ChiTieu,
                    (SELECT COUNT(*) FROM KetQua WHERE TenDonVi = ?) as DaTuyen
            ");
            $stmtCheck->execute([$tenDV, $tenDV]);
            $res = $stmtCheck->fetch(PDO::FETCH_ASSOC);

            // Nếu trường còn chỗ (Bạn thứ 9 sẽ tự động bị đẩy sang NV sau nếu trường chỉ có 8 chỗ)
            if ($res && $res['ChiTieu'] !== null && $res['DaTuyen'] < $res['ChiTieu']) {
                $finalSchool = $tenDV;
                $finalNV = $thuTu;
                $isMatched = true;
                break; 
            }
        }

        // 4. LƯU TỰ ĐỘNG VÀO BẢNG KETQUA
        $sqlKQ = "INSERT INTO KetQua (MaSV, TenDonVi, ThuTuNV, ThoiGianXet) VALUES (?, ?, ?, ?)";
        $stmtKQ = $conn->prepare($sqlKQ);
        $stmtKQ->execute([$maSV, $finalSchool, $finalNV, $now]);

        echo json_encode([
            "status" => "success", 
            "message" => "Đăng ký thành công!",
            "result" => $finalSchool
        ]);

    } catch (PDOException $e) {
        echo json_encode(["status" => "error", "message" => "Lỗi DB: " . $e->getMessage()]);
    }
}
?>