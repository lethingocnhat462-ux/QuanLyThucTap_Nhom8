<?php
// db.php
$host = "db"; // Tên dịch vụ đặt trong docker-compose.yml
$user = "root";
$pass = "password123"; // Khớp với MYSQL_ROOT_PASSWORD ở trên
$dbname = "quan_ly_thuc_tap";

$conn = mysqli_connect($host, $user, $pass, $dbname);
mysqli_set_charset($conn, 'utf8');

if (!$conn) {
    die("Kết nối thất bại: " . mysqli_connect_error());
}
?>