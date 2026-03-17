<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
require_once 'db.php';

$id = $_GET['id'] ?? '';

if ($id) {
    $sql = "DELETE FROM NguoiDung WHERE MaTK = '$id'";
    if (mysqli_query($conn, $sql)) {
        echo json_encode(["status" => "success"]);
    } else {
        echo json_encode(["status" => "error", "message" => mysqli_error($conn)]);
    }
}
mysqli_close($conn);
?>