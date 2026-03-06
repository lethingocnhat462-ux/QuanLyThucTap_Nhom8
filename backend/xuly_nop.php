<?php
// Kết nối tới container 'db' (Docker)
$conn = mysqli_connect("db", "root", "password123", "quan_ly_thuc_tap");

if (isset($_POST['btnNop'])) {
    // 1. Lấy dữ liệu từ form (Sửa lỗi Undefined variable $ma_sv)
    $ma_sv = $_POST['ma_sv']; 
    $loai = $_POST['loai'];
    $file = $_FILES['file_tai_lieu'];

    // 2. Tạo mã tài liệu tự động (Vì MaTaiLieu của bạn không tự tăng)
    $ma_tai_lieu = "TL" . str_pad(rand(0, 999), 3, '0', STR_PAD_LEFT);

    // 3. Xử lý lưu file
    if (!file_exists('uploads')) {
        mkdir('uploads', 0777, true);
    }
    $fileName = time() . "_" . $file['name'];
    $target = "uploads/" . $fileName;

    if (move_uploaded_file($file['tmp_name'], $target)) {
        // 4. SQL: Khớp chính xác với bảng BaoCaoGiaoAn trong ảnh của bạn
        // Cột: MaTaiLieu, MaSV, TenFile, NgayNop, Loai
        $sql = "INSERT INTO BaoCaoGiaoAn (MaTaiLieu, MaSV, TenFile, NgayNop, Loai) 
                VALUES ('$ma_tai_lieu', '$ma_sv', '$fileName', NOW(), '$loai')";
        
        if (mysqli_query($conn, $sql)) {
            echo "<script>alert('Nộp thành công!'); window.location.href='nop_bao_cao.php';</script>";
        } else {
            echo "Lỗi SQL: " . mysqli_error($conn);
        }
    } else {
        echo "Lỗi không thể tải file lên server!";
    }
}
?>