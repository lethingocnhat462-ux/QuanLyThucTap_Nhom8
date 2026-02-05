import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navbar from './Navbar'; // File Navbar bạn đã có sẵn

const MainLayout = ({ userProfile }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Thanh ngang trên cùng */}
      <Navbar userProfile={userProfile} />

      <div className="flex flex-1">
        {/* THANH MENU BÊN TRÁI (SIDEBAR) */}
        <aside className="w-72 bg-blue-900 text-white p-6 shadow-xl">
          <nav className="flex flex-col gap-4">
            {/* Dùng thẻ Link của react-router-dom để điều hướng không load lại trang */}
            <Link to="/home" className="p-3 hover:bg-blue-800 rounded-lg font-bold">
              🏠 TRANG CHỦ HỆ THỐNG
            </Link>
            <Link to="/student/profile" className="p-3 hover:bg-blue-800 rounded-lg font-bold">
              👤 HỒ SƠ CÁ NHÂN
            </Link>
            <Link to="/student/registration" className="p-3 bg-yellow-500 text-blue-900 rounded-lg font-bold">
              📝 ĐĂNG KÝ NGUYỆN VỌNG
            </Link>
            <Link to="/student/reports" className="p-3 hover:bg-blue-800 rounded-lg font-bold">
              📥 NỘP BÁO CÁO
            </Link>
          </nav>
        </aside>

        {/* NỘI DUNG BÊN PHẢI (Nơi hiện ra Form Đăng ký hoặc Hồ sơ) */}
        <main className="flex-1 bg-gray-50 p-8">
           {/* Outlet là "lỗ hổng" để các trang con như RegistrationPage chui vào đây */}
           <Outlet /> 
        </main>
      </div>
    </div>
  );
};

export default MainLayout;