import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ mssv: '', password: '' });

  // Hàm xử lý khi nhập liệu
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  // Hàm xử lý đăng nhập
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost/api_login.php', { 
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(credentials),
});

      const result = await response.json();

if (result.status === "success") { 
        // 1. Lưu thông tin user và quan trọng nhất là userRole
        localStorage.setItem('user', JSON.stringify(result.user));
        
        // Chuyển quyền từ API (thường là số hoặc chữ) sang số 1,2,3,4 để App.js nhận diện
        // Giả sử API trả về result.user.Quyen là các số 1, 2, 3, 4
        localStorage.setItem('userRole', result.user.Quyen); 
        
        alert("✅ Đăng nhập thành công!");

        const role = parseInt(result.user.Quyen); 

        // 2. Điều hướng dựa trên quyền số (1, 2, 3, 4)
        if (role === 1) {
          navigate('/admin-tai-khoan'); // Admin
        } else if (role === 2) {
          navigate('/ho-so'); // Sinh viên
        } else if (role === 3) {
          navigate('/doan-thuc-tap'); // Giảng viên ĐH
        } else if (role === 4) {
          navigate('/xem-dssv'); // Giáo viên phổ thông
        } else {
          navigate('/ho-so'); // Mặc định
        }

        // Buộc trình duyệt tải lại nhẹ để App.js cập nhật userRole mới từ localStorage
        window.location.reload();

      } else {
        alert("❌ " + result.message);
      }
    } catch (error) {
      console.error("🔥 Lỗi kết nối:", error);
      alert("Không kết nối được với Server. Đừng quên bật XAMPP hoặc Docker nhé!");
    }
  };

  return (
    <div className="min-h-screen bg-blue-700 flex flex-col font-sans">
      {/* Header */}
      <div className="bg-white p-4 flex justify-between items-center shadow-md">
        <button onClick={() => navigate('/')} className="text-blue-800 font-semibold hover:underline flex items-center gap-2">
          <span>←</span> Quay lại trang chủ
        </button>
        <span className="font-bold text-blue-900 uppercase tracking-wider">Khoa Sư Phạm - ĐH QN</span>
      </div>

      <div className="flex-grow flex items-center justify-center p-4">
        {/* Form đăng nhập */}
        <form onSubmit={handleLogin} className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md">
          <div className="flex justify-center mb-6">
              <div className="bg-blue-700 text-white p-3 rounded-2xl font-bold text-2xl shadow-lg">KSP</div>
          </div>
          <h2 className="text-3xl font-black text-center text-gray-800 mb-8 uppercase tracking-tighter">Cổng đăng nhập</h2>

          <div className="space-y-5">
            <div>
              <label className="block text-xs font-black text-gray-500 mb-2 uppercase tracking-widest">MSSV / Tên đăng nhập</label>
              <input 
                type="text" 
                name="mssv" 
                value={credentials.mssv}
                onChange={handleChange}
                placeholder="Nhập mã của bạn" 
                className="w-full p-4 border-2 border-gray-100 rounded-2xl outline-none focus:border-blue-500 transition-all shadow-sm text-gray-700" 
                required
              />
            </div>
            <div>
              <label className="block text-xs font-black text-gray-500 mb-2 uppercase tracking-widest">Mật khẩu</label>
              <input 
                type="password" 
                name="password" 
                value={credentials.password}
                onChange={handleChange} 
                placeholder="********" 
                className="w-full p-4 border-2 border-gray-100 rounded-2xl outline-none focus:border-blue-500 transition-all shadow-sm text-gray-700" 
                required
              />
            </div>
          </div>

          <button type="submit" className="w-full bg-blue-800 text-white font-black py-4 rounded-2xl mt-10 hover:bg-blue-900 transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg uppercase tracking-widest">
            Đăng nhập hệ thống
          </button>
        </form>
      </div>

      <footer className="p-6 text-center text-blue-200 text-sm font-medium">
        Bản quyền © 2026 Khoa Sư Phạm - ĐHQN
      </footer>
    </div>
  );
};

export default LoginPage;