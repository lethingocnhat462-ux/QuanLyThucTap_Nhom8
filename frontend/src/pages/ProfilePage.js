import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.MaTK) {
      navigate('/login');
      return;
    }

    fetch(`http://localhost/get_profile.php?id=${user.MaTK}`)
      .then(res => res.json())
      .then(result => {
        if (result.status === "success") {
          setProfile(result.data);
        }
      })
      .catch(err => console.error("Lỗi API:", err));
  }, [navigate]);

  if (!profile) return (
    <div className="flex justify-center items-center h-screen font-bold text-blue-800 text-xl">
      Đang tải hồ sơ định danh...
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      <Navbar userProfile={profile} />
      
      <div className="bg-blue-800 h-48 shadow-inner"></div>

      <div className="max-w-6xl mx-auto px-6 -mt-24 pb-20">
        {/* Header Hồ sơ - Tăng kích thước ảnh đại diện và chữ */}
        <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl flex flex-col md:flex-row items-center gap-10 border border-gray-100 relative z-10">
          <div className="bg-yellow-400 w-40 h-40 rounded-[2rem] flex items-center justify-center text-white text-6xl font-black shadow-xl">
            {profile.HoTen?.charAt(0).toUpperCase() || "?"}
          </div>
          <div className="flex-grow text-center md:text-left">
            <h1 className="text-4xl font-black text-blue-900 uppercase tracking-tight">
              {profile.HoTen || "---"}
            </h1>
            <div className="flex gap-3 mt-5 justify-center md:justify-start">
              <span className="bg-blue-100 text-blue-700 text-sm px-6 py-2 rounded-full font-bold uppercase tracking-wide">
                {Number(profile.Quyen) === 3 ? 'Giảng Viên ĐH' : 'Sinh Viên'}
              </span>
              <span className="bg-green-100 text-green-700 text-sm px-6 py-2 rounded-full font-bold uppercase tracking-wide">Chính thức</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          <div className="md:col-span-2 space-y-10">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-md border border-gray-100">
              <h3 className="text-blue-900 font-black mb-10 flex items-center gap-3 uppercase tracking-widest text-lg">
                <span className="w-2.5 h-8 bg-blue-600 rounded-full"></span> Chi tiết hồ sơ
              </h3>
              
              {/* Grid thông tin với text-lg để dễ đọc hơn */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10">
                <DetailItem label="Họ và Tên" value={profile.HoTen} />
                <DetailItem 
                  label={Number(profile.Quyen) === 2 ? "Ngành học" : "Chuyên môn/Khoa"} 
                  value={profile.Nganh || profile.Mon_PhuTrach} 
                />
                <DetailItem label="Giới tính" value={Number(profile.GioiTinh) === 1 ? "NAM" : "NỮ"} />
                <DetailItem label="Số điện thoại" value={profile.SoDienThoai} />
                
                <div className="sm:col-span-2 border-t border-gray-100 pt-8 mt-4">
                  <DetailItem label="Email liên hệ" value={profile.Email} />
                </div>
                
                {profile.DiaChi && (
                   <div className="sm:col-span-2">
                    <DetailItem label="Địa chỉ liên hệ" value={profile.DiaChi} />
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-[2.5rem] border-2 border-dashed border-gray-200 text-center shadow-sm">
              <div className="bg-gray-50 aspect-[3/4] rounded-[1.5rem] flex items-center justify-center text-gray-300 italic mb-6 text-lg">
                [Ảnh thẻ định danh]
              </div>
              <p className="text-xs text-gray-400 font-black uppercase tracking-[0.2em]">Khoa Sư Phạm - ĐHQN</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component con với kích thước chữ lớn hơn
const DetailItem = ({ label, value }) => (
  <div className="group">
    <p className="text-xs font-black text-gray-400 uppercase tracking-[0.15em] mb-2 transition-colors group-hover:text-blue-500">{label}</p>
    <p className="text-lg font-bold text-gray-800 tracking-tight">{value || "---"}</p>
  </div>
);

export default ProfilePage;