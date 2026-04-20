<?php
// Cho phép React (thường chạy ở port khác) truy cập được vào API này
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Kết nối DB (Host là "db" vì em dùng Docker service name)
$conn = new mysqli("db", "root", "password123", "quan_ly_thuc_tap");

if ($conn->connect_error) {
    die(json_encode(["error" => "Kết nối thất bại"]));
}

$sql = "SELECT * FROM DonViThucTap";
$result = $conn->query($sql);

$data = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        // Tự động tạo link ảnh đầy đủ cho Frontend
        // Nếu cột HinhAnh trống, có thể để một ảnh mặc định
        $imageName = !empty($row['HinhAnh']) ? $row['HinhAnh'] : 'default.jpg';
        $row['img_url'] = "http://localhost/uploads/" . $imageName;
        
        $data[] = $row;
    }
}

echo json_encode($data);
$conn->close();
?>