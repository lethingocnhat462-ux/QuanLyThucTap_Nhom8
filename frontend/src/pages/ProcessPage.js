import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 
import { FiCpu, FiClipboard, FiZap, FiSend } from 'react-icons/fi';
import logoKSP from '../images/logo.png';

const ProcessPage = () => {
  const { t } = useTranslation(); 

  const steps = [
    {
      id: "01",
      title: "Đăng nhập hệ thống",
      desc: "Xác thực danh tính qua cổng bảo mật AI của Khoa Sư Phạm. Đảm bảo an toàn dữ liệu tuyệt đối.",
      icon: <FiCpu size={50} strokeWidth={1.5} />, 
      color: "bg-cyan-500",
      textColor: "text-cyan-500",
      hoverBorder: "hover:border-cyan-400"
    },
    {
      id: "02",
      title: "Đăng ký nguyện vọng",
      desc: "Hệ thống gợi ý đơn vị thực tập dựa trên chuyên ngành và năng lực đào tạo thực tế.",
      icon: <FiClipboard size={50} strokeWidth={1.5} />, 
      color: "bg-purple-500",
      textColor: "text-purple-500",
      hoverBorder: "hover:border-purple-400"
    },
    {
      id: "03",
      title: "Nhận phân công AI",
      desc: "Thuật toán AI tối ưu hóa khoảng cách và sự tương thích giữa sinh viên và đơn vị tiếp nhận.",
      icon: <FiZap size={50} strokeWidth={1.5} />, 
      color: "bg-emerald-500",
      textColor: "text-emerald-500",
      hoverBorder: "hover:border-emerald-400"
    },
    {
      id: "04",
      title: "Thực tập số hóa",
      desc: "Theo dõi tiến độ, nộp báo cáo và tương tác với giảng viên hướng dẫn ngay trên nền tảng.",
      icon: <FiSend size={50} strokeWidth={1.5} />, 
      color: "bg-orange-500",
      textColor: "text-orange-500",
      hoverBorder: "hover:border-orange-400"
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden font-sans bg-[#f8fafc]">
      
      {/* --- LAYER NỀN ĐƠN GIẢN --- */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-24 mt-20 space-y-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.3] uppercase">
            {t('QUY TRÌNH')} <br/>
            <span className="text-blue-600 tracking-[0.05em]">
              {t('SỐ HÓA')}
            </span>
          </h1>

          <p className="max-w-none px-4 mx-auto text-slate-500 font-medium text-lg leading-relaxed">
            {t('Lộ trình thực hiện thực tập sư phạm thông minh')} — 
            <span className="text-blue-600 font-bold ml-1">
              {t('Trường Đại học Quy Nhơn')}
            </span>
          </p>
        </div>

        <div className="flex flex-col items-center mb-16 mt-[-40px] relative z-20">
          <div className="flex items-center gap-4 w-full max-w-lg opacity-60">
            <div className="h-[1px] flex-1 bg-blue-300"></div>
            <div className="relative">
               <FiCpu className="text-blue-600 text-sm" />
            </div>
            <div className="h-[1px] flex-1 bg-blue-300"></div>
          </div>
        </div>

        {/* DANH SÁCH CÁC BƯỚC */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* KHUNG CARD SÁNG */}
              <div className={`relative h-full bg-white border border-slate-200 p-8 rounded-[2rem] flex flex-col items-start transition-all duration-200 hover:shadow-lg ${step.hoverBorder}`}>
                
                {/* Số thứ tự ID */}
                <div className="absolute top-6 right-8 text-5xl font-black select-none font-mono opacity-10">
                  <span className={step.textColor}>
                    {step.id}
                  </span>
                </div>

                {/* ICON */}
                <div className={`text-4xl mb-6 p-3 inline-flex rounded-xl ${step.color} text-white shadow-sm`}>
                  {step.icon}
                </div>

                {/* TIÊU ĐỀ */}
                <h3 className="text-xl font-bold text-slate-800 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                  {t(step.title)}
                </h3>
                
                {/* MÔ TẢ */}
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  {t(step.desc)}
                </p>

                <div className="mt-auto w-full space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-mono text-blue-500 font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Ready</span>
                    <span className="text-[10px] font-mono text-slate-400">Step 0{index + 1}</span>
                  </div>
                  <div className="h-[4px] w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full ${step.color} w-full opacity-20 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <footer className="relative mt-24 pt-16 pb-8 bg-[#0f172a] text-slate-300">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-slate-800"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-16">
              
              {/* Cột 1: Giới thiệu Khoa */}
              <div className="col-span-1 lg:col-span-2 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 flex items-center justify-center bg-white rounded-2xl p-2 shadow-md">
                    <img 
                      src={logoKSP} 
                      alt="Logo Khoa Sư Phạm" 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                  <div>
                    <p className="text-blue-400 text-[10px] tracking-widest font-bold uppercase">{t('Trường Đại học Quy Nhơn')}</p>
                    <h3 className="text-white font-bold text-xl tracking-tight leading-tight">{t('KHOA SƯ PHẠM')}</h3>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
                  {t('Đào tạo những thế hệ nhà giáo tương lai tâm huyết, tài năng, góp phần xây dựng nền giáo dục hiện đại cho đất nước.')}
                </p>
              </div>

              {/* Cột 2: Liên kết hệ thống */}
              <div className="space-y-6">
                <h4 className="text-white font-bold text-sm uppercase tracking-wider relative inline-block">
                  {t('Hệ thống')}
                  <span className="absolute -bottom-1 left-0 w-8 h-[2px] bg-blue-500"></span>
                </h4>
                <ul className="text-sm space-y-3 list-none p-0">
                  <li>
                    <Link to="/" className="no-underline text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-400 transition-colors"></span>
                      {t('Trang chủ')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/don-vi" className="no-underline text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-400 transition-colors"></span>
                      {t('Đơn vị thực tập')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/gioi-thieu" className="no-underline text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-400 transition-colors"></span>
                      {t('Giới thiệu')}
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Cột 3: Liên hệ */}
              <div className="space-y-6">
                <h4 className="text-white font-bold text-sm uppercase tracking-wider relative inline-block">
                  {t('Liên hệ')}
                  <span className="absolute -bottom-1 left-0 w-8 h-[2px] bg-blue-500"></span>
                </h4>
                <div className="space-y-4 text-sm text-slate-400">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400">📍</span>
                    <p>170 An Dương Vương, Quy Nhơn, Gia Lai</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-blue-400">📞</span>
                    <p>(0256) 3846 156</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-blue-400">✉️</span>
                    <p>khoasupham@qnu.edu.vn</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Copyright */}
            <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
              <p>© {new Date().getFullYear()} {t('Khoa Sư phạm - Trường Đại học Quy Nhơn. All rights reserved.')}</p>
              <div className="flex items-center gap-6">
                <span className="cursor-pointer hover:text-blue-400 transition-colors uppercase tracking-widest">{t('Chính sách')}</span>
                <span className="cursor-pointer hover:text-blue-400 transition-colors uppercase tracking-widest">{t('Bảo mật')}</span>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style>{`
        .bg-cyber-grid {
          background-size: 50px 50px;
          background-image: 
            linear-gradient(to right, rgba(30, 41, 59, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(30, 41, 59, 0.03) 1px, transparent 1px);
        }
      `}</style>
    </div>
  );
};

export default ProcessPage;