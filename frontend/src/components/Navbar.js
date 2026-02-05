import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ userProfile }) => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md py-5 px-10 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate('/home')}>
        <div className="bg-blue-800 text-white p-3 rounded-2xl font-black text-base shadow-lg">KSP</div>
        <span className="font-black text-blue-900 uppercase text-xl tracking-tighter">Khoa Sư Phạm - ĐHQN</span>
      </div>
      
      <div className="hidden md:flex gap-12">
        {/* Dùng Link để quay về trang chủ mà không bị reload trang */}
        <Link to="/home" className="text-lg font-bold text-gray-500 hover:text-blue-800 uppercase tracking-widest transition-all">Trang chủ</Link>
        <Link to="/profile" className="text-lg font-bold text-blue-800 border-b-4 border-blue-800 pb-1 uppercase tracking-widest">Hồ sơ</Link>
      </div>

      <div className="flex items-center gap-8">
        <div className="text-right border-r-2 pr-8 border-gray-100">
          <p className="text-sm font-black text-gray-400 uppercase mb-1">Đang đăng nhập</p>
          <p className="text-xl font-black text-blue-900 italic">{userProfile?.HoTen || "Thành viên"}</p>
        </div>
        <button 
          onClick={() => { localStorage.removeItem('user'); navigate('/login'); }}
          className="bg-red-600 text-white px-6 py-2.5 rounded-xl font-black text-sm hover:bg-red-700 transition-all shadow-md shadow-red-100"
        >
          ĐĂNG XUẤT
        </button>
      </div>
    </nav>
  );
};

export default Navbar;