import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = ({ userProfile, onOpenChangePassword }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation(); 
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Chuẩn hóa Key Menu: Đảm bảo khớp 100% với file i18n.js
  const menuItems = [
    { name: t('Trang chủ'), path: '/' },
    { name: t('ĐƠN VỊ THỰC TẬP'), path: '/don-vi' },
    { name: t('QUY TRÌNH'), path: '/quy-trinh' },
    { name: t('GIỚI THIỆU'), path: '/gioi-thieu' },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    // Lưu ý: i18next-browser-languagedetector sẽ tự động lưu vào localStorage cho bạn
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12 flex justify-between items-center ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-lg py-3 shadow-lg' 
        : 'bg-white py-5 shadow-sm border-b border-gray-100'
    }`}>
      
      {/* Logo & Brand */}
      <div className="flex items-center gap-4 cursor-pointer group" onClick={() => navigate('/')}>
        <div className="bg-[#1e3a8a] text-white w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg shadow-blue-200 shadow-xl group-hover:scale-105 transition-transform">
          KSP
        </div>
        <div className="flex flex-col text-left">
          <span className="font-extrabold text-[#1e3a8a] uppercase text-xl tracking-tighter leading-none">
            {t('KHOA SƯ PHẠM')}
          </span>
          <span className="font-bold text-blue-500 text-[10px] tracking-[0.2em] mt-1 whitespace-nowrap">
            {t('Đại học Quy Nhơn')}
          </span>
        </div>
      </div>
      
      {/* Menu trung tâm */}
      <div className="hidden md:flex items-center gap-2">
        {menuItems.map((item) => (
          <Link 
            key={item.path}
            to={item.path} 
            className={`px-5 py-2 rounded-full text-sm font-bold uppercase transition-all no-underline ${
              location.pathname === item.path 
                ? 'bg-blue-50 text-[#1e3a8a]' 
                : 'text-gray-500 hover:text-[#1e3a8a] hover:bg-gray-50'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4 relative">
        {/* Switcher Ngôn ngữ */}
        <div className="flex items-center bg-gray-100 p-1 rounded-full border border-gray-200 shadow-inner">
          <button 
            onClick={() => changeLanguage('vi')}
            className={`px-3 py-1 rounded-full text-[10px] font-black transition-all duration-300 ${
              i18n.language === 'vi' 
                ? 'bg-white text-blue-600 shadow-md transform scale-105' 
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            VI
          </button>
          <button 
            onClick={() => changeLanguage('en')}
            className={`px-3 py-1 rounded-full text-[10px] font-black transition-all duration-300 ${
              i18n.language === 'en' 
                ? 'bg-white text-blue-600 shadow-md transform scale-105' 
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            EN
          </button>
        </div>

        {userProfile ? (
          <div className="relative flex items-center gap-1">
            <div 
              onClick={() => navigate('/student/profile')}
              className="flex items-center gap-3 bg-gray-50 p-1 pr-4 rounded-full border border-gray-100 hover:bg-blue-50 cursor-pointer transition-all group/profile"
              title={t('CHI TIẾT HỒ SƠ')}
            >
              <div className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center font-bold text-xs uppercase group-hover/profile:bg-blue-600 group-hover/profile:text-white transition-colors">
                {userProfile.HoTen?.charAt(0) || 'U'}
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-[9px] font-bold text-gray-400 uppercase leading-none mb-1">{t('THÀNH VIÊN')}</p>
                <p className="text-sm font-black text-blue-900 leading-none group-hover/profile:text-blue-600">{userProfile.HoTen}</p>
              </div>
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-full hover:bg-gray-100 transition-all ${isMenuOpen ? 'bg-gray-100' : ''}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 text-gray-500 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-[60] overflow-hidden animate-in fade-in zoom-in duration-200">
                <button 
                  onClick={() => { setIsMenuOpen(false); onOpenChangePassword(); }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  {t('Đổi mật khẩu')}
                </button>
                <div className="border-t border-gray-50 mx-2 my-1"></div>
                <button 
                  onClick={() => { localStorage.clear(); window.location.href='/login'; }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  {t('Thoát')}
                </button>
              </div>
            )}
          </div>
        ) : (
          <button 
            onClick={() => navigate('/login')}
            className="bg-[#2563eb] text-white px-8 py-2.5 rounded-full font-bold text-sm hover:bg-[#1e3a8a] transition-all shadow-lg shadow-blue-100 hover:shadow-blue-200 active:scale-95"
          >
            {t('ĐĂNG NHẬP')}
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;