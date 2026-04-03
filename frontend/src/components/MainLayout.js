import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 
import Navbar from './Navbar'; 

const MainLayout = ({ userProfile }) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar userProfile={userProfile} />

      <div className="flex flex-1 pt-[72px]"> 
        {/* Quan trọng: key={i18n.language} giúp ép Sidebar render lại khi đổi ngôn ngữ */}
        <aside 
          key={i18n.language} 
          className="w-72 bg-[#1e3a8a] text-white p-6 shadow-2xl fixed h-[calc(100vh-72px)] overflow-y-auto transition-all duration-300"
        >
          <div className="mb-8 px-2">
            <p className="text-blue-300 text-[10px] font-black uppercase tracking-[0.2em] opacity-70">
              {t('Hệ thống điều phối')}
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <Link 
              to="/home" 
              className={`p-4 rounded-2xl font-bold flex items-center gap-3 transition-all duration-200 ${
                isActive('/home') ? 'bg-blue-800 shadow-lg translate-x-2' : 'hover:bg-blue-800/50 hover:translate-x-1'
              }`}
            >
              <span className="text-xl"></span>
              <span className="tracking-tight">{t("TRANG CHỦ HỆ THỐNG")}</span>
            </Link>
            
            <Link 
              to="/student/profile" 
              className={`p-4 rounded-2xl font-bold flex items-center gap-3 transition-all duration-200 ${
                isActive('/student/profile') ? 'bg-blue-800 shadow-lg translate-x-2' : 'hover:bg-blue-800/50 hover:translate-x-1'
              }`}
            >
              <span className="text-xl"></span>
              <span className="tracking-tight">{t("HỒ SƠ CÁ NHÂN")}</span>
            </Link>
            
            <Link 
              to="/student/registration" 
              className={`p-4 rounded-2xl font-black flex items-center gap-3 transition-all duration-300 shadow-xl transform hover:scale-[1.03] active:scale-95 ${
                isActive('/student/registration') 
                  ? 'bg-yellow-400 text-blue-900' 
                  : 'bg-yellow-500 text-blue-950 hover:bg-yellow-400'
              }`}
            >
              <span className="text-xl"></span>
              <span className="tracking-tight">{t("ĐĂNG KÝ NGUYỆN VỌNG")}</span>
            </Link>
            <Link 
  to="/student/result" 
  className={`p-4 rounded-2xl font-bold flex items-center gap-3 transition-all duration-200 ${
    isActive('/student/result') ? 'bg-blue-800 shadow-lg translate-x-2' : 'hover:bg-blue-800/50 hover:translate-x-1'
  }`}
>
  <span className="text-xl"></span>
  <span className="tracking-tight">{t("TRA CỨU KẾT QUẢ")}</span>
</Link>
<Link to="/xem-diem-bao-cao" className="flex items-center p-3 hover:bg-blue-700 text-white">
   <i className="fas fa-file-signature mr-3"></i>
   <span>XEM ĐIỂM & NHẬN XÉT</span>
</Link>
            <Link 
              to="/student/reports" 
              className={`p-4 rounded-2xl font-bold flex items-center gap-3 transition-all duration-200 ${
                isActive('/student/reports') ? 'bg-blue-800 shadow-lg translate-x-2' : 'hover:bg-blue-800/50 hover:translate-x-1'
              }`}
            >
              <span className="text-xl"></span>
              <span className="tracking-tight">{t("NỘP BÁO CÁO")}</span>
            </Link>
          </nav>

          <div className="mt-auto pt-10 px-4 opacity-30 text-[9px] font-bold uppercase tracking-widest text-center">
            © 2026 Quy Nhon University <br/> AI Smart Portal
          </div>
        </aside>

        <main className="flex-1 bg-gray-50 ml-72 min-h-screen">
           <div className="p-8">
              <Outlet /> 
           </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;