<?php
// backend/config/db_config.php

$host = 'db'; // Tên service trong docker-compose
$db   = 'quan_ly_thuc_tap'; // Tên database theo ảnh bạn gửi
$user = 'root';
$pass = 'password123';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $conn = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    header('Content-Type: application/json');
    echo json_encode([
        "status" => "error",
        "message" => "Lỗi kết nối CSDL: " . $e->getMessage()
    ]);
    exit;
}
?>