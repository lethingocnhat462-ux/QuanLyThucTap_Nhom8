const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();

// --- MIDDLEWARE ---
app.use(cors()); 
app.use(express.json()); 
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); 

// --- 1. KẾT NỐI DATABASE ---
const db = mysql.createConnection({
  host: '127.0.0.1', 
  port: 3306,
  user: 'root',
  password: 'password123', // Kiểm tra lại password này nhé
  database: 'quan_ly_thuc_tap'
});

db.connect(err => {
  if (err) {
    console.error('❌ Lỗi kết nối MySQL:', err.message);
    return;
  }
  console.log('✅ Đã kết nối MySQL thành công! Hệ thống đã sẵn sàng.');
});

// --- 2. CẤU HÌNH LƯU TRỮ FILE ---
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

// --- 3. CÁC API ---

// API: Đăng nhập
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const sql = "SELECT * FROM users WHERE username = ? AND password = ?";
  db.query(sql, [username, password], (err, result) => {
    if (err) return res.status(500).json({ message: "Lỗi server" });
    if (result.length > 0) res.json({ status: "success", user: result[0] });
    else res.json({ status: "fail", message: "Sai tài khoản" });
  });
});

// API: Thống kê
app.get('/api/stats', (req, res) => {
  const sql = "SELECT COUNT(*) as total FROM SinhVien";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ totalSinhVien: result[0].total });
  });
});

// API: Nộp báo cáo (QUAN TRỌNG NHẤT)
app.post('/api/upload', upload.single('file'), (req, res) => {
  const { maSV, loai, tenHienThi } = req.body; 
  const tenFileThucTe = req.file ? req.file.filename : '';
  const maTaiLieu = 'TL' + Date.now(); 

  if (!tenFileThucTe) {
    return res.status(400).json({ message: "Vui lòng chọn file!" });
  }

  const sql = "INSERT INTO BaoCaoGiaoAn (MaTaiLieu, MaSV, TenFile, NgayNop, Loai) VALUES (?, ?, ?, NOW(), ?)";
  
  db.query(sql, [maTaiLieu, maSV, tenHienThi || tenFileThucTe, loai || 'BaoCao'], (err, result) => {
    if (err) {
      console.error("❌ Lỗi SQL:", err.message);
      return res.status(500).json({ message: "Lỗi CSDL: " + err.message });
    }
    res.json({ success: true, message: "Đã nộp bài thành công!" });
  });
});

// API: Lấy danh sách
app.get('/api/submissions/:maSV', (req, res) => {
  const sql = "SELECT * FROM BaoCaoGiaoAn WHERE MaSV = ? ORDER BY NgayNop DESC";
  db.query(sql, [req.params.maSV], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

// --- CHẠY SERVER ---
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server gộp đang chạy tại: http://localhost:${PORT}`);
});