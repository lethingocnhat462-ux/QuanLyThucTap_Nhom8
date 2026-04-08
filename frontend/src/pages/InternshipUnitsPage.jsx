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
import imgHungVuong from '../images/thpt hung vuong.jpg';
import imgHoaiChauBac from '../images/thcs hoai chau bac.jpg';
import imgCatHai from '../images/thcs cat hai.jpg';
import imgCatKhanh from '../images/thcs cat khanh.jpg';
import imgTamQuanBac from '../images/thcs tam quan bac.jpg';
import imgTamQuan from '../images/thcs tam quan.jpg';
import imgTamQuanNam from '../images/thcs tam quan nam.jpg';
import imgSo2BongSon from '../images/thcs so 2 bong son.jpg';
import imgHoaiXuan from '../images/thcs hoai xuan.jpg';
import imgHoaiThanhTay from '../images/thcs hoai thanh tay.jpg';
import imgVinhThanh from '../images/thpt vinh thanh.jpg';
import imgTranQuocTuan from '../images/thpt tran quoc tuan.jpg';
import imgChuyenHungVuong from '../images/thpt chuyen hung vuong.jpg';
import imgNgoGiaTu from '../images/thpt ngo gia tu.jpg';
import imgNguyenTrai from '../images/thpt nguyen trai.jpg';
import imgChuyenNguyenDu from '../images/thpt chuyen nguyen du.jpg';
import imgVoGiu from '../images/thpt vo giu.jpg';
import imgNguyenBinhKhiem from '../images/thpt nguyen binh khiem.jpg';
import imgHoaiAn from '../images/thpt hoai an.jpg';
import imgNguyenDu from '../images/thpt nguyen du.jpg';
import imgChuyenChuVanAn from '../images/thpt chuyen chu van an.jpg';
import imgTangBatHo from '../images/thpt tang bat ho.jpg';
import imgthptPhanBoiChau from '../images/thpt phan boi chau.jpg';
import imgNguyenTran from '../images/thpt nguyen tran.jpg';
import imgthptTamQuan from '../images/thpt tam quan.jpg';
import imgQuyNhon from '../images/thpt quy nhon.jpg';
import imgNguyenThaiHoc from '../images/thpt nguyen thai hoc.jpg';
import imgTranCaoVan from '../images/thpt tran cao van.jpg';
import imgSo3TuyPhuoc from '../images/thpt so 3 tuy phuoc.jpg';
import imgAnLao from '../images/ptdtnt an lao.jpg';
import imgAnHoa from '../images/thcs an hoa.jpg';
import imgAnTan from '../images/thcs an tan.jpg';
import imgBongSon from '../images/thcs bong son.jpg';
import imgDapDa from '../images/thcs dap da.jpg';
import imgDongDa from '../images/thcs dong da.jpg';
import imgHoaiMy from '../images/thcs hoai my.jpg';
import imgHoaiPhu from '../images/thcs hoai phu.jpg';
import imgHoaiSon from '../images/thcs hoai son.jpg';
import imgHoaiTan from '../images/thcs hoai tan.jpg';
import imgHoaiThanh from '../images/thcs hoai thanh.jpg';
import imgNgoMay from '../images/thcs ngo may.jpg';
import imgTranHungDao from '../images/thcs tran hung dao.jpg';
import imgAnLuong from '../images/thpt an luong.jpg';
import imgBinhDuong from '../images/thpt binh duong.jpg';
import imgLyTuTrong from '../images/thpt ly tu trong.jpg';
import imgMyTho from '../images/thpt my tho.jpg';
import imgSo1PhuMy from '../images/thpt so 1 phu my.jpg';
import imgSo2PhuMy from '../images/thpt so 2 phu my.jpg';





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
    { id: 9, name: "THPT VÕ GIỮ", type: "THPT", status: "Còn chỗ", img: imgVoGiu },
    { id: 10, name: "THPT HÙNG VƯƠNG", type: "THPT", status: "Còn chỗ", img: imgHungVuong },
    { id: 11, name: "THCS HOÀI CHÂU BẮC", type: "THCS", status: "Còn chỗ", img: imgHoaiChauBac },
    { id: 12, name: "THCS CÁT HẢI", type: "THCS", status: "Còn chỗ", img: imgCatHai },
    { id: 13, name: "THCS CÁT KHÁNH", type: "THCS", status: "Còn chỗ", img: imgCatKhanh },
    { id: 14, name: "THCS TAM QUAN BẮC", type: "THCS", status: "Còn chỗ", img: imgTamQuanBac },
    { id: 15, name: "THCS TAM QUAN", type: "THCS", status: "Còn chỗ", img: imgTamQuan },
    { id: 16, name: "THCS TAM QUAN NAM", type: "THCS", status: "Còn chỗ", img: imgTamQuanNam },
    { id: 17, name: "THCS SỐ 2 BỒNG SƠN", type: "THCS", status: "Còn chỗ", img: imgSo2BongSon },
    { id: 18, name: "THCS HOÀI XUÂN", type: "THCS", status: "Còn chỗ", img: imgHoaiXuan },
    { id: 19, name: "THCS HOÀI THANH TÂY", type: "THCS", status: "Còn chỗ", img: imgHoaiThanhTay },
    { id: 20, name: "THPT VĨNH THẠNH", type: "THPT", status: "Còn chỗ", img: imgVinhThanh },
    { id: 21, name: "THPT TRẦN QUỐC TUẤN", type: "THPT", status: "Còn chỗ", img: imgTranQuocTuan },
    { id: 22, name: "THPT CHUYÊN HÙNG VƯƠNG", type: "THPT", status: "Hết chỗ", img: imgChuyenHungVuong },
    { id: 23, name: "THPT NGÔ GIA TỰ", type: "THPT", status: "Còn chỗ", img: imgNgoGiaTu },
    { id: 24, name: "THPT NGUYỄN TRÃI", type: "THPT", status: "Còn chỗ", img: imgNguyenTrai },
    { id: 25, name: "THPT CHUYÊN NGUYỄN DU", type: "THPT", status: "Còn chỗ", img: imgChuyenNguyenDu },
    { id: 26, name: "THPT NGUYỄN BÍNH KHIÊM", type: "THPT", status: "Còn chỗ", img: imgNguyenBinhKhiem },
    { id: 27, name: "THPT HOÀI ÂN", type: "THPT", status: "Còn chỗ", img: imgHoaiAn },
    { id: 28, name: "THPT NGUYỄN DU", type: "THPT", status: "Còn chỗ", img: imgNguyenDu },
    { id: 29, name: "THPT CHUYÊN CHU VĂN AN", type: "THPT", status: "Còn chỗ", img: imgChuyenChuVanAn },
    { id: 30, name: "THPT TĂNG BẠT HỔ", type: "THPT", status: "Còn chỗ", img: imgTangBatHo },
    { id: 31, name: "THPT PHAN BỘI CHÂU", type: "THPT", status: "Còn chỗ", img: imgthptPhanBoiChau },
    { id: 32, name: "THPT NGUYỄN TRÂN", type: "THPT", status: "Còn chỗ", img: imgNguyenTran },
    { id: 33, name: "THPT TAM QUAN", type: "THPT", status: "Còn chỗ", img: imgthptTamQuan },
    { id: 34, name: "THPT QUY NHƠN", type: "THPT", status: "Còn chỗ", img: imgQuyNhon },
    { id: 35, name: "THPT NGUYỄN THÁI HỌC", type: "THPT", status: "Còn chỗ", img: imgNguyenThaiHoc },
    { id: 36, name: "THPT TRẦN CAO VÂN", type: "THPT", status: "Còn chỗ", img: imgTranCaoVan },
    { id: 37, name: "THPT SỐ 3 TUY PHƯỚC", type: "THPT", status: "Còn chỗ", img: imgSo3TuyPhuoc },
    { id: 38, name: "PTDTNT AN LÃO", type: "THPT", status: "Còn chỗ", img: imgAnLao },
  { id: 39, name: "THCS AN HÒA", type: "THCS", status: "Còn chỗ", img: imgAnHoa },
  { id: 40, name: "THCS AN TÂN", type: "THCS", status: "Còn chỗ", img: imgAnTan },
  { id: 41, name: "THCS BỒNG SƠN", type: "THCS", status: "Còn chỗ", img: imgBongSon },
  { id: 42, name: "THCS ĐẬP ĐÁ", type: "THCS", status: "Còn chỗ", img: imgDapDa },
  { id: 43, name: "THCS ĐỐNG ĐA", type: "THCS", status: "Còn chỗ", img: imgDongDa },
  { id: 44, name: "THCS HOÀI MỸ", type: "THCS", status: "Còn chỗ", img: imgHoaiMy },
  { id: 45, name: "THCS HOÀI PHÚ", type: "THCS", status: "Còn chỗ", img: imgHoaiPhu },
  { id: 46, name: "THCS HOÀI SƠN", type: "THCS", status: "Còn chỗ", img: imgHoaiSon },
  { id: 47, name: "THCS HOÀI TÂN", type: "THCS", status: "Còn chỗ", img: imgHoaiTan },
  { id: 48, name: "THCS HOÀI THANH", type: "THCS", status: "Còn chỗ", img: imgHoaiThanh },
  { id: 49, name: "THCS NGÔ MÂY", type: "THCS", status: "Còn chỗ", img: imgNgoMay },
  { id: 50, name: "THCS TRẦN HƯNG ĐẠO", type: "THCS", status: "Còn chỗ", img: imgTranHungDao },
  { id: 51, name: "THPT AN LƯƠNG", type: "THPT", status: "Còn chỗ", img: imgAnLuong },
  { id: 52, name: "THPT BÌNH DƯƠNG", type: "THPT", status: "Còn chỗ", img: imgBinhDuong },
  { id: 53, name: "THPT LÝ TỰ TRỌNG", type: "THPT", status: "Còn chỗ", img: imgLyTuTrong },
  { id: 54, name: "THPT MỸ THỌ", type: "THPT", status: "Còn chỗ", img: imgMyTho },
  { id: 55, name: "THPT SỐ 1 PHÙ MỸ", type: "THPT", status: "Còn chỗ", img: imgSo1PhuMy },
  { id: 56, name: "THPT SỐ 2 PHÙ MỸ", type: "THPT", status: "Còn chỗ", img: imgSo2PhuMy },
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