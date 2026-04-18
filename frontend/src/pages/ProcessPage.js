import React from 'react';
import { useTranslation } from 'react-i18next'; 
import { FiCpu, FiClipboard, FiZap, FiSend } from 'react-icons/fi';

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
        <footer className="mt-20 pt-8 border-t border-cyan-400/20 w-full bg-[#0f1f45]/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-10 text-center md:text-left py-8 flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h2 className="text-white font-black text-2xl tracking-tighter uppercase">
                QNU <span className="text-cyan-400 italic">Pedagogy</span>
              </h2>
              <p className="text-slate-400 text-[9px] font-mono uppercase tracking-[0.3em] mt-1">
                {t('HỆ THỐNG QUẢN LÝ')} — {t('NHÓM 08')}
              </p>
            </div>
            <div className="text-slate-400 text-[8px] font-mono uppercase tracking-[1em] opacity-40">
              © MMXXVI {t('Đại học Quy Nhơn')}
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