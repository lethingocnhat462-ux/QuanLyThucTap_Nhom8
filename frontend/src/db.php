<?php
// db.php
$host = "db"; // Tên dịch vụ đặt trong docker-compose.yml
$user = "root";
$pass = "rootpassword"; // Khớp với MYSQL_ROOT_PASSWORD ở trên
$dbname = "QuanLyThucTap";

$conn = mysqli_connect($host, $user, $pass, $dbname);
mysqli_set_charset($conn, 'utf8');

if (!$conn) {
    die("Kết nối thất bại: " . mysqli_connect_error());
}
?>