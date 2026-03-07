import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import InternshipUnitsPage from './pages/InternshipUnitsPage';
import AboutPage from './pages/AboutPage';

const App = () => {
  // 1. LẤY QUYỀN TỪ STORAGE (Quan trọng để Sidebar thay đổi)
  const userRole = parseInt(localStorage.getItem('userRole')) || 0; 

  return (
    <Router>
      <Routes>
        {/* NHÓM 1: CÁC TRANG CÔNG KHAI */}
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/don-vi" element={<InternshipUnitsPage />} />
        <Route path="/quy-trinh" element={<div className="p-10">Trang Quy trình đang xây dựng</div>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/gioi-thieu" element={<AboutPage />} />

        {/* NHÓM 2: CÁC TRANG SAU ĐĂNG NHẬP */}
        <Route
          path="/*"
          element={
            <div className="flex h-screen overflow-hidden">
              {/* SIDEBAR BIẾN HÌNH */}
              <aside className="w-72 bg-[#1e3a8a] text-white flex flex-col shadow-inner">
                <div className="p-6 flex items-center gap-3 border-b border-blue-800">
                  <div className="bg-white text-blue-800 px-2 py-1 rounded font-bold">KSP</div>
                  <span className="font-bold text-sm uppercase italic">Quản lý thực tập</span>
                </div>

                <nav className="flex flex-col p-3 gap-2 mt-4 overflow-y-auto">
                  <Link to="/" className="flex items-center gap-3 p-4 hover:bg-blue-800 rounded-lg no-underline text-white transition-all">
                    🏠 TRANG CHỦ HỆ THỐNG
                  </Link>
                  <Link to="/ho-so" className="flex items-center gap-3 p-4 hover:bg-blue-800 rounded-lg no-underline text-white transition-all">
                    👤 HỒ SƠ CÁ NHÂN
                  </Link>

                  <hr className="border-blue-800 my-2" />

                  {/* HIỂN THỊ THEO QUYỀN */}
                  {userRole === 2 && ( // SINH VIÊN
                    <>
                      <Link to="/dang-ky" className="flex items-center gap-3 p-4 hover:bg-blue-800 rounded-lg no-underline text-white">
                        📄 ĐĂNG KÝ NGUYỆN VỌNG
                      </Link>
                      <Link to="/nop-bao-cao" className="flex items-center gap-3 p-4 hover:bg-blue-800 rounded-lg no-underline text-white">
                        📤 NỘP BÁO CÁO
                      </Link>
                    </>
                  )}

                  {userRole === 4 && ( // GIÁO VIÊN PHỔ THÔNG
                    <>
                      <Link to="/xem-dssv" className="flex items-center gap-3 p-4 bg-blue-900 border-l-4 border-yellow-400 rounded-r-lg no-underline text-white font-bold">
                        📋 XEM DANH SÁCH SV
                      </Link>
                      <Link to="/cham-diem" className="flex items-center gap-3 p-4 hover:bg-blue-800 rounded-lg no-underline text-white">
                        ⭐ NHẬN XÉT CHẤM ĐIỂM
                      </Link>
                    </>
                  )}

                  {userRole === 3 && ( // GIẢNG VIÊN ĐẠI HỌC
                    <Link to="/doan-thuc-tap" className="flex items-center gap-3 p-4 hover:bg-blue-800 rounded-lg no-underline text-white font-bold text-green-300">
                      👥 XEM ĐOÀN THỰC TẬP
                    </Link>
                  )}

                  {userRole === 1 && ( // ADMIN
                    <Link to="/admin-tai-khoan" className="flex items-center gap-3 p-4 hover:bg-blue-800 rounded-lg no-underline text-white font-bold text-red-300">
                      ⚙️ QUẢN LÝ TÀI KHOẢN
                    </Link>
                  )}
                </nav>
              </aside>

              {/* NỘI DUNG CHÍNH (MAIN) */}
              <main className="flex-1 bg-gray-100 overflow-y-auto">
                <Routes>
                  <Route path="/ho-so" element={<ProfilePage />} />
                  <Route path="/dang-ky" element={<RegistrationPage />} />
                  
                  {/* Trang xem danh sách SV cho quyền 4 */}
                  <Route path="/xem-dssv" element={
                    <div className="p-8">
                      <h1 className="text-2xl font-bold text-blue-900 mb-4">DANH SÁCH SINH VIÊN THỰC TẬP</h1>
                      <div className="bg-white p-6 rounded-xl shadow">Dữ liệu sinh viên sẽ hiển thị ở đây...</div>
                    </div>
                  } />

                  <Route path="/nop-bao-cao" element={
                    <div className="w-full h-full flex flex-col">
                      <div className="bg-white p-4 shadow-sm font-bold text-blue-900 border-b uppercase">Hệ thống nộp báo cáo</div>
                      <iframe src="http://localhost/nop_bao_cao.php" className="flex-1 w-full border-none" title="Form" />
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