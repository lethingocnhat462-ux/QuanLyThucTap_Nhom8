<?php
$host = 'db'; // Tên dịch vụ trong docker-compose
$dbname = 'db_thuctap'; // Phải khớp với MYSQL_DATABASE trong docker
$username = 'root';
$password = 'password123'; // Phải khớp với MYSQL_ROOT_PASSWORD

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Lỗi kết nối: " . $e->getMessage());
}
?>