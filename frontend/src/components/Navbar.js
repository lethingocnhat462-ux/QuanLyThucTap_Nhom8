// Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ userProfile }) => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md py-5 px-10 flex justify-between items-center sticky top-0 z-50">
      {/* Logo: Nhấn vào luôn về trang chủ */}
      <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate('/')}>
        <div className="bg-blue-800 text-white p-3 rounded-2xl font-black text-base shadow-lg">KSP</div>
        <div className="flex flex-col">
          <span className="font-black text-blue-900 uppercase text-xl tracking-tighter leading-none">Khoa Sư Phạm</span>
          <span className="font-bold text-blue-700 text-xs tracking-widest">ĐH QUY NHƠN</span>
        </div>
      </div>
      
      {/* Menu: Các Link này phải nằm NGOÀI mọi điều kiện check login */}
      <div className="hidden md:flex gap-12">
        <Link to="/" className="text-lg font-bold text-gray-500 hover:text-blue-800 uppercase transition-all">
          Trang chủ
        </Link>
        
        {/* Đảm bảo Link này không bị bọc bởi {userProfile && ...} */}
        <Link to="/don-vi" className="text-lg font-bold text-gray-500 hover:text-blue-800 uppercase transition-all">
          Đơn vị thực tập
        </Link>
        
        <Link to="/quy-trinh" className="text-lg font-bold text-gray-500 hover:text-blue-800 uppercase transition-all">
          Quy trình
        </Link>
      </div>

      {/* Phần bên phải: Hiển thị tùy theo trạng thái đăng nhập */}
      <div className="flex items-center gap-8">
        {userProfile ? (
          // Nếu ĐÃ đăng nhập
          <>
            <div className="text-right border-r-2 pr-8 border-gray-100">
              <p className="text-[10px] font-black text-gray-400 uppercase">Đang đăng nhập</p>
              <p className="text-lg font-black text-blue-900 italic leading-none">{userProfile.HoTen}</p>
            </div>
            <button 
              onClick={() => { localStorage.removeItem('user'); window.location.href='/login'; }}
              className="bg-red-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-red-700 transition-all"
            >
              ĐĂNG XUẤT
            </button>
          </>
        ) : (
          // Nếu CHƯA đăng nhập
          <button 
            onClick={() => navigate('/login')}
            className="bg-blue-600 text-white px-8 py-2.5 rounded-xl font-black text-sm hover:bg-blue-700 transition-all shadow-md"
          >
            ĐĂNG NHẬP
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;