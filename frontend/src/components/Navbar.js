import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ userProfile, onOpenChangePassword }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Thêm state quản lý Dropdown

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Đơn vị thực tập', path: '/don-vi' },
    { name: 'Quy trình', path: '/quy-trinh' },
    { name: 'Giới thiệu', path: '/gioi-thieu' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12 flex justify-between items-center ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-lg py-3 shadow-lg' 
        : 'bg-white py-5 shadow-sm border-b border-gray-100'
    }`}>
      
      {/* Logo & Brand - Giữ nguyên */}
      <div className="flex items-center gap-4 cursor-pointer group" onClick={() => navigate('/')}>
        <div className="bg-[#1e3a8a] text-white w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg shadow-blue-200 shadow-xl group-hover:scale-105 transition-transform">
          KSP
        </div>
        <div className="flex flex-col">
          <span className="font-extrabold text-[#1e3a8a] uppercase text-xl tracking-tighter leading-none">
            Khoa Sư Phạm
          </span>
          <span className="font-bold text-blue-500 text-[10px] tracking-[0.2em] mt-1">
            ĐH QUY NHƠN
          </span>
        </div>
      </div>
      
      {/* Menu trung tâm - Giữ nguyên */}
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

      {/* Phần bên phải: Auth Status với Dropdown */}
<div className="flex items-center gap-6 relative">
  {userProfile ? (
    <div className="relative flex items-center gap-2">
      {/* 1. VÙNG THÔNG TIN: Nhấn vào đây để quay lại trang Hồ sơ */}
      <div 
        onClick={() => navigate('/ho-so')}
        className="flex items-center gap-4 bg-gray-50 p-1.5 pr-4 rounded-full border border-gray-100 hover:bg-blue-50 cursor-pointer transition-all group/profile"
        title="Xem hồ sơ cá nhân"
      >
        <div className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center font-bold text-xs uppercase group-hover/profile:bg-blue-600 group-hover/profile:text-white transition-colors">
          {userProfile.HoTen?.charAt(0) || 'U'}
        </div>
        <div className="text-left hidden sm:block">
          <p className="text-[9px] font-bold text-gray-400 uppercase leading-none mb-1">Thành viên</p>
          <p className="text-sm font-black text-blue-900 leading-none group-hover/profile:text-blue-600">{userProfile.HoTen}</p>
        </div>
      </div>

      {/* 2. NÚT MŨI TÊN: Chỉ dành riêng để đóng/mở Dropdown */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`p-2 rounded-full hover:bg-gray-100 transition-all ${isMenuOpen ? 'bg-gray-100' : ''}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 text-gray-500 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* 3. KHỐI DROPDOWN MENU (Giữ nguyên logic của em) */}
      {isMenuOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-[60] overflow-hidden animate-in fade-in zoom-in duration-200">
          <button 
            onClick={() => { setIsMenuOpen(false); onOpenChangePassword(); }}
            className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Đổi mật khẩu
          </button>
          
          <div className="border-t border-gray-50 mx-2 my-1"></div>

          <button 
            onClick={() => { localStorage.clear(); window.location.href='/login'; }}
            className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Đăng xuất
          </button>
        </div>
      )}
    </div>
  ) : (
    /* Nút Đăng nhập giữ nguyên */
    <button 
      onClick={() => navigate('/login')}
      className="bg-[#2563eb] text-white px-8 py-2.5 rounded-full font-bold text-sm hover:bg-[#1e3a8a] transition-all shadow-lg shadow-blue-100 hover:shadow-blue-200 active:scale-95"
    >
      ĐĂNG NHẬP
    </button>
  )}
</div>
    </nav>
  );
};

export default Navbar;