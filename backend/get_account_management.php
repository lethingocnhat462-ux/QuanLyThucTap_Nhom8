<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// 1. Nhúng file kết nối
require_once 'db.php'; 

// 2. Truy vấn thống kê
$query_stats = "SELECT 
                    SUM(CASE WHEN Quyen = 1 THEN 1 ELSE 0 END) as adminCount,
                    SUM(CASE WHEN Quyen = 2 THEN 1 ELSE 0 END) as studentCount,
                    SUM(CASE WHEN Quyen = 3 THEN 1 ELSE 0 END) as teacherCount,
                    SUM(CASE WHEN Quyen = 4 THEN 1 ELSE 0 END) as unitCount
                FROM NguoiDung";

$result_stats = mysqli_query($conn, $query_stats);
if (!$result_stats) {
    die(json_encode(["status" => "error", "message" => mysqli_error($conn)]));
}
$stats = mysqli_fetch_assoc($result_stats);

// 3. Truy vấn danh sách tài khoản - CÔ ĐÃ THÊM MaDinhDanh VÀO ĐÂY
$query_list = "SELECT MaTK, TenDangNhap, MaDinhDanh, Email, Quyen FROM NguoiDung ORDER BY Quyen ASC";
$result_list = mysqli_query($conn, $query_list);

$accounts = [];
if ($result_list) {
    while($row = mysqli_fetch_assoc($result_list)) {
        $accounts[] = $row;
    }
}

// 4. Trả kết quả JSON
echo json_encode([
    "status" => "success",
    "stats" => [
        "admin" => (int)($stats['adminCount'] ?? 0),
        "student" => (int)($stats['studentCount'] ?? 0),
        "teacher" => (int)($stats['teacherCount'] ?? 0),
        "unit" => (int)($stats['unitCount'] ?? 0)
    ],
    "accounts" => $accounts
]);

mysqli_close($conn);
?>