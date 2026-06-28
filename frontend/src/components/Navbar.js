import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// Đảm bảo thư mục images đã nằm trong src
import logoImg from '../images/logo.png'; 

const Navbar = ({ userProfile, onOpenChangePassword }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation(); 
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: t('Trang chủ'), path: '/' },
    { name: t('ĐƠN VỊ THỰC TẬP'), path: '/don-vi' },
    { name: t('QUY TRÌNH'), path: '/quy-trinh' },
    { name: t('GIỚI THIỆU'), path: '/gioi-thieu' },
  ];

 

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12 flex justify-between items-center ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-lg py-3 shadow-lg' 
        : 'bg-white py-5 shadow-sm border-b border-gray-100'
    }`}>
      
      {/* Logo & Brand */}
      <div className="flex items-center gap-4 cursor-pointer group" onClick={() => navigate('/')}>
        <img 
          src={logoImg} 
          alt="Logo" 
          className="w-12 h-12 object-contain group-hover:scale-105 transition-transform" 
        />
<div className="flex flex-col justify-center leading-tight">
  <span className="font-bold text-[#1e3a8a] text-[17px] md:text-[19px] uppercase tracking-[-0.04em]">
    {t('Trường Đại học Quy Nhơn')}
  </span>

  <span className="font-semibold text-[#3157a6] text-[14px] md:text-[15px] uppercase tracking-[0.03em] mt-1">
    {t('KHOA SƯ PHẠM')}
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

      {/* Right Side: Language & User */}
      <div className="flex items-center gap-4 relative">
    
        {userProfile ? (
          <div className="relative flex items-center gap-1">
            <div 
              onClick={() => navigate('/student/profile')}
              className="flex items-center gap-3 bg-gray-50 p-1 pr-4 rounded-full border border-gray-100 hover:bg-blue-50 cursor-pointer transition-all"
            >
              <div className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center font-bold text-xs uppercase">
                {userProfile.HoTen?.charAt(0) || 'U'}
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-[9px] font-bold text-gray-400 uppercase leading-none mb-1">{t('THÀNH VIÊN')}</p>
                <p className="text-sm font-black text-blue-900 leading-none">{userProfile.HoTen}</p>
              </div>
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-2xl border py-2 z-[60]">
                <button onClick={() => { setIsMenuOpen(false); onOpenChangePassword(); }} className="w-full text-left px-4 py-3 text-sm font-bold text-gray-600 hover:bg-blue-50">{t('Đổi mật khẩu')}</button>
                <button onClick={() => { localStorage.clear(); window.location.href='/login'; }} className="w-full text-left px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50">{t('Thoát')}</button>
              </div>
            )}
          </div>
        ) : (
          <button onClick={() => navigate('/login')} className="bg-[#2563eb] text-white px-8 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-blue-100">
            {t('ĐĂNG NHẬP')}
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;