<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("db", "root", "password123", "quan_ly_thuc_tap");

if ($conn->connect_error) {
    die(json_encode(["error" => "Kết nối thất bại"]));
}

// Sắp xếp theo thứ tự hiển thị em đã đặt trong DB
$sql = "SELECT * FROM ThanhVien ORDER BY thu_tu_hien_thi ASC";
$result = $conn->query($sql);

$members = [];
while($row = $result->fetch_assoc()) {
    // Tạo link ảnh đầy đủ
    $row['full_avatar_url'] = "http://localhost/uploads/" . $row['avatar_url'];
    $members[] = $row;
}

echo json_encode($members);
$conn->close();
?>