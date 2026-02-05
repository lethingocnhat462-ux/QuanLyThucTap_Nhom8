<?php
// backend/config/db_config.php

$host = 'quanlythuctap_db';           // Tên service database trong docker-compose
$db   = 'quan_ly_thuc_tap';   // Tên database bạn đã khai báo
$user = 'root';         // User mặc định
$pass = 'password123';  // Mật khẩu khớp với docker-compose
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    // Biến $conn này sẽ được file api_login.php sử dụng
    $conn = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    // Trả về JSON để React không bị lỗi "Unexpected token <"
    header('Content-Type: application/json');
    echo json_encode([
        "status" => "error",
        "message" => "Lỗi kết nối CSDL: " . $e->getMessage()
    ]);
    exit;
}