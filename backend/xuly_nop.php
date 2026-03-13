<?php
$conn = mysqli_connect("db", "root", "password123", "quan_ly_thuc_tap");

function unsignedString($str) {
    $str = preg_replace("/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/", 'a', $str);
    $str = preg_replace("/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/", 'e', $str);
    $str = preg_replace("/(ì|í|ị|ỉ|ĩ)/", 'i', $str);
    $str = preg_replace("/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/", 'o', $str);
    $str = preg_replace("/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/", 'u', $str);
    $str = preg_replace("/(ỳ|ý|ỵ|ỷ|ỹ)/", 'y', $str);
    $str = preg_replace("/(đ)/", 'd', $str);
    $str = preg_replace("/[^A-Za-z0-9\.]/", '_', $str);
    return $str;
}

if (isset($_POST['btnNop'])) {
    $ma_sv = mysqli_real_escape_string($conn, $_POST['ma_sv']);
    $loai = mysqli_real_escape_string($conn, $_POST['loai']);
    $files = $_FILES['file_tai_lieu'];

    // 1. Kiểm tra số lượng file (Server-side)
    if (count($files['name']) > 3) {
        echo "<script>alert('Lỗi: Bạn nộp quá 3 file!'); window.history.back();</script>";
        exit;
    }

    $success_count = 0;
    $uploadDir = "uploads/";

    // 2. Tạo thư mục nếu chưa có
    if (!is_dir($uploadDir)) { mkdir($uploadDir, 0777, true); }

    // 3. Vòng lặp xử lý từng file
    foreach ($files['name'] as $key => $val) {
        if ($files['error'][$key] == 0) {
            $nameClean = unsignedString($files['name'][$key]);
            // Tên file: MSSV + Timestamp + Key (0,1,2) + Tên sạch
            $finalName = $ma_sv . "_" . time() . "_" . $key . "_" . $nameClean;
            $target = $uploadDir . $finalName;

            if (move_uploaded_file($files['tmp_name'][$key], $target)) {
                $ma_tai_lieu = "TL" . time() . $key . rand(10, 99);
                $sql = "INSERT INTO BaoCaoGiaoAn (MaTaiLieu, MaSV, TenFile, NgayNop, Loai, TrangThai) 
                        VALUES ('$ma_tai_lieu', '$ma_sv', '$finalName', NOW(), '$loai', 0)";
                if (mysqli_query($conn, $sql)) { $success_count++; }
            }
        }
    }

    if ($success_count > 0) {
        echo "<script>alert('Đã nộp thành công $success_count tài liệu!'); window.location.href='nop_bao_cao.php';</script>";
    } else {
        echo "<script>alert('Lỗi: Không thể lưu file. Hãy kiểm tra quyền uploads trong Docker!'); window.history.back();</script>";
    }
}
?>