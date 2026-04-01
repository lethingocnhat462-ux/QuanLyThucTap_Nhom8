<?php
include 'db.php';
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");

try {
    // 1. ĐỒNG BỘ COLLATION (Sửa lỗi #1267 bạn gặp trong phpMyAdmin)
    // Việc này giúp lệnh so sánh MaSV và TenDonVi giữa các bảng chạy mượt mà
    $conn->query("ALTER TABLE NguyenVong CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
    $conn->query("ALTER TABLE KetQua CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
    $conn->query("ALTER TABLE DonViThucTap CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");

    // 2. LÀM SẠCH BẢNG KẾT QUẢ CŨ
    // Xóa đi để tính toán lại từ đầu theo đúng chỉ tiêu mới nhất
    $conn->query("DELETE FROM KetQua");

    // 3. ĐỌC CHỈ TIÊU TỪ DATABASE
    $donViData = [];
    $dvRes = $conn->query("SELECT TenDonVi, ChiTieu FROM DonViThucTap");
    while ($row = $dvRes->fetch_assoc()) {
        $donViData[$row['TenDonVi']] = [
            'ChiTieu' => (int)$row['ChiTieu'],
            'DaTuyen' => 0
        ];
    }

    // 4. LẤY DANH SÁCH SINH VIÊN (Ưu tiên người đăng ký sớm)
    $sql = "SELECT * FROM NguyenVong ORDER BY ThoiGian ASC";
    $result = $conn->query($sql);
    
    $countSuccess = 0;
    $countFailed = 0;

    while ($reg = $result->fetch_assoc()) {
        $maSV = $reg['MaSV'];
        $dsNV = [
            1 => $reg['NV1'],
            2 => $reg['NV2'],
            3 => $reg['NV3']
        ];

        $isMatched = false;

        // XÉT LẦN LƯỢT TỪ NV1 -> NV2 -> NV3
        foreach ($dsNV as $thuTu => $tenDV) {
            if (empty($tenDV)) continue;

            // Kiểm tra: Trường này có tồn tại và còn chỗ (ChiTieu > DaTuyen) không?
            if (isset($donViData[$tenDV]) && $donViData[$tenDV]['DaTuyen'] < $donViData[$tenDV]['ChiTieu']) {
                
                // GHI NHẬN TRÚNG TUYỂN
                $stmt = $conn->prepare("INSERT INTO KetQua (MaSV, TenDonVi, ThuTuNV, ThoiGianXet) VALUES (?, ?, ?, NOW())");
                $stmt->bind_param("ssi", $maSV, $tenDV, $thuTu);
                
                if ($stmt->execute()) {
                    $donViData[$tenDV]['DaTuyen']++; // Tăng số lượng đã nhận của trường lên 1
                    $countSuccess++;
                    $isMatched = true;
                }
                break; // Dừng xét các nguyện vọng sau của sinh viên này
            }
        }

        // TRƯỜNG HỢP XẤU: SINH VIÊN TRƯỢT CẢ 3 NV (Ví dụ: bạn thứ 9 đăng ký vào chỗ chỉ có 8 chỉ tiêu)
        if (!$isMatched) {
            $msgFail = "Hết chỉ tiêu (Vui lòng liên hệ khoa)";
            $zero = 0;
            $stmt = $conn->prepare("INSERT INTO KetQua (MaSV, TenDonVi, ThuTuNV, ThoiGianXet) VALUES (?, ?, ?, NOW())");
            $stmt->bind_param("ssi", $maSV, $msgFail, $zero);
            $stmt->execute();
            $countFailed++;
        }
    }

    echo json_encode([
        "status" => "success", 
        "message" => "Đã xét duyệt xong $countSuccess sinh viên. Có $countFailed sinh viên hết chỉ tiêu."
    ]);

} catch (Exception $e) {
    echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}
?>