import React, { useState, useEffect } from 'react'; 
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
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

// --- IMPORT TRANG XEM ĐOÀN THỰC TẬP ---
import XemDoanThucTapPage from './pages/XemDoanThucTapPage'; 

const AppContent = () => {
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

  // Cập nhật danh sách các trang sử dụng Layout Sidebar
  const isManagementPage = [
    '/ho-so', 
    '/dang-ky', 
    '/xem-dssv', 
    '/nop-bao-cao', 
    '/admin-tai-khoan',
    '/cham-diem',
    '/doan-thuc-tap' // Thêm trang này vào list
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
              <div className="flex h-screen overflow-hidden">
                {/* SIDEBAR */}
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

                    {/* Menu cho Sinh viên (Role 2) */}
                    {userRole === 2 && ( 
                      <>
                        <Link to="/doan-thuc-tap" className={`flex items-center gap-3 p-4 rounded-lg no-underline text-white ${location.pathname === '/doan-thuc-tap' ? 'bg-blue-900 border-l-4 border-yellow-400 font-bold' : 'hover:bg-blue-800'}`}>
                          👥 XEM ĐOÀN THỰC TẬP
                        </Link>
                        <Link to="/dang-ky" className={`flex items-center gap-3 p-4 rounded-lg no-underline text-white ${location.pathname === '/dang-ky' ? 'bg-blue-900 border-l-4 border-yellow-400 font-bold' : 'hover:bg-blue-800'}`}>
                          📄 ĐĂNG KÝ NGUYỆN VỌNG
                        </Link>
                        <Link to="/nop-bao-cao" className={`flex items-center gap-3 p-4 rounded-lg no-underline text-white ${location.pathname === '/nop-bao-cao' ? 'bg-blue-900 border-l-4 border-yellow-400 font-bold' : 'hover:bg-blue-800'}`}>
                          📤 NỘP BÁO CÁO
                        </Link>
                      </>
                    )}

                    {/* Menu cho Đơn vị tiếp nhận (Role 4) */}
                    {userRole === 4 && ( 
                      <>
                        <Link to="/xem-dssv" className={`flex items-center gap-3 p-4 rounded-lg no-underline text-white ${location.pathname === '/xem-dssv' ? 'bg-blue-900 border-l-4 border-yellow-400 font-bold' : 'hover:bg-blue-800'}`}>
                          📋 XEM DANH SÁCH SV
                        </Link>
                        <Link to="/cham-diem" className="flex items-center gap-3 p-4 hover:bg-blue-800 rounded-lg no-underline text-white">
                          ⭐ NHẬN XÉT CHẤM ĐIỂM
                        </Link>
                      </>
                    )}

                    {/* Menu cho Giảng viên (Role 3) */}
                    {userRole === 3 && ( 
                      <Link to="/doan-thuc-tap" className={`flex items-center gap-3 p-4 rounded-lg no-underline text-white font-bold text-green-300 ${location.pathname === '/doan-thuc-tap' ? 'bg-blue-900 border-l-4 border-yellow-400' : 'hover:bg-blue-800'}`}>
                        👥 XEM ĐOÀN THỰC TẬP
                      </Link>
                    )}

                    {/* Menu cho ADMIN (Role 1) */}
                    {userRole === 1 && ( 
                      <Link to="/admin-tai-khoan" className={`flex items-center gap-3 p-4 rounded-lg no-underline text-white font-bold text-red-300 ${location.pathname === '/admin-tai-khoan' ? 'bg-blue-900 border-l-4 border-red-400' : 'hover:bg-blue-800'}`}>
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
                    <Route path="/xem-dssv" element={<XemDSSVPage />} />
                    <Route path="/nhan-xet-cham-diem" element={<NhanXetChamDiemPage />} />
                    <Route path="/admin-tai-khoan" element={<AccountManagementPage />} />
                    
                    {/* ROUTE XEM ĐOÀN THỰC TẬP */}
                    <Route path="/doan-thuc-tap" element={<XemDoanThucTapPage />} />

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