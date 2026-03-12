<?php
// Cho phép React (port 3001) truy cập vào
header("Access-Control-Allow-Origin: http://localhost:3001");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

// Nếu là yêu cầu OPTIONS (pre-flight), dừng lại luôn
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit;
}

include "db.php";

$maGV = isset($_GET['maGV']) ? mysqli_real_escape_string($conn, $_GET['maGV']) : '';

if (empty($maGV)) {
    echo json_encode([]);
    exit();
}

$sql = "SELECT sv.MaSV, sv.HoTen, sv.Nganh, sv.Que, sv.SDT_LienHe 
        FROM SinhVien sv
        JOIN ChiTietPhanCong ct ON sv.MaSV = ct.MaSV
        WHERE ct.MaGVPT = '$maGV'"; 

$result = mysqli_query($conn, $sql);

$students = []; // Khởi tạo mảng rỗng trước

if ($result) {
    while($row = mysqli_fetch_assoc($result)) {
        $students[] = $row;
    }
}

// CHỈ echo một lần duy nhất ở cuối file
echo json_encode($students, JSON_UNESCAPED_UNICODE);
exit(); // Ngăn mọi mã thừa phía sau chạy
?>