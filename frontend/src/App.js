import React, { useState, useEffect } from 'react'; 
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// --- IMPORT CÁC TRANG ---
import RegistrationPage from './pages/RegistrationPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import InternshipUnitsPage from './pages/InternshipUnitsPage';
import AboutPage from './pages/AboutPage';
import ProcessPage from './pages/ProcessPage';
import Navbar from './components/Navbar';
import ChangePasswordModal from './components/ChangePasswordModal/ChangePasswordModal'; 
import XemDSSVPage from './pages/XemDSSVPage';
import NhanXetChamDiemPage from './pages/NhanXetChamDiemPage';
import NotificationDetail from './pages/NotificationDetail'; 
import AccountManagementPage from './pages/AccountManagementPage'; 
import XemDoanThucTapPage from './pages/XemDoanThucTapPage'; 
import ReportsPage from './pages/ReportsPage';
import TraCuuKetQua from './pages/ResultPage'; // Đảm bảo file này tồn tại

const AppContent = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [userProfile, setUserProfile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userRole = parseInt(localStorage.getItem('userRole')) || 0;

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser && savedUser.MaTK) {
      setUserProfile(savedUser); 
      fetch(`http://localhost/get_profile.php?id=${savedUser.MaTK}`)
        .then(res => res.json())
        .then(result => {
          if (result.status === "success") {
            setUserProfile(result.data);
          }
        })
        .catch(err => console.error("Lỗi đồng bộ dữ liệu:", err));
    }
  }, []);

  // 1. THÊM '/ket-qua' VÀO ĐÂY ĐỂ ẨN NAVBAR CHÍNH KHI VÀO TRANG TRA CỨU
  const isManagementPage = [
    '/ho-so', '/dang-ky', '/xem-dssv', '/nop-bao-cao', 
    '/admin-tai-khoan', '/nhan-xet-cham-diem', '/doan-thuc-tap', '/ket-qua'
  ].includes(location.pathname);

  return (
    <>
      {!isManagementPage && (
        <Navbar 
          userProfile={userProfile} 
          onOpenChangePassword={() => setIsModalOpen(true)} 
        />
      )}

      <div className={!isManagementPage ? "pt-20" : ""}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/don-vi" element={<InternshipUnitsPage />} />
          <Route path="/quy-trinh" element={<ProcessPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/gioi-thieu" element={<AboutPage />} />
          <Route path="/thong-bao/:id" element={<NotificationDetail />} />

          <Route
            path="/*"
            element={
              <div className="flex h-screen overflow-hidden bg-gray-100">
                <aside className="w-72 bg-[#1e3a8a] text-white flex flex-col shadow-xl shrink-0">
                  <div className="p-6 flex items-center gap-3 border-b border-blue-800">
                    <div className="bg-white text-blue-800 px-2 py-1 rounded font-bold">KSP</div>
                    <span className="font-bold text-sm uppercase italic tracking-wider">
                      {t("QUẢN LÝ THỰC TẬP")}
                    </span>
                  </div>

                  <nav className="flex flex-col p-3 gap-2 mt-4 overflow-y-auto">
                    <Link to="/" className="flex items-center gap-3 p-4 hover:bg-blue-800 rounded-lg no-underline text-white transition-all">
                      🏠 {t("TRANG CHỦ HỆ THỐNG")}
                    </Link>
                    
                    <Link to="/ho-so" className={`flex items-center gap-3 p-4 rounded-lg no-underline text-white transition-all ${location.pathname === '/ho-so' ? 'bg-blue-900 border-l-4 border-yellow-400 font-bold' : 'hover:bg-blue-800'}`}>
                      👤 {t("HỒ SƠ CÁ NHÂN")}
                    </Link>

                    <hr className="border-blue-800 my-2 mx-4" />

                    {userRole === 2 && ( 
                      <>
                        <Link to="/dang-ky" className={`flex items-center gap-3 p-4 rounded-lg no-underline text-white ${location.pathname === '/dang-ky' ? 'bg-blue-900 border-l-4 border-yellow-400 font-bold' : 'hover:bg-blue-800'}`}>
                          📄 {t("ĐĂNG KÝ NGUYỆN VỌNG")}
                        </Link>
                        
                        {/* 2. THÊM MENU TRA CỨU VÀO ĐÂY ĐỂ HIỂN THỊ DƯỚI ĐĂNG KÝ */}
                        <Link to="/ket-qua" className={`flex items-center gap-3 p-4 rounded-lg no-underline text-white ${location.pathname === '/ket-qua' ? 'bg-blue-900 border-l-4 border-yellow-400 font-bold' : 'hover:bg-blue-800'}`}>
                          📊 {t("TRA CỨU KẾT QUẢ")}
                        </Link>

                        <Link to="/nop-bao-cao" className={`flex items-center gap-3 p-4 rounded-lg no-underline text-white ${location.pathname === '/nop-bao-cao' ? 'bg-blue-900 border-l-4 border-yellow-400 font-bold' : 'hover:bg-blue-800'}`}>
                          📤 {t("NỘP BÁO CÁO")}
                        </Link>
                      </>
                    )}

                    {/* Giữ nguyên các Role khác... */}
                    {userRole === 4 && ( 
                      <>
                        <Link to="/xem-dssv" className={`flex items-center gap-3 p-4 rounded-lg no-underline text-white ${location.pathname === '/xem-dssv' ? 'bg-blue-900 border-l-4 border-yellow-400 font-bold' : 'hover:bg-blue-800'}`}>
                          📋 {t("XEM DANH SÁCH SV")}
                        </Link>
                        <Link to="/nhan-xet-cham-diem" className={`flex items-center gap-3 p-4 rounded-lg no-underline text-white ${location.pathname === '/nhan-xet-cham-diem' ? 'bg-blue-900 border-l-4 border-yellow-400 font-bold' : 'hover:bg-blue-800'}`}>
                          ⭐ {t("NHẬN XÉT CHẤM ĐIỂM")}
                        </Link>
                      </>
                    )}

                    {userRole === 3 && ( 
                      <Link to="/doan-thuc-tap" className={`flex items-center gap-3 p-4 rounded-lg no-underline text-white font-bold text-green-300 ${location.pathname === '/doan-thuc-tap' ? 'bg-blue-900 border-l-4 border-yellow-400 font-bold text-white' : 'hover:bg-blue-800'}`}>
                        👥 {t("XEM ĐOÀN THỰC TẬP")}
                      </Link>
                    )}

                    {userRole === 1 && ( 
                      <Link to="/admin-tai-khoan" className={`flex items-center gap-3 p-4 rounded-lg no-underline text-white font-bold text-red-300 ${location.pathname === '/admin-tai-khoan' ? 'bg-blue-900 border-l-4 border-red-400 font-bold text-white' : 'hover:bg-blue-800'}`}>
                        ⚙️ {t("QUẢN LÝ TÀI KHOẢN")}
                      </Link>
                    )}
                  </nav>
                </aside>

                <main className="flex-1 bg-gray-100 overflow-y-auto">
                  <Routes>
                    <Route path="/ho-so" element={<ProfilePage />} />
                    <Route path="/dang-ky" element={<RegistrationPage />} />
                    <Route path="/xem-dssv" element={<XemDSSVPage />} />
                    <Route path="/nhan-xet-cham-diem" element={<NhanXetChamDiemPage />} />
                    <Route path="/admin-tai-khoan" element={<AccountManagementPage />} />
                    <Route path="/doan-thuc-tap" element={<XemDoanThucTapPage />} />
                    <Route path="/nop-bao-cao" element={<ReportsPage />} />
                    
                    {/* 3. ĐĂNG KÝ ROUTE KẾT QUẢ Ở ĐÂY ĐỂ NÓ HIỂN THỊ TRONG VÙNG NỘI DUNG CHÍNH */}
                    <Route path="/ket-qua" element={<TraCuuKetQua userProfile={userProfile} />} />
                  </Routes>
                </main>
              </div>
            }
          />
        </Routes>
      </div>

      {userProfile && (
        <ChangePasswordModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          maTK={userProfile.MaTK} 
        />
      )}
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;