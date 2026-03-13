<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$conn = mysqli_connect("db", "root", "password123", "quan_ly_thuc_tap");

if (isset($_GET['maSV'])) {
    $maSV = mysqli_real_escape_string($conn, $_GET['maSV']);

    // XÓA "LIMIT 1" để lấy hết các file của sinh viên này
    $sql = "SELECT TenFile, Diem, GhiChuGV, Loai, NgayNop 
            FROM BaoCaoGiaoAn 
            WHERE MaSV = '$maSV' 
            ORDER BY NgayNop DESC";

    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        $data = [];
        // Dùng vòng lặp while để gom tất cả các dòng vào mảng $data
        while ($row = mysqli_fetch_assoc($result)) {
            $data[] = $row;
        }
        echo json_encode($data); // Trả về dạng mảng [{}, {}, {}]
    } else {
        echo json_encode(["error" => "Chưa nộp bài"]);
    }
}
?>