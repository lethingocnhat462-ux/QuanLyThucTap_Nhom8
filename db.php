<?php
$host = "db"; 
$user = "root";
$pass = "root"; 
$dbname = "quan_ly_thuc_tap"; 

$conn = mysqli_connect($host, $user, $pass, $dbname);

if (!$conn) {
    die("Kết nối thất bại: " . mysqli_connect_error());
}
?>