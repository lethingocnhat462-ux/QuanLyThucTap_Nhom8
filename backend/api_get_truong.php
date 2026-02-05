<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

require_once 'config/db_config.php'; 

try {
    $conn->exec("set names utf8mb4");
    
    // ĐÃ SỬA: Lấy MaDV thay vì MaDonVi
    $query = "SELECT MaDV, TenDonVi FROM DonViThucTap ORDER BY TenDonVi ASC";
    $stmt = $conn->prepare($query);
    $stmt->execute();
    
    $truongs = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($truongs ?: []);

} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>