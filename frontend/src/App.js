import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import InternshipUnitsPage from './pages/InternshipUnitsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* NHÓM 1: CÁC TRANG CÔNG KHAI - Không có Sidebar */}
        {/* Để điều hướng được từ HomePage, Navbar trong HomePage phải dùng Link của react-router-dom */}
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/don-vi" element={<InternshipUnitsPage />} />
        <Route path="/quy-trinh" element={<div>Trang Quy trình đang xây dựng</div>} />
        <Route path="/login" element={<LoginPage />} />

        {/* NHÓM 2: CÁC TRANG SAU KHI ĐĂNG NHẬP - Có Sidebar */}
        <Route
          path="/*"
          element={
            <div className="flex h-screen overflow-hidden">
              <aside className="w-72 bg-[#1e3a8a] text-white flex flex-col shadow-inner">
                <div className="p-6 flex items-center gap-3 border-b border-blue-800">
                  <div className="bg-white text-blue-800 px-2 py-1 rounded font-bold">KSP</div>
                  <span className="font-bold text-sm uppercase">Quản lý thực tập</span>
                </div>

                <div className="flex flex-col p-3 gap-2 mt-4">
                  {/* Sử dụng Link để quay lại trang chủ công khai */}
                  <Link to="/" className="flex items-center gap-3 p-4 hover:bg-blue-800 rounded-lg no-underline text-white">
                    🏠 TRANG CHỦ HỆ THỐNG
                  </Link>
                  <Link to="/ho-so" className="flex items-center gap-3 p-4 hover:bg-blue-800 rounded-lg no-underline text-white">
                    👤 HỒ SƠ CÁ NHÂN
                  </Link>
                  <Link to="/dang-ky" className="flex items-center gap-3 p-4 hover:bg-blue-800 rounded-lg no-underline text-white">
                    📄 ĐĂNG KÝ NGUYỆN VỌNG
                  </Link>
                  <Link to="/nop-bao-cao" className="flex items-center gap-3 p-4 hover:bg-blue-800 rounded-lg no-underline text-white">
                    📤 NỘP BÁO CÁO
                  </Link>
                </div>
              </aside>

              <main className="flex-1 bg-gray-100 overflow-y-auto">
                <Routes>
                  <Route path="/ho-so" element={<ProfilePage />} />
                  <Route path="/dang-ky" element={<RegistrationPage />} />
                  <Route path="/nop-bao-cao" element={
                    <div className="w-full h-full flex flex-col">
                      <div className="bg-white p-4 shadow-sm font-bold text-blue-900 border-b uppercase">
                         Hệ thống nộp báo cáo & giáo án
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