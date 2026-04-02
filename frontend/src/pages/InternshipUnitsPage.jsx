import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useTranslation } from 'react-i18next';

import imgQuocHoc from '../images/quoc-hoc.jpg';
import imgLeQuyDon from '../images/thpt chuyen le quy don.jpg'; 
import imgBuiThiXuan from '../images/thcs bui thi xuan.jpg';
import imgTrungVuong from '../images/thpt trung vuong.jpg';
import imgLeHongPhong from '../images/thcs le hong phong.jpg';
import imgNguyenHue from '../images/thpt nguyen hue.jpg'; 
import imgLeLoi from '../images/thcs le loi.jpg';
import imgTuyPhuoc from '../images/thpt so 1 tuy phuoc.jpg';
import imgPhanBoiChau from '../images/thpt phan boi chau.jpg';
import imgHungVuong from '../images/thpt hung vuong.jpg';

const InternshipUnitsPage = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("Tất cả");

  const units = [
    { id: 1, name: "THPT CHUYÊN LÊ QUÝ ĐÔN", type: "THPT", status: "Còn chỗ", img: imgLeQuyDon },
    { id: 2, name: "THPT QUỐC HỌC QUY NHƠN", type: "THPT", status: "Hết chỗ", img: imgQuocHoc },
    { id: 3, name: "THCS BÙI THỊ XUÂN", type: "THCS", status: "Còn chỗ", img: imgBuiThiXuan },
    { id: 4, name: "THPT TRƯNG VƯƠNG", type: "THPT", status: "Còn chỗ", img: imgTrungVuong },
    { id: 5, name: "THCS LÊ HỒNG PHONG", type: "THCS", status: "Còn chỗ", img: imgLeHongPhong },
    { id: 6, name: "THPT NGUYỄN HUỆ", type: "THPT", status: "Còn chỗ", img: imgNguyenHue },
    { id: 7, name: "THCS LÊ LỢI", type: "THCS", status: "Hết chỗ", img: imgLeLoi },
    { id: 8, name: "THPT SỐ 1 TUY PHƯỚC", type: "THPT", status: "Còn chỗ", img: imgTuyPhuoc },
    { id: 9, name: "THPT PHAN BỘI CHÂU", type: "THPT", status: "Còn chỗ", img: imgPhanBoiChau },
    { id: 10, name: "THPT HÙNG VƯƠNG", type: "THPT", status: "Còn chỗ", img: imgHungVuong },
  ];

  const filteredUnits = units.filter((unit) => {
    const matchesSearch = unit.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "Tất cả" || unit.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      
      {/* Phần Banner đã bỏ absolute cho thanh tìm kiếm */}
      <div className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] pt-24 pb-32 text-center text-white relative overflow-hidden">
        <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
                {t('Hệ thống đơn vị thực tập')}
            </h1>
            <p className="opacity-80 max-w-2xl mx-auto px-6 text-lg font-light">
                {t('Tìm kiếm và lựa chọn đơn vị thực tập phù hợp với chuyên môn của bạn.')}
            </p>
        </div>
      </div>

      {/* Thanh tìm kiếm được đặt ở ngoài Banner để không bị che */}
      <div className="max-w-5xl mx-auto px-4 -mt-12 relative z-20">
          <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-3 flex flex-col md:flex-row items-center gap-3 border border-white">
            <div className="relative flex-1 w-full">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                <input 
                    type="text" 
                    placeholder={t("Tìm tên trường...")} 
                    className="w-full pl-12 pr-6 py-4 outline-none text-gray-700 rounded-2xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all font-medium"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            
            <div className="flex gap-2 p-1 bg-gray-50 rounded-2xl w-full md:w-auto">
               {["Tất cả", "THPT", "THCS"].map((type) => (
                 <button 
                   key={type}
                   onClick={() => setFilterType(type)}
                   className={`flex-1 md:flex-none px-8 py-3 rounded-xl font-bold transition-all duration-300 text-sm whitespace-nowrap ${
                     filterType === type 
                     ? 'bg-blue-600 text-white shadow-lg' 
                     : 'text-gray-500 hover:bg-white hover:text-blue-600'
                   }`}
                 >
                   {t(type)}
                 </button>
               ))}
            </div>
          </div>
      </div>

      {/* Padding top nhẹ để tránh dính vào thanh tìm kiếm */}
      <div className="max-w-7xl mx-auto mt-12 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
        {filteredUnits.length > 0 ? (
          filteredUnits.map((item) => (
            <div key={item.id} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(30,58,138,0.1)] hover:-translate-y-2 transition-all duration-500 border border-gray-100">
               <div className="relative h-56 bg-gray-100 overflow-hidden">
                  <span className={`absolute top-5 right-5 px-4 py-1.5 rounded-full text-[10px] font-black text-white z-10 shadow-lg backdrop-blur-md ${item.status === 'Còn chỗ' ? 'bg-green-500/90' : 'bg-red-500/90'}`}>
                      {t(item.status).toUpperCase()} 
                  </span>
                  
                  <span className="absolute bottom-5 left-5 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-lg text-[10px] font-black text-blue-900 z-10 shadow-sm uppercase">
                      {t(item.type)} 
                  </span>

                  <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
               </div>

               <div className="p-7">
                 <h3 className="text-xl font-black text-blue-950 uppercase leading-tight group-hover:text-blue-600 transition-colors duration-300">
                    {item.name}
                 </h3>
                 <div className="mt-4 flex items-center justify-between">
                    <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-[10px] font-bold">🎓</div>
                        <div className="w-8 h-8 rounded-full border-2 border-white bg-indigo-100 flex items-center justify-center text-[10px] font-bold">🏫</div>
                    </div>
                    <button className="text-blue-600 font-black text-[11px] uppercase tracking-wider hover:underline">
                        {t('Xem chi tiết')} →
                    </button>
                 </div>
               </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-32 bg-white rounded-[3rem] border-2 border-dashed border-gray-200">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-gray-400 italic font-bold text-lg">
                {t('Không tìm thấy trường nào phù hợp với từ khóa')} "{searchTerm}"...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InternshipUnitsPage;