<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
require_once 'config/db_config.php';

$ma_tk = isset($_GET['id']) ? trim($_GET['id']) : '';

try {
    // 1. Lấy MaDinhDanh và thông tin cơ bản
    $stmt = $conn->prepare("SELECT MaTK, Email, Quyen, MaDinhDanh FROM NguoiDung WHERE MaTK = :id");
    $stmt->execute(['id' => $ma_tk]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$user) {
        echo json_encode(["status" => "error", "message" => "Không tìm thấy tài khoản"]);
        exit;
    }

    $data = $user;
    $role_id = (int)$user['Quyen'];
    $ma_dinh_danh = $user['MaDinhDanh'];
    $detailSql = "";

    // 2. Phân loại truy vấn chi tiết theo Quyền và MaDinhDanh
    if ($role_id === 1) { // Admin
        // Thường Admin có thể lấy luôn HoTen từ bảng NguoiDung hoặc bảng Admin riêng
        $data['HoTen'] = "Quản trị viên";
        $data['Nganh'] = "Hệ thống";
    } 
    else if ($role_id === 2) { // Sinh viên
        $detailSql = "SELECT HoTen, NgaySinh, GioiTinh, Nganh, Que as DiaChi, SDT_LienHe as SoDienThoai FROM SinhVien WHERE MaSV = :ma";
    } 
    else if ($role_id === 3) { // Giảng viên ĐH
        $detailSql = "SELECT HoTen, GioiTinh, Nganh, SDT_LienHe as SoDienThoai FROM GiangVienDH WHERE MaGVDH = :ma";
    } 
    else if ($role_id === 4) { // Giáo viên PT
        $detailSql = "SELECT HoTen, GioiTinh, Mon_PhuTrach as Nganh, SDT_LienHe as SoDienThoai FROM GiaoVienPT WHERE MaGVPT = :ma";
    }

    // 3. Thực thi lấy dữ liệu từ các bảng tham chiếu
    if ($detailSql !== "" && !empty($ma_dinh_danh)) {
        $stmtDetail = $conn->prepare($detailSql);
        $stmtDetail->execute(['ma' => $ma_dinh_danh]);
        $detail = $stmtDetail->fetch(PDO::FETCH_ASSOC);
        
        if ($detail) {
            $data = array_merge($data, $detail); // Gộp dữ liệu để React hiển thị
        }
    }

    echo json_encode(["status" => "success", "data" => $data]);

} catch (Exception $e) {
    echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}
?>