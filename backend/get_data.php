<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "", "quan_ly_thuc_tap");
mysqli_set_charset($conn, "utf8");

// Lấy id từ thanh địa chỉ (React gửi lên)
$id = $_GET['id']; 

// Truy vấn lấy tin dựa trên slug (ví dụ: huong-dan-nop-ho-so)
$sql = "SELECT loai_tin as category, tieu_de as title, ngay_dang as date, noi_dung as content 
        FROM tin_tuc WHERE slug = '$id'";

$result = $conn->query($sql);

if ($row = $result->fetch_assoc()) {
    echo json_encode($row);
} else {
    echo json_encode(null);
}
?>