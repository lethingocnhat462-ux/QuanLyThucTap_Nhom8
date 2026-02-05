const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors()); // Giúp React gọi API không bị lỗi
app.use(express.json());

// Kết nối đến MySQL (Giữ nguyên thông tin CSDL cũ của bạn)
const db = mysql.createConnection({
  host: '127.0.0.1', // Kết nối từ máy thật vào Docker MySQL qua port map
  port: 3306,        // Kiểm tra xem docker-compose của bạn dùng port nào (thường là 3306)
  user: 'root',
  password: 'password123', 
  database: 'quan_ly_thuc_tap' 
});

db.connect(err => {
  if (err) {
    console.error('Lỗi kết nối MySQL:', err);
    return;
  }
  console.log('Đã kết nối MySQL thành công! Giao diện sẽ rất mượt.');
});

// API Đăng nhập mẫu (Thay cho login.php)
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const sql = "SELECT * FROM users WHERE username = ? AND password = ?";
  
  db.query(sql, [username, password], (err, result) => {
    if (err) return res.status(500).json({ message: "Lỗi server" });
    if (result.length > 0) {
      res.json({ status: "success", user: result[0] });
    } else {
      res.json({ status: "fail", message: "Sai tài khoản hoặc mật khẩu" });
    }
  });
});
// API lấy tổng số sinh viên từ bảng SinhVien
app.get('/api/stats', (req, res) => {
  const sql = "SELECT COUNT(*) as total FROM SinhVien"; // Tên bảng phải chuẩn như trong phpMyAdmin
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ totalSinhVien: result[0].total });
  });
});
app.listen(5000, () => console.log('Server Node.js đang chạy tại cổng 5000'));