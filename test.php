<?php
// Nhúng file cấu hình bạn vừa tạo
require_once 'config/db_config.php';

if ($conn) {
    echo "<h1 style='color: green;'>Chúc mừng Nhóm 8! Kết nối Database thành công rực rỡ.</h1>";
    
    // Thử lấy danh sách bảng để chắc chắn
    $query = $conn->query("SHOW TABLES");
    $tables = $query->fetchAll(PDO::FETCH_COLUMN);
    
    if (empty($tables)) {
        echo "<p>Kết nối ổn, nhưng Database đang trống (chưa có bảng nào).</p>";
    } else {
        echo "<p>Danh sách các bảng hiện có: " . implode(", ", $tables) . "</p>";
    }
}
?>