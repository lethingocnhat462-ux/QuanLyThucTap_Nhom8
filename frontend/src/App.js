import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        {/* 1. THANH NGANG TRÊN CÙNG */}
        <nav className="h-16 bg-white shadow-sm border-b flex items-center justify-between px-6 z-50">
          <div className="flex items-center gap-4">
            <div className="bg-blue-700 text-white p-1.5 rounded font-bold text-xl">KSP</div>
            <h1 className="font-bold text-blue-900 text-lg">KHOA SƯ PHẠM - ĐHQN</h1>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium">
            <span className="hidden md:block">ĐANG ĐĂNG NHẬP: <b className="text-blue-700">Thành viên</b></span>
            <button className="bg-red-500 text-white px-4 py-1.5 rounded-md font-bold hover:bg-red-600 transition-all">
              ĐĂNG XUẤT
            </button>
          </div>
        </nav>

        <div className="flex flex-1 overflow-hidden">
          {/* 2. THANH DỌC BÊN TRÁI - Sát mép trên cùng */}
          <aside className="w-72 bg-[#1e3a8a] text-white flex flex-col shadow-inner">
            <div className="flex flex-col p-3 gap-2 mt-4">
              <Link to="/" className="flex items-center gap-3 p-4 hover:bg-blue-800 rounded-lg transition-colors">
                🏠 TRANG CHỦ HỆ THỐNG
              </Link>
              <Link to="/ho-so" className="flex items-center gap-3 p-4 hover:bg-blue-800 rounded-lg transition-colors">
                👤 HỒ SƠ CÁ NHÂN
              </Link>
              <Link to="/dang-ky" className="flex items-center gap-3 p-4 bg-yellow-500 text-blue-900 font-bold rounded-lg shadow-md">
                📄 ĐĂNG KÝ NGUYỆN VỌNG
              </Link>
              <Link to="/nop-bao-cao" className="flex items-center gap-3 p-4 hover:bg-blue-800 rounded-lg transition-colors">
                📤 NỘP BÁO CÁO
              </Link>
            </div>
          </aside>

          {/* 3. NỘI DUNG CHÍNH - Đã xóa Banner trùng lặp */}
          <main className="flex-1 bg-gray-100 overflow-y-auto p-8">
            <Routes>
              <Route path="/dang-ky" element={<RegistrationPage />} />
              {/* Thêm các Route khác ở đây */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

// DÒNG NÀY LÀ QUAN TRỌNG NHẤT ĐỂ SỬA LỖI CỦA BẠN
export default App;