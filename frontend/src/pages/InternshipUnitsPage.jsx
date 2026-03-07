import React, { useState } from 'react';
import Navbar from '../components/Navbar';

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
  // 1. Khai báo State để lưu từ khóa tìm kiếm và loại trường muốn lọc
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("Tất cả");

  // Dữ liệu gốc (Các em nên để link ảnh thật vào đây)
  const units = [
  { 
    id: 1, 
    name: "THPT CHUYÊN LÊ QUÝ ĐÔN", 
    type: "THPT", 
    status: "Còn chỗ", 
    img: imgLeQuyDon // Sử dụng biến đã import
  },
  { 
    id: 2, 
    name: "THPT QUỐC HỌC QUY NHƠN", 
    type: "THPT", 
    status: "Hết chỗ", 
    img: imgQuocHoc 
  },
  { 
    id: 3, 
    name: "THCS BÙI THỊ XUÂN", 
    type: "THCS", 
    status: "Còn chỗ", 
    img: imgBuiThiXuan 
  },
  { 
    id: 4, 
    name: "THPT TRƯNG VƯƠNG", 
    type: "THPT", 
    status: "Còn chỗ", 
    img: imgTrungVuong 
  },
  { 
    id: 5, 
    name: "THCS LÊ HỒNG PHONG", 
    type: "THCS", 
    status: "Còn chỗ", 
    img: imgLeHongPhong // Sử dụng biến đã import
  },
  { 
    id: 6, 
    name: "THPT NGUYỄN HUỆ", 
    type: "THPT", 
    status: "Còn chỗ", 
    img: imgNguyenHue // Sử dụng biến đã import
  },
  { 
    id: 7, 
    name: "THCS LÊ LỢI", 
    type: "THCS", 
    status: "Hết chỗ", 
    img: imgLeLoi // Sử dụng biến đã import
  },
  { 
    id: 8, 
    name: "THPT SỐ 1 TUY PHƯỚC", 
    type: "THPT", 
    status: "Còn chỗ", 
    img: imgTuyPhuoc// Sử dụng biến đã import
  },
  { 
    id: 9, 
    name: "THPT PHAN BỘI CHÂU", 
    type: "THPT", 
    status: "Còn chỗ", 
    img: imgPhanBoiChau// Sử dụng biến đã import
  },
  { 
    id: 10, 
    name: "THPT HÙNG VƯƠNG", 
    type: "THPT", 
    status: "Còn chỗ", 
    img: imgHungVuong// Sử dụng biến đã import
  },

  ];

  // 2. Logic quan trọng nhất: Lọc danh sách dựa trên SEARCH và FILTER
  const filteredUnits = units.filter((unit) => {
    const matchesSearch = unit.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "Tất cả" || unit.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Banner */}
      <div className="bg-[#1e3a8a] py-20 text-center text-white relative">
        <h1 className="text-4xl font-bold mb-2 uppercase tracking-widest">Hệ thống đơn vị thực tập</h1>
        <p className="opacity-80">Tìm kiếm và lựa chọn đơn vị thực tập phù hợp với chuyên môn của bạn.</p>
        
        {/* Thanh tìm kiếm & Lọc */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4">
          <div className="bg-white rounded-full shadow-xl p-2 flex items-center border">
            {/* INPUT TÌM KIẾM */}
            <input 
              type="text" 
              placeholder="🔍 Tìm tên trường..." 
              className="flex-1 px-6 py-3 outline-none text-gray-700 rounded-l-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Cập nhật khi gõ chữ
            />
            
            {/* CÁC NÚT LỌC */}
            <div className="flex gap-2 pr-2">
               {["Tất cả", "THPT", "THCS"].map((type) => (
                 <button 
                   key={type}
                   onClick={() => setFilterType(type)} // Cập nhật loại trường khi nhấn
                   className={`px-6 py-2 rounded-full font-bold transition-all ${
                     filterType === type 
                     ? 'bg-blue-600 text-white shadow-md' // Style khi đang chọn
                     : 'bg-blue-50 text-blue-800 hover:bg-blue-100' // Style bình thường
                   }`}
                 >
                   {type}
                 </button>
               ))}
            </div>
          </div>
        </div>
      </div>

      {/* Danh sách hiển thị kết quả */}
      <div className="max-w-7xl mx-auto mt-24 p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredUnits.length > 0 ? (
          filteredUnits.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer border border-gray-100">
               <div className="relative h-48 bg-gray-200">
                  <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white z-10 ${item.status === 'Còn chỗ' ? 'bg-green-500' : 'bg-red-500'}`}>
                      {item.status.toUpperCase()}
                  </span>
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
               </div>
               <div className="p-5">
                 <span className="text-blue-600 font-bold text-sm">{item.type}</span>
                 <h3 className="text-lg font-black text-blue-900 mt-1 uppercase leading-tight">{item.name}</h3>
               </div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center py-20 text-gray-400 italic font-medium">
            Không tìm thấy trường nào phù hợp với từ khóa "{searchTerm}"...
          </div>
        )}
      </div>
    </div>
  );
};

export default InternshipUnitsPage;