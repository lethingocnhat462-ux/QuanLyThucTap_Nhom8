import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import logoKSP from '../images/logo.png';

const InternshipUnitsPage = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("Tất cả");
  const [units, setUnits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost/get_units.php')
      .then((res) => res.json())
      .then((data) => {
        setUnits(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Lỗi fetch dữ liệu:", err);
        setLoading(false);
      });
  }, []);

  const filteredUnits = units.filter((unit) => {
    const unitName = unit.TenDonVi || "";
    const matchesSearch = unitName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "Tất cả" || unitName.includes(filterType);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
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

      {/* Search Bar Container */}
      <div className="max-w-5xl mx-auto px-4 -mt-12 relative z-20 w-full">
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

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto mt-12 p-6 w-full flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
            {loading ? (
            <div className="col-span-full text-center py-20 font-bold text-blue-900">Đang kết nối CSDL...</div>
            ) : filteredUnits.length > 0 ? (
            filteredUnits.map((item) => (
                <div key={item.MaDV} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(30,58,138,0.1)] hover:-translate-y-2 transition-all duration-500 border border-gray-100">
                    <div className="relative h-56 bg-gray-100 overflow-hidden">
                    <span className={`absolute top-5 right-5 px-4 py-1.5 rounded-full text-[10px] font-black text-white z-10 shadow-lg backdrop-blur-md ${parseInt(item.ChiTieu) > 0 ? 'bg-green-500/90' : 'bg-red-500/90'}`}>
                        {parseInt(item.ChiTieu) > 0 ? 'CÒN CHỖ' : 'HẾT CHỖ'} 
                    </span>
                    
                    <span className="absolute bottom-5 left-5 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-lg text-[10px] font-black text-blue-900 z-10 shadow-sm uppercase">
                        {item.TenDonVi.includes('THPT') ? 'THPT' : 'THCS'} 
                    </span>

                    <img 
                        src={item.img_url || `http://localhost/uploads/default.jpg`} 
                        alt={item.TenDonVi} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=No+Image'; }}
                    />
                    </div>

                    <div className="p-7">
                    <h3 className="text-xl font-black text-blue-950 uppercase leading-tight group-hover:text-blue-600 transition-colors duration-300">
                        {item.TenDonVi}
                    </h3>
                    <p className="text-gray-500 text-sm mt-2 line-clamp-1">📍 {item.DiaChi}</p>
                    <div className="mt-4 flex items-center justify-between">
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-[10px] font-bold" title="Chỉ tiêu">🎯 {item.ChiTieu}</div>
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
                    {t('Không tìm thấy trường nào phù hợp')}...
                </p>
            </div>
            )}
        </div>
      </div>

      {/* Footer Section - Đã được đưa ra ngoài hoàn toàn */}
      <footer className="relative pt-16 pb-8 bg-[#0f172a] text-slate-300 mt-auto">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-2 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-2xl p-2 shadow-xl shadow-blue-500/10">
                  <img src={logoKSP} alt="Logo Khoa Sư Phạm" className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="text-blue-400 text-[10px] tracking-widest font-bold uppercase mb-1">{t('Trường Đại học Quy Nhơn')}</p>
                  <h3 className="text-white font-bold text-2xl tracking-tight leading-tight">{t('KHOA SƯ PHẠM')}</h3>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
                {t('Đào tạo những thế hệ nhà giáo tương lai tâm huyết, tài năng.')}
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider relative inline-block">
                {t('Hệ thống')}
                <span className="absolute -bottom-1 left-0 w-8 h-[2px] bg-blue-500"></span>
              </h4>
              <ul className="text-sm space-y-3 list-none p-0 m-0">
                <li><Link to="/" className="no-underline text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-400"></span>{t('Trang chủ')}</Link></li>
                                  <li><Link to="/quy-trinh" className="no-underline text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-400"></span>{t('Quy trình thực tập')}</Link></li>
                <li><Link to="/gioi-thieu" className="no-underline text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-400"></span>{t('Giới thiệu')}</Link></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider relative inline-block">
                {t('Liên hệ')}
                <span className="absolute -bottom-1 left-0 w-8 h-[2px] bg-blue-500"></span>
              </h4>
              <div className="space-y-4 text-sm text-slate-400">
                <p>📍 170 An Dương Vương, Quy Nhơn, Gia Lai</p>
                <p>📞 (0256) 3846 156</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} {t('Khoa Sư phạm - Đại học Quy Nhơn')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InternshipUnitsPage;