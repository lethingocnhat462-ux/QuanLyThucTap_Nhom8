import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Trang chủ và Đăng nhập không có Sidebar */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Các trang chức năng của Sinh viên */}
        <Route
          path="/*"
          element={
            <div className="flex h-screen overflow-hidden">
              {/* THANH DỌC BÊN TRÁI (SIDEBAR) */}
              <aside className="w-72 bg-[#1e3a8a] text-white flex flex-col shadow-inner">
                <div className="p-6 flex items-center gap-3 border-b border-blue-800">
                  <div className="bg-white text-blue-800 px-2 py-1 rounded font-bold">KSP</div>
                  <span className="font-bold text-sm">QUẢN LÝ THỰC TẬP</span>
                </div>

                <div className="flex flex-col p-3 gap-2 mt-4">
                  <Link to="/" className="flex items-center gap-3 p-4 hover:bg-blue-800 rounded-lg transition-colors no-underline text-white">
                    🏠 TRANG CHỦ HỆ THỐNG
                  </Link>
                  <Link to="/ho-so" className="flex items-center gap-3 p-4 hover:bg-blue-800 rounded-lg transition-colors no-underline text-white">
                    👤 HỒ SƠ CÁ NHÂN
                  </Link>
                  <Link to="/dang-ky" className="flex items-center gap-3 p-4 hover:bg-blue-800 rounded-lg transition-colors no-underline text-white">
                    📄 ĐĂNG KÝ NGUYỆN VỌNG
                  </Link>
                  
                  {/* Sử dụng Link để React nhận diện Route bên dưới */}
                  <Link to="/nop-bao-cao" className="flex items-center gap-3 p-4 hover:bg-blue-800 rounded-lg transition-colors no-underline text-white">
                    📤 NỘP BÁO CÁO
                  </Link>
                </div>
              </aside>

              {/* NỘI DUNG CHÍNH */}
              <main className="flex-1 bg-gray-100 overflow-y-auto">
                <Routes>
                  <Route path="/ho-so" element={<ProfilePage />} />
                  <Route path="/dang-ky" element={<RegistrationPage />} />
                  
                  {/* HIỂN THỊ GIAO DIỆN NỘP BÁO CÁO TẠI ĐÂY */}
                  <Route path="/nop-bao-cao" element={
                    <div className="w-full h-full flex flex-col">
                      <div className="bg-white p-4 shadow-sm font-bold text-blue-900 border-b">
                         HỆ THỐNG NỘP BÁO CÁO & GIÁO ÁN
                      </div>
                      <iframe 
                        src="http://localhost/nop_bao_cao.php" 
                        className="flex-1 w-full border-none"
                        title="Form Nộp Báo Cáo"
                      ></iframe>
                    </div>
                  } />
                </Routes>
              </main>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;