import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ identity: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

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
        localStorage.setItem('user', JSON.stringify(result.user));
        localStorage.setItem('userRole', result.user.Quyen); 
        
        alert("✅ Đăng nhập thành công!");
        const role = parseInt(result.user.Quyen); 

        if (role === 1) navigate('/admin-tai-khoan');
        else if (role === 2) navigate('/ho-so');
        else if (role === 3) navigate('/doan-thuc-tap');
        else if (role === 4) navigate('/xem-dssv');
        else navigate('/ho-so');

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
    /* Dùng lại class bg-blue-700 hoặc bg-ai-network tùy CSS của em */
    <div className="min-h-screen bg-blue-600 flex flex-col font-sans relative overflow-hidden">
      
      {/* Các vòng tròn trang trí cho đỡ trống nền (Light Mode) */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>

      {/* Header sáng sạch sẽ */}
      <div className="bg-white p-4 flex justify-between items-center shadow-md relative z-10">
        <button onClick={() => navigate('/')} className="text-blue-800 font-bold hover:underline flex items-center gap-2 text-sm">
          <span>←</span> Quay lại trang chủ
        </button>
        <span className="font-bold text-blue-900 uppercase tracking-widest text-sm">Khoa Sư Phạm - ĐH QN</span>
      </div>

      <div className="flex-grow flex items-center justify-center p-4 relative z-10">
        {/* Form Kính Sáng (Light Glassmorphism) */}
        <form onSubmit={handleLogin} className="bg-white/90 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-2xl w-full max-w-md border border-white">
          <div className="flex justify-center mb-6">
              <div className="bg-blue-600 text-white p-3 rounded-2xl font-bold text-2xl shadow-lg">KSP</div>
          </div>
          
          <h2 className="text-3xl font-black text-center text-gray-800 mb-2 uppercase tracking-tighter">Cổng đăng nhập</h2>
          <p className="text-center text-blue-600/60 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">Hệ thống quản lý thực tập</p>

          <div className="space-y-5">
            <div>
              <label className="block text-[10px] font-black text-gray-400 mb-2 uppercase tracking-widest">Tài khoản hoặc Email</label>
              <input 
                type="text" 
                name="identity"
                value={credentials.identity}
                onChange={handleChange}
                placeholder="Nhập mã số hoặc email..." 
                className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none focus:border-blue-500 focus:bg-white transition-all text-gray-700" 
                required
              />
            </div>

            <div>
              <label className="block text-[10px] font-black text-gray-400 mb-2 uppercase tracking-widest">Mật khẩu</label>
              <input 
                type="password" 
                name="password" 
                value={credentials.password}
                onChange={handleChange}
                placeholder="••••••••" 
                className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none focus:border-blue-500 focus:bg-white transition-all text-gray-700" 
                required
              />
            </div>
            
            <div className="flex justify-end !mt-2">
               <a href="http://localhost/quen-mk.php" className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-all">Quên mật khẩu?</a>
            </div>
          </div>

          <button type="submit" className="w-full bg-blue-700 text-white font-black py-4 rounded-2xl mt-8 hover:bg-blue-800 transition-all transform hover:scale-[1.02] active:scale-95 shadow-xl shadow-blue-200 uppercase tracking-widest text-sm">
            Đăng nhập hệ thống
          </button>
        </form>
      </div>

      <footer className="p-6 text-center text-blue-100 text-[10px] font-bold uppercase tracking-[0.3em] relative z-10">
        Bản quyền © 2026 Khoa Sư Phạm - ĐHQN
      </footer>
    </div>
  );
};

export default LoginPage;