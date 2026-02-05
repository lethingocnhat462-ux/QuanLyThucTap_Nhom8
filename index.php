<?php 
// 1. Kết nối cơ sở dữ liệu
// Đảm bảo bạn đã có file db.php với thông số kết nối đúng
include 'db.php'; 

// 2. Lấy danh sách trường từ bảng DonViThucTap
$sql_dv = "SELECT MaDV, TenDonVi FROM DonViThucTap"; 
$res_dv = mysqli_query($conn, $sql_dv);

// 3. Lấy thông tin sinh viên mẫu (Nguyễn Văn An)
$ma_sv_mau = '4551150001'; 
$sql_sv = "SELECT * FROM SinhVien WHERE MaSV = '$ma_sv_mau'";
$res_sv = mysqli_query($conn, $sql_sv);
$sv = mysqli_fetch_assoc($res_sv);
?>

<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Hệ thống Đăng ký Thực tập</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #e9ecef; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; }
        .container { background: #fff; padding: 30px; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); width: 100%; max-width: 500px; }
        h2 { color: #0056b3; text-align: center; margin-bottom: 20px; text-transform: uppercase; }
        .info-box { background: #f8f9fa; padding: 15px; border-left: 5px solid #0056b3; margin-bottom: 20px; }
        label { font-weight: bold; display: block; margin-top: 15px; margin-bottom: 5px; }
        select, input[type="text"], textarea { width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box; }
        .btn-submit { background: #28a745; color: white; border: none; padding: 12px; width: 100%; border-radius: 5px; font-size: 16px; font-weight: bold; cursor: pointer; margin-top: 20px; transition: 0.3s; }
        .btn-submit:hover { background: #218838; }
        .note { font-size: 0.9em; color: #666; margin-top: 10px; }
    </style>
</head>
<body>

<div class="container">
    <h2>Đăng ký nguyện vọng</h2>
    
    <div class="info-box">
        <p><b>Sinh viên:</b> <?php echo $sv['HoTen']; ?></p>
        <p><b>Mã số SV:</b> <?php echo $sv['MaSV']; ?></p>
        <p><b>Ngành:</b> <?php echo $sv['Nganh']; ?></p>
    </div>

    <form action="xuly.php" method="POST">
        <label>Nguyện vọng 1 (Ưu tiên nhất):</label>
        <select name="nv1" required>
            <option value="">-- Chọn đơn vị thực tập --</option>
            <?php 
            mysqli_data_seek($res_dv, 0);
            while($row = mysqli_fetch_assoc($res_dv)) {
                echo "<option value='".$row['MaDV']."'>".$row['TenDonVi']."</option>";
            } 
            ?>
        </select>

        <label>Nguyện vọng 2:</label>
        <select name="nv2">
            <option value="">-- Chọn đơn vị thực tập --</option>
            <?php 
            mysqli_data_seek($res_dv, 0);
            while($row = mysqli_fetch_assoc($res_dv)) {
                echo "<option value='".$row['MaDV']."'>".$row['TenDonVi']."</option>";
            } 
            ?>
        </select>

        <label>Nguyện vọng 3:</label>
        <select name="nv3">
            <option value="">-- Chọn đơn vị thực tập --</option>
            <?php 
            mysqli_data_seek($res_dv, 0);
            while($row = mysqli_fetch_assoc($res_dv)) {
                echo "<option value='".$row['MaDV']."'>".$row['TenDonVi']."</option>";
            } 
            ?>
        </select>

        <label>Ghi chú / Lý do ưu tiên:</label>
        <textarea name="ghi_chu" rows="3" placeholder="Nhập lý do nếu có..."></textarea>

        <div class="note">
            <input type="checkbox" required> Tôi cam đoan các thông tin trên là chính xác.
        </div>

        <button type="submit" class="btn-submit">XÁC NHẬN ĐĂNG KÝ</button>
    </form>
</div>

</body>
</html>