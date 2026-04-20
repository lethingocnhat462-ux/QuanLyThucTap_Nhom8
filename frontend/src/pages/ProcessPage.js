import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 
import { FiCpu, FiClipboard, FiZap, FiSend } from 'react-icons/fi';
import logoKSP from '../images/logo.png';

const ProcessPage = () => {
  const { t } = useTranslation(); // 2. Khai báo hàm t()

  const steps = [
  {
    id: "01",
    title: "Đăng nhập hệ thống",
    desc: "Xác thực danh tính qua cổng bảo mật AI của Khoa Sư Phạm. Đảm bảo an toàn dữ liệu tuyệt đối.",
    icon: <FiCpu size={50} strokeWidth={1.5} />, // Dùng FiCpu thay cho FiBrain (rất hợp với AI)
    color: "from-cyan-400 via-blue-500 to-indigo-600",
    glow: "group-hover:shadow-[0_0_50px_rgba(34,211,238,0.3)] group-hover:border-cyan-400/50"
  },
  {
    id: "02",
    title: "Đăng ký nguyện vọng",
    desc: "Hệ thống gợi ý đơn vị thực tập dựa trên chuyên ngành và năng lực đào tạo thực tế.",
    icon: <FiClipboard size={50} strokeWidth={1.5} />, // Cái này giữ nguyên vì có sẵn
    color: "from-fuchsia-400 via-purple-500 to-pink-600",
    glow: "group-hover:shadow-[0_0_50px_rgba(232,121,249,0.3)] group-hover:border-fuchsia-400/50"
  },
  {
    id: "03",
    title: "Nhận phân công AI",
    desc: "Thuật toán AI tối ưu hóa khoảng cách và sự tương thích giữa sinh viên và đơn vị tiếp nhận.",
    icon: <FiZap size={50} strokeWidth={1.5} />, // Cái này giữ nguyên vì có sẵn
    color: "from-emerald-400 via-teal-500 to-blue-600",
    glow: "group-hover:shadow-[0_0_50px_rgba(52,211,153,0.3)] group-hover:border-emerald-400/50"
  },
  {
    id: "04",
    title: "Thực tập số hóa",
    desc: "Theo dõi tiến độ, nộp báo cáo và tương tác với giảng viên hướng dẫn ngay trên nền tảng.",
    icon: <FiSend size={50} strokeWidth={1.5} />, // Dùng FiSend (icon máy bay giấy) thay cho FiRocket, nhìn rất thanh thoát
    color: "from-orange-400 via-amber-500 to-yellow-500",
    glow: "group-hover:shadow-[0_0_50px_rgba(251,146,60,0.3)] group-hover:border-orange-400/50"
  }
];

  return (
    <div className="relative min-h-screen overflow-hidden font-sans selection:bg-cyan-600 selection:text-cyan-100 bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe] to-[#dbeafe]">
      
      {/* --- LAYER NỀN VŨ TRỤ SỐ --- */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-cyber-grid opacity-30"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-400/20 blur-[150px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-400/20 blur-[150px] animate-pulse-slow" style={{ animationDelay: '5s' }}></div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-36 mt-20 space-y-10 relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-blue-400/30 bg-white/60 backdrop-blur-xl shadow-sm animate-fade-in">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
            <span className="text-[11px] font-mono text-blue-700 font-bold uppercase tracking-[0.4em]">Core Protocol v8.0</span>
          </div>

        <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[1.3] tracking-normal mb-4">
  {t('QUY TRÌNH')} <br/>
  <span className="animate-gradient-text drop-shadow-[0_0_30px_rgba(34,211,238,0.5)] uppercase tracking-[0.05em]">
    {t('SỐ HÓA')}
  </span>
</h1>

          <p className="max-w-none px-4 mx-auto text-slate-600 font-semibold text-lg leading-relaxed mt-10">
            {t('Lộ trình thực hiện thực tập sư phạm thông minh')} — 
            <span className="text-blue-600 font-extrabold ml-1">
              {t('Trường Đại học Quy Nhơn')}
            </span>
          </p>
        </div>
<div className="flex flex-col items-center mb-16 mt-[-65px] relative z-20">
  {/* Đường kẻ: Tăng opacity và đổi màu sắc nét hơn */}
  <div className="flex items-center gap-4 w-full max-w-lg opacity-80"> {/* Tăng opacity lên 80 */}
    <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
    
    {/* Icon CPU: Thêm hiệu ứng phát sáng nhẹ */}
    <div className="relative">
       <FiCpu className="text-blue-600 text-sm animate-pulse relative z-10" />
       <div className="absolute inset-0 bg-blue-400 blur-md opacity-50 animate-pulse"></div>
    </div>

    <div className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-blue-500/50 to-transparent"></div>
  </div>
  
  {/* Chữ nhỏ: Đậm màu hơn một chút để dễ đọc */}
  <div className="mt-2 text-[9px] font-mono font-bold tracking-[0.4em] text-blue-600/70 uppercase">
    Next Generation Workflow
  </div>
</div>
        {/* DANH SÁCH CÁC BƯỚC */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-10 xl:px-15 max-w-7xl mx-auto">
       {steps.map((step, index) => (
      <div key={index} className="relative group">
      {/* Hiệu ứng hào quang phía sau sáng hơn */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${step.color} rounded-[2.8rem] opacity-0 group-hover:opacity-20 blur-2xl transition duration-500`}></div>
      
      {/* KHUNG CARD SÁNG */}
      <div className={`relative h-full bg-white/60 backdrop-blur-3xl border border-white p-10 rounded-[2.5rem] flex flex-col items-start transition-all duration-500 group-hover:translate-y-[-12px] group-hover:bg-white/90 shadow-2xl shadow-blue-100/50 ${step.glow}`}>
        
        {/* Số thứ tự ID - đổi sang màu tối nhạt */}
        <div className={`absolute top-8 right-10 text-6xl font-black select-none font-mono italic tracking-tighter opacity-20 group-hover:opacity-100 transition-all duration-700`}>
  <span className={`bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
    {step.id}
  </span>
</div>
        {/* ICON - Giữ nguyên hiệu ứng rực rỡ của em vì nó rất đẹp */}
        <div className={`text-5xl mb-6 p-3 inline-flex rounded-2xl bg-gradient-to-br ${step.color} shadow-lg shadow-blue-200`}>
          <div className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
            {step.icon}
          </div>
        </div>

        {/* TIÊU ĐỀ - Đổi sang màu tối để nổi bật trên nền trắng */}
        <h3 className="text-2xl font-black text-slate-800 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
          {t(step.title)}
        </h3>
        
        {/* MÔ TẢ - Đổi sang màu xám đậm */}
        <p className="text-slate-500 text-sm leading-relaxed font-medium mb-12 group-hover:text-slate-700 transition-colors">
          {t(step.desc)}
        </p>

        <div className="mt-auto w-full space-y-4">
          <div className="flex justify-between items-end">
            <span className="text-[10px] font-mono text-blue-500 font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Initializing...</span>
            <span className="text-[10px] font-mono text-slate-400">Step 0{index + 1}</span>
          </div>
          <div className="h-[4px] w-full bg-slate-100 rounded-full overflow-hidden">
            <div className={`h-full bg-gradient-to-r ${step.color} w-0 group-hover:w-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(34,211,238,0.5)]`}></div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

        {/* FOOTER */}
        <footer className="relative mt-20 pt-16 pb-8 bg-[#0f172a] text-slate-300">
  {/* Hiệu ứng viền mỏng phía trên tạo sự tách biệt */}
  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-16">
      
      {/* Cột 1: Giới thiệu Khoa */}
      <div className="col-span-1 lg:col-span-2 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 flex items-center justify-center transform hover:rotate-6 transition-transform duration-300 bg-white rounded-2xl p-2 shadow-xl shadow-blue-500/10">
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
           <Link 
  to="/gioi-thieu" 
  className="no-underline text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"
>
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

    {/* Phần chân cuối cùng (Copyright) */}
    <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
      <p>© {new Date().getFullYear()} {t('Khoa Sư phạm - Trường Đại học Quy Nhơn. All rights reserved.')}</p>
      <div className="flex items-center gap-6">
  <span className="cursor-pointer hover:text-blue-400 transition-colors uppercase tracking-widest">
    {t('Chính sách')}
  </span>
  <span className="cursor-pointer hover:text-blue-400 transition-colors uppercase tracking-widest">
    {t('Bảo mật')}
  </span>
</div>
    </div>
  </div>
</footer>
      </div>

      <style>{`
        .bg-cyber-grid {
          background-size: 50px 50px;
          background-image: 
            linear-gradient(to right, rgba(34, 211, 238, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34, 211, 238, 0.05) 1px, transparent 1px);
        }
        @keyframes scan-line {
          0% { transform: translateY(-100px); opacity: 0; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        .animate-scan-line { animation: scan-line 10s linear infinite; }
        .animate-gradient-text {
          background: linear-gradient(to right, #22d3ee, #c084fc, #22d3ee);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-text 5s ease infinite;
        }
        @keyframes gradient-text {
          0%, 100% { background-position: left center; }
          50% { background-position: right center; }
        }
      `}</style>
    </div>
  );
};

export default ProcessPage;