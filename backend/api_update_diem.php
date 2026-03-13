<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"));
$conn = mysqli_connect("db", "root", "password123", "quan_ly_thuc_tap");

if ($data && isset($data->maSV) && isset($data->tenFile)) {
    $maSV = mysqli_real_escape_string($conn, $data->maSV);
    $tenFile = mysqli_real_escape_string($conn, $data->tenFile); // Lấy tên file gửi từ React
    $diem = mysqli_real_escape_string($conn, $data->diem);
    $ghiChu = mysqli_real_escape_string($conn, $data->ghiChu);

    // Cập nhật dựa trên cả Mã SV và Tên File cụ thể
    $sql = "UPDATE BaoCaoGiaoAn 
            SET Diem = '$diem', GhiChuGV = '$ghiChu', TrangThai = 1 
            WHERE MaSV = '$maSV' AND TenFile = '$tenFile'";

    if (mysqli_query($conn, $sql)) {
        echo json_encode(["success" => true, "message" => "Cập nhật file $tenFile thành công"]);
    } else {
        echo json_encode(["success" => false, "message" => mysqli_error($conn)]);
    }
}
?>