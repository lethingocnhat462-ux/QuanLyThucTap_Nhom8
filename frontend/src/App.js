import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import InternshipUnitsPage from './pages/InternshipUnitsPage';
import AboutPage from './pages/AboutPage';
import ProcessPage from './pages/ProcessPage';
import Navbar from './components/Navbar';

const AppContent = () => {
  const location = useLocation();
  const userRole = parseInt(localStorage.getItem('userRole')) || 0;
  const userProfile = JSON.parse(localStorage.getItem('user'));

  // Kiểm tra nếu là trang quản trị (Dashboard/Sidebar)
  const isManagementPage = [
    '/ho-so', 
    '/dang-ky', 
    '/xem-dssv', 
    '/nop-bao-cao', 
    '/admin-tai-khoan',
    '/cham-diem',
    '/doan-thuc-tap'
  ].includes(location.pathname);

  return (
    <>
      {/* 1. CHỈ HIỆN NAVBAR Ở TRANG CÔNG KHAI */}
      {!isManagementPage && <Navbar userProfile={userProfile} />}

      {/* 2. CẤU TRÚC PHẦN THÂN TRANG */}
      <div className={!isManagementPage ? "pt-20" : ""}>
        <Routes>
          {/* --- NHÓM 1: CÁC TRANG CÔNG KHAI (Dùng chung Layout) --- */}
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/don-vi" element={<InternshipUnitsPage />} />
          <Route path="/quy-trinh" element={<ProcessPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/gioi-thieu" element={<AboutPage />} />

          {/* --- NHÓM 2: CÁC TRANG QUẢN LÝ (Có Sidebar) --- */}
          <Route
            path="/*"
            element={
              <div className="flex h-screen overflow-hidden">
                {/* SIDEBAR CỐ ĐỊNH BÊN TRÁI */}
                <aside className="w-72 bg-[#1e3a8a] text-white flex flex-col shadow-inner shrink-0">
                  <div className="p-6 flex items-center gap-3 border-b border-blue-800">
                    <div className="bg-white text-blue-800 px-2 py-1 rounded font-bold">KSP</div>
                    <span className="font-bold text-sm uppercase italic">Quản lý thực tập</span>
                  </div>

                  <nav className="flex flex-col p-3 gap-2 mt-4 overflow-y-auto">
                    <Link to="/" className="flex items-center gap-3 p-4 hover:bg-blue-800 rounded-lg no-underline text-white transition-all">
                      🏠 TRANG CHỦ HỆ THỐNG
                    </Link>
                    <Link to="/ho-so" className={`flex items-center gap-3 p-4 rounded-lg no-underline text-white transition-all ${location.pathname === '/ho-so' ? 'bg-blue-900 border-l-4 border-yellow-400 font-bold' : 'hover:bg-blue-800'}`}>
                      👤 HỒ SƠ CÁ NHÂN
                    </Link>

                    <hr className="border-blue-800 my-2" />

                    {/* HIỂN THỊ THEO QUYỀN */}
                    {userRole === 2 && ( // SINH VIÊN
                      <>
                        <Link to="/dang-ky" className={`flex items-center gap-3 p-4 rounded-lg no-underline text-white ${location.pathname === '/dang-ky' ? 'bg-blue-900 border-l-4 border-yellow-400 font-bold' : 'hover:bg-blue-800'}`}>
                          📄 ĐĂNG KÝ NGUYỆN VỌNG
                        </Link>
                        <Link to="/nop-bao-cao" className={`flex items-center gap-3 p-4 rounded-lg no-underline text-white ${location.pathname === '/nop-bao-cao' ? 'bg-blue-900 border-l-4 border-yellow-400 font-bold' : 'hover:bg-blue-800'}`}>
                          📤 NỘP BÁO CÁO
                        </Link>
                      </>
                    )}

                    {userRole === 4 && ( // GIÁO VIÊN PHỔ THÔNG
                      <>
                        <Link to="/xem-dssv" className={`flex items-center gap-3 p-4 rounded-lg no-underline text-white ${location.pathname === '/xem-dssv' ? 'bg-blue-900 border-l-4 border-yellow-400 font-bold' : 'hover:bg-blue-800'}`}>
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
                      <Link to="/admin-tai-khoan" className={`flex items-center gap-3 p-4 rounded-lg no-underline text-white font-bold text-red-300 ${location.pathname === '/admin-tai-khoan' ? 'bg-blue-900 border-l-4 border-red-400' : 'hover:bg-blue-800'}`}>
                        ⚙️ QUẢN LÝ TÀI KHOẢN
                      </Link>
                    )}
                  </nav>
                </aside>

                {/* NỘI DUNG CHÍNH BÊN PHẢI */}
                <main className="flex-1 bg-gray-100 overflow-y-auto">
                  <Routes>
                    <Route path="/ho-so" element={<ProfilePage />} />
                    <Route path="/dang-ky" element={<RegistrationPage />} />
                    <Route path="/xem-dssv" element={
                      <div className="p-8">
                        <h1 className="text-2xl font-bold text-blue-900 mb-4 uppercase">Danh sách sinh viên thực tập</h1>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">Dữ liệu sẽ hiển thị ở đây...</div>
                      </div>
                    } />
                    <Route path="/nop-bao-cao" element={
                      <div className="w-full h-full flex flex-col">
                        <div className="bg-white p-4 shadow-sm font-bold text-blue-900 border-b uppercase">Hệ thống nộp báo cáo</div>
                        <iframe src="http://localhost/nop_bao_cao.php" className="flex-1 w-full border-none" title="Upload Form" />
                      </div>
                    } />
                  </Routes>
                </main>
              </div>
            }
          />
        </Routes>
      </div>
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;