<?php
// Kết nối tới container 'db'
$conn = mysqli_connect("db", "root", "password123", "quan_ly_thuc_tap");

if (!$conn) {
    die("Lỗi kết nối database: " . mysqli_connect_error());
}

if (isset($_POST['btnLuu'])) {
    // Biến này bây giờ có thể là Mã số HOẶC Email
    $identity = $_POST['ma_so']; 
    $mat_khau_moi = $_POST['password_new'];
    $xac_nhan_mk  = $_POST['password_confirm'];

    if ($mat_khau_moi !== $xac_nhan_mk) {
        echo "<script>alert('Mật khẩu xác nhận không khớp!'); window.history.back();</script>";
        exit();
    }

    // --- ĐOẠN SỬA QUAN TRỌNG NHẤT ---
    // Kiểm tra xem giá trị nhập vào khớp với cột MaDinhDanh HOẶC cột Email
    $check_sql = "SELECT * FROM NguoiDung WHERE MaDinhDanh = '$identity' OR Email = '$identity'";
    $result = mysqli_query($conn, $check_sql);

    if (mysqli_num_rows($result) > 0) {
        // Nếu tìm thấy, cập nhật mật khẩu cho đúng tài khoản đó
        $update_sql = "UPDATE NguoiDung SET MatKhau = '$mat_khau_moi' WHERE MaDinhDanh = '$identity' OR Email = '$identity'";
        
        if (mysqli_query($conn, $update_sql)) {
            echo "<script>alert('Thành công! Mật khẩu của tài khoản $identity đã được đổi.'); window.location.href='http://localhost:3000/login';</script>";
        } else {
            echo "Lỗi hệ thống: " . mysqli_error($conn);
        }
    } else {
        // Thông báo lỗi rõ ràng hơn cho cả hai trường hợp
        echo "<script>alert('Tài khoản (Mã số hoặc Email): $identity không tồn tại!'); window.history.back();</script>";
    }
}
?>