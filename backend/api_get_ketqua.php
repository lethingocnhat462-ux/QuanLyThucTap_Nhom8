<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

include 'db.php';

$maSV = $_GET['MaSV'] ?? '';

if (empty($maSV)) {
    echo json_encode(["status" => "error", "message" => "Thiếu mã sinh viên"]);
    exit;
}

$stmt = $conn->prepare("SELECT * FROM KetQua WHERE MaSV = ?");
$stmt->bind_param("s", $maSV);
$stmt->execute();
$result = $stmt->get_result()->fetch_assoc();

if ($result) {
    echo json_encode(["status" => "success", "data" => $result]);
} else {
    echo json_encode(["status" => "fail", "message" => "Rất tiếc, bạn không trúng tuyển"]);
}
?>