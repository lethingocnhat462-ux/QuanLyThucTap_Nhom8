import React from 'react';

const ProcessPage = () => {
  const steps = [
    {
      id: "01",
      title: "Đăng nhập hệ thống",
      desc: "Xác thực danh tính qua cổng bảo mật AI của Khoa Sư Phạm. Đảm bảo an toàn dữ liệu tuyệt đối.",
      icon: "🧠",
      // Màu sắc Neon chủ đạo cho Step 1 (Xanh dương -> Tím)
      color: "from-cyan-400 via-blue-500 to-indigo-600",
      // Hiệu ứng phát sáng đặc trưng
      glow: "group-hover:shadow-[0_0_50px_rgba(34,211,238,0.3)] group-hover:border-cyan-400/50"
    },
    {
      id: "02",
      title: "Đăng ký nguyện vọng",
      desc: "Hệ thống gợi ý đơn vị thực tập dựa trên chuyên ngành và năng lực đào tạo thực tế.",
      icon: "📊",
      // Màu Neon chủ đạo cho Step 2 (Tím -> Hồng)
      color: "from-fuchsia-400 via-purple-500 to-pink-600",
      glow: "group-hover:shadow-[0_0_50px_rgba(232,121,249,0.3)] group-hover:border-fuchsia-400/50"
    },
    {
      id: "03",
      title: "Chờ xét duyệt",
      desc: "Phân tích và điều phối dữ liệu nguyện vọng một cách thông minh đến hội đồng thẩm định.",
      icon: "⚡",
      // Màu Neon chủ đạo cho Step 3 (Lục -> Lam)
      color: "from-emerald-400 via-teal-500 to-blue-600",
      glow: "group-hover:shadow-[0_0_50px_rgba(52,211,153,0.3)] group-hover:border-emerald-400/50"
    },
    {
      id: "04",
      title: "Nhận thông báo",
      desc: "Xuất quyết định thực tập chính thức đính kèm mã định danh QR bảo mật của hệ thống.",
      icon: "🚀",
      // Màu Neon chủ đạo cho Step 4 (Cam -> Vàng)
      color: "from-orange-400 via-amber-500 to-yellow-500",
      glow: "group-hover:shadow-[0_0_50px_rgba(251,146,60,0.3)] group-hover:border-orange-400/50"
    }
  ];

  return (
    // Nền tối sâu thẳm để làm nổi bật Neon
    <div className="relative min-h-screen overflow-hidden font-sans selection:bg-cyan-900 selection:text-cyan-100 bg-gradient-to-b from-[#0b1736] via-[#0f1f45] to-[#132a5e]">
      
      {/* --- LAYER NỀN VŨ TRỤ SỐ (CYBER BACKGROUND) --- */}
      <div className="fixed inset-0 -z-10">
        {/* Lưới Grid xanh neon mờ */}
        <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
        
        {/* Các quầng sáng màu (Mesh Gradient) tạo độ sâu và cảm giác công nghệ */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-600/40 blur-[150px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-600/40 blur-[150px] animate-pulse-slow" style={{ animationDelay: '5s' }}></div>

        {/* Tia quét mờ lướt nhẹ dọc màn hình */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-scan-line"></div>
        </div>
      </div>
      {/* TIÊU ĐỀ CHÍNH - Chỉnh lại để nổi chữ trên nền tối */}
        <div className="text-center mb-36 mt-20 space-y-6">
          {/* Label nhỏ với hiệu ứng Ping xanh Cyan */}
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/50 backdrop-blur-xl shadow-[0_0_15px_rgba(34,211,238,0.2)] animate-fade-in">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
            <span className="text-[11px] font-mono text-cyan-200 font-bold uppercase tracking-[0.4em]">Core Protocol v8.0</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[1.1] tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            QUY TRÌNH <br/>
            <span className="animate-gradient-text drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">THỰC TẬP AI</span>
          </h1>
          <p className="max-w-xl mx-auto text-slate-300 font-medium text-lg leading-relaxed">
            Nền tảng tự động hóa quy trình nghiệp vụ thông minh cho sinh viên <br/>
            <span className="text-white font-bold">Khoa Sư phạm — Đại học Quy Nhơn.</span>
          </p>
        </div>

        {/* DANH SÁCH CÁC BƯỚC (Bản Glassmorphism Neon) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-10 xl:px-15 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Hiệu ứng phát quang khi hover - Đã chỉnh rực rỡ hơn */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${step.color} rounded-[2.8rem] opacity-0 group-hover:opacity-10 blur-2xl transition duration-500`}></div>
              
              {/* Nền kính xanh Neon - Nổi chữ trắng cực rõ */}
              <div className={`relative h-full bg-gradient-to-b from-slate-800/80 to-slate-900/80 backdrop-blur-3xl border border-white/5 p-10 rounded-[2.5rem] flex flex-col items-start transition-all duration-500 group-hover:translate-y-[-12px] ${step.glow}`}>
                
                {/* Số thứ tự nghệ thuật chìm */}
                <div className="absolute top-8 right-10 text-5xl font-black text-white/5 group-hover:text-cyan-400/10 transition-colors duration-500 select-none font-mono italic">
                  {step.id}
                </div>

                {/* Icon nổi bật với hiệu ứng drop-shadow neon */}
                <div className={`relative mb-12 text-7xl transform group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]`}>
                  {step.icon}
                </div>
                {/* Tiêu đề - Chuyển sang trắng tinh khiết hoặc Neon */}
<h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>
                
                {/* Nội dung - Chữ sáng rõ trên nền tối */}
                <p className="text-slate-300 text-sm leading-relaxed font-medium mb-12 group-hover:text-cyan-100 transition-colors">
                  {step.desc}
                </p>

                {/* Thanh tiến trình (Progress bar) Neon */}
                <div className="mt-auto w-full space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Khởi tạo...</span>
                    <span className="text-[10px] font-mono text-slate-300">Step 0{index + 1}</span>
                  </div>
                  <div className="h-[4px] w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${step.color} w-0 group-hover:w-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(34,211,238,0.5)]`}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      <footer className="mt-40 pt-16 border-t border-cyan-400/20 w-full bg-[#0f1f45]/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.4)]">

  <div className="flex flex-col md:flex-row justify-between items-center gap-12 px-12 py-16 w-full">

    <div className="text-center md:text-left space-y-3">
      <h2 className="text-white font-black text-3xl tracking-tighter uppercase">
        QNU <span className="text-cyan-400 italic">Pedagogy</span>
      </h2>
      <p className="text-slate-300 text-[10px] font-mono uppercase tracking-[0.5em]">
        QUẢN LÝ THỰC TẬP SƯ PHẠM — Nhóm 08
      </p>
    </div>

    <div className="flex gap-16">
      <div className="text-center">
        <span className="block text-slate-400 text-[9px] font-mono uppercase tracking-widest mb-2">
          Build Version
        </span>
        <span className="text-slate-300 text-xs font-bold bg-white/[0.03] px-3 py-1 rounded-full border border-white/5">
          8.0.2 STABLE
        </span>
      </div>

      <div className="text-center">
        <span className="block text-slate-400 text-[9px] font-mono uppercase tracking-widest mb-2">
          Encryption
        </span>
        <span className="text-cyan-400 text-xs font-extrabold uppercase tracking-widest flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
          NHOM 8
        </span>
      </div>
    </div>

  </div>

   <div className="pb-10 text-center opacity-40">
    <p className="text-slate-400 text-[9px] font-mono uppercase tracking-[1.5em]">
    © MMXXVI UNIVERSITY OF QUY NHON
    </p>
  </div>

</footer>



      {/* CSS CUSTOMIZATION */}
      <style>{`
        /* Lưới Grid xanh neon mờ dạng đường kẻ mảnh */
        .bg-cyber-grid {
          background-size: 50px 50px;
          background-image: 
            linear-gradient(to right, rgba(34, 211, 238, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34, 211, 238, 0.05) 1px, transparent 1px);
        }

        @keyframes scan-line {
          0% { transform: translateY(-100px); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { transform: translateY(100vh); opacity: 0; }
        }

        @keyframes gradient-text {
          0%, 100% { background-position: left center; }
          50% { background-position: right center; }
        }

        .animate-scan-line {
          animation: scan-line 10s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-pulse-slow {
          animation: pulse 15s ease-in-out infinite;
        }

        /* Chữ Gradient Neon cực mạnh */
        .animate-gradient-text {
          background: linear-gradient(to right, #22d3ee, #c084fc, #22d3ee);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-text 5s ease infinite;
        }

        /* Hiệu ứng Fade in */
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
export default ProcessPage;