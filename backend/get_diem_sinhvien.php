<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

// Các code kết nối DB giữ nguyên như tôi đã hướng dẫn ở trên (dùng "db" làm host)
$conn = mysqli_connect("db", "root", "password123", "quan_ly_thuc_tap");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}

// KẾT NỐI TRONG DOCKER
// "db" là tên service trong file docker-compose của bạn
$conn = mysqli_connect("db", "root", "password123", "quan_ly_thuc_tap");

if (!$conn) {
    echo json_encode(["status" => "error", "message" => "Kết nối DB thất bại"]);
    exit;
}

if (isset($_GET['maSV'])) {
    $maSV = mysqli_real_escape_string($conn, $_GET['maSV']);
    $sql = "SELECT TenFile, NgayNop, Loai, Diem, GhiChuGV, TrangThai 
            FROM BaoCaoGiaoAn 
            WHERE MaSV = '$maSV' 
            ORDER BY NgayNop DESC";

    $result = mysqli_query($conn, $sql);
    $data = [];

    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
    echo json_encode($data);
}
mysqli_close($conn);
?>