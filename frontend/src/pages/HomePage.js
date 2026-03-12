import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


// --- CÁC COMPONENT CON ĐƯỢC ĐƯA RA NGOÀI ĐỂ ĐẢM BẢO CẤU TRÚC ĐÚNG ---

const StatCard = ({ icon, title, value, color }) => (
  <div className="glass-card-tech p-6 group cursor-pointer" style={{ '--glow-color': color }}>
    <div className="text-3xl mb-4" style={{ filter: `drop-shadow(0 0 5px ${color}88)` }}>{icon}</div>
    <div className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">{title}</div>
    <div className="text-3xl font-black text-slate-800 group-hover:text-blue-600 transition-colors">{value}</div>
  </div>
);

const NewsItem = ({ tag, title, time }) => (
  <div className="glass-card-tech p-5 flex gap-5 items-center cursor-pointer group">
    <div className="w-12 h-12 bg-blue-50 rounded-lg flex-shrink-0 flex items-center justify-center border border-blue-100 group-hover:border-blue-400">
      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
    </div>
    <div>
      <div className="flex gap-3 items-center mb-1">
        <span className="text-[9px] font-bold text-blue-500 uppercase">{tag}</span>
        <span className="text-[9px] text-slate-400">{time}</span>
      </div>
      <h4 className="text-md font-bold text-slate-700 group-hover:text-blue-600 transition-colors">{title}</h4>
    </div>
  </div>
);

const Step = ({ num, text, active }) => (
  <div className="flex items-center gap-4">
    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold border ${active ? 'bg-blue-600 border-blue-400 text-white shadow-md shadow-blue-200' : 'border-slate-200 text-slate-400 bg-slate-50'
      }`}>{num}</div>
    <span className={`text-xs font-bold uppercase tracking-tighter ${active ? 'text-slate-800' : 'text-slate-400'}`}>{text}</span>
  </div>
);

// --- COMPONENT CHÍNH ---

function HomePage() {
  const navigate = useNavigate();
  const [bubbles, setBubbles] = useState([]);
  const [glitters, setGlitters] = useState([]); // Thêm state cho kim tuyến

  useEffect(() => {
    // 1. Giữ nguyên logic tạo Bong bóng và đốm sáng bay
    const newBubbles = Array.from({ length: 30 }).map((_, i) => {
      const isSparkle = Math.random() > 0.7;
      return {
        id: i,
        size: isSparkle ? (Math.random() * 6 + 4 + 'px') : (Math.random() * 40 + 20 + 'px'),
        left: Math.random() * 100 + '%',
        duration: Math.random() * 15 + 10 + 's',
        delay: Math.random() * 5 + 's',
        opacity: isSparkle ? 0.8 : 0.4,
        isSparkle: isSparkle
      };
    });
    setBubbles(newBubbles);

    // 2. Tạo thêm 50 hạt kim tuyến nhỏ rải rác cố định trên màn hình
    const newGlitters = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + '%',
      top: Math.random() * 100 + '%',
      size: Math.random() * 3 + 1 + 'px',
      delay: Math.random() * 5 + 's',
      duration: Math.random() * 3 + 2 + 's'
    }));
    setGlitters(newGlitters);
  }, []);

  return (
    <>
      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;600&family=Montserrat:wght@400;600&display=swap');
      @keyframes shine {
  0% { left: -100%; }
  100% { left: 100%; }
}
.btn-glow-effect {
  position: relative;
  overflow: hidden;
}
.btn-glow-effect::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -100%;
  width: 50%;
  height: 200%;
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(30deg);
  transition: none;
}
.btn-glow-effect:hover::after {
  animation: shine 0.7s ease-in-out;
}
        /* ===== GLOBAL ===== */
        html, body {
          margin: 0;
          overflow-x: hidden;
          background: #f8fafc;
          font-family: 'Inter', system-ui, sans-serif;
          color: #1e293b;
        }

        /* ===== LIGHT BACKGROUND WITH GRID ===== */
        .bg-ai-network {
          position: relative;
          background: 
            radial-gradient(circle at 15% 20%, rgba(59, 130, 246, 0.08), transparent 45%),
            radial-gradient(circle at 85% 80%, rgba(59, 130, 246, 0.05), transparent 50%),
            linear-gradient(180deg, #f0f7ff 0%, #ffffff 100%);
          min-height: 100vh;
          width: 100%;
        }

        .bg-ai-network::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 80px 80px;
          animation: gridMove 40s linear infinite;
          pointer-events: none;
        }

        @keyframes gridMove {
          from { transform: translateY(0); }
          to { transform: translateY(80px); }
        }

        /* ===== KIM TUYẾN (GLITTER) NHẤP NHÁY ===== */
        .glitter {
          position: absolute;
          background: #ffffff;
          border-radius: 50%;
          box-shadow: 0 0 8px 2px rgba(255, 255, 255, 1), 0 0 15px 4px rgba(59, 130, 246, 0.6);
          animation: glitterTwinkle infinite ease-in-out;
          pointer-events: none;
          z-index: 2; 
        }

        @keyframes glitterTwinkle {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(0.4) rotate(0deg); 
            filter: blur(1px);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.2) rotate(180deg); 
            filter: blur(0px);
            box-shadow: 0 0 12px 3px rgba(255, 255, 255, 1), 0 0 20px 6px rgba(59, 130, 246, 0.8);
          }
        }

        /* ===== LIGHT GLASS CARD ===== */
        .glass-card-tech {
          position: relative;
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(12px) saturate(180%);
          -webkit-backdrop-filter: blur(12px) saturate(180%);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
          transition: all .35s cubic-bezier(.23, 1, .32, 1);
        }

        .glass-card-tech:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid var(--glow-color, rgba(59, 130, 246, 0.5));
          box-shadow: 0 0 20px 2px var(--glow-color, rgba(59, 130, 246, 0.3));
        }

        /* ===== BUBBLES ===== */
        .bubble {
          position: absolute;
          bottom: -100px;
          background: radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.25), rgba(255, 255, 255, 0.4));
          border: 1.5px solid rgba(59, 130, 246, 0.2);
          border-radius: 50%;
          animation: floatUp linear infinite;
          z-index: 1;
        }

        .sparkle-item {
          position: absolute;
          bottom: -100px;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 0 10px #fff, 0 0 15px rgba(59, 130, 246, 0.6);
          animation: floatUp linear infinite, twinkle 1.5s ease-in-out infinite;
          z-index: 1;
        }

        @keyframes floatUp {
          from { transform: translateY(0) scale(1); opacity: 0; }
          20% { opacity: var(--item-opacity); }
          80% { opacity: var(--item-opacity); }
          to { transform: translateY(-120vh) scale(1.5); opacity: 0; }
        }

        @keyframes twinkle {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.3); opacity: 1; }
        }

        .heading-ai-glow {
          background: linear-gradient(to bottom, #1e3a8a 30%, #2563eb 90%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 900;
          letter-spacing: 0.03em; 
          line-height: 1.4 !important;
          filter: drop-shadow(0 2px 2px rgba(0,0,0,0.05));
        }

        .text-main-blue { color: #1e3a8a; }

        .btn-start {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
          color: white !important;
        }
      `}</style>

      <div className="bg-ai-network min-h-screen relative overflow-hidden flex flex-col">
        <div className="absolute inset-0 z-0 pointer-events-none">
          {glitters.map(g => (
            <div key={`g-${g.id}`} className="glitter" style={{
              width: g.size, height: g.size, left: g.left, top: g.top,
              animationDuration: g.duration, animationDelay: g.delay
            }} />
          ))}
        </div>

        <div className="absolute inset-0 z-0 pointer-events-none">
          {bubbles.map(b => (
            <div key={`b-${b.id}`} className={b.isSparkle ? "sparkle-item" : "bubble"} style={{
              width: b.size, height: b.size, left: b.left,
              animationDuration: b.duration, animationDelay: b.delay,
              '--item-opacity': b.opacity
            }} />
          ))}
        </div>

        <header className="relative pt-16 pb-16 px-4 text-center z-10">
          <div className="inline-block px-4 py-1.5 mb-8 text-[10px] font-bold tracking-[0.4em] text-blue-600 uppercase bg-blue-50 border border-blue-200 rounded-full">
            Intelligence Education System
          </div>

          <h1 className="text-5xl md:text-7xl mb-8 leading-tight heading-ai-glow uppercase">
            HỆ THỐNG QUẢN LÝ <br />
            <span className="text-main-blue">THỰC TẬP SƯ PHẠM</span>
          </h1>

 <p className="w-full max-w-none text-slate-500 text-lg md:text-xl mb-10 font-light flex items-center justify-center gap-1 whitespace-nowrap" 
   style={{ 
     fontFamily: "'Lexend', sans-serif",
     letterSpacing: '0.01em'
   }}>
  Nâng tầm trải nghiệm thực tập với công nghệ 
  <span className="text-blue-600 font-semibold px-2 py-0.5 mx-1 bg-blue-50 rounded-md shadow-sm">
    Smart-AI
  </span> 
  , kết nối tri thức và tối ưu hóa tương lai.
</p>
          <div className="flex justify-center gap-6">
  {/* NÚT BẮT ĐẦU NGAY: Sáng rực ánh xanh */}
  <button 
    onClick={() => navigate('/login')} 
    className="btn-start btn-glow-effect px-10 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.8)] hover:brightness-125"
  >
    BẮT ĐẦU NGAY
  </button>

  {/* NÚT XEM QUY TRÌNH: Sáng tinh tế với viền xanh */}
  <Link 
    to="/quy-trinh" 
    className="flex items-center gap-2 px-8 py-3.5 border border-slate-200 text-slate-700 font-medium rounded-xl bg-white/80 backdrop-blur-sm transition-all duration-300 hover:border-blue-400 hover:text-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:bg-white hover:scale-105 no-underline shadow-sm"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.644C3.67 8.5 7.652 6 12 6c4.348 0 8.332 2.5 9.964 5.678a1.012 1.012 0 0 1 0 .644C20.33 15.5 16.348 18 12 18c-4.348 0-8.332-2.5-9.964-5.678Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
    <span>XEM QUY TRÌNH</span>
  </Link>
</div>
        </header>

        <section className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6 relative z-10 w-full">
          <StatCard icon="👨‍🎓" title="Sinh viên" value="1,250+" color="#3b82f6" />
          <StatCard icon="🏫" title="Trường đối tác" value="45" color="#a855f7" />
          <StatCard icon="📄" title="Báo cáo" value="85%" color="#06b6d4" />
          <StatCard icon="✅" title="Hoàn thành" value="320" color="#10b881" />
        </section>

        <main className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10 w-full flex-grow">
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-bold text-main-blue flex items-center gap-3">
              <span className="w-1.5 h-8 bg-blue-500 rounded-full"></span>
              BẢN TIN CÔNG NGHỆ
            </h3>
            <div className="grid gap-6">
              <NewsItem tag="AI UPDATE" title="Hướng dẫn nộp hồ sơ thực tập qua cổng AI Smart" time="3 giờ trước" />
              <NewsItem tag="LỊCH TRÌNH" title="Cập nhật danh sách phân công trường đợt 2 - Năm 2026" time="1 ngày trước" />
            </div>
          </div>

          <aside className="glass-card-tech p-8 h-fit shadow-md">
            <h3 className="text-lg font-bold mb-8 text-blue-600 tracking-widest uppercase">Lộ trình số</h3>
            <div className="space-y-6">
              <Step num="1" text="Đăng ký nguyện vọng" active />
              <Step num="2" text="Nhận phân công AI" />
              <Step num="3" text="Thực tập số hóa" />
            </div>
          </aside>
        </main>

        <footer className="relative mt-20 pt-16 pb-8 bg-[#0f172a] overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                    KSP
                  </div>
                  <div>
                    <h3 className="text-white font-bold tracking-tight text-lg">KHOA SƯ PHẠM</h3>
                    <p className="text-blue-400 text-[10px] font-mono tracking-widest uppercase">Đại học Quy Nhơn</p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                  Hệ thống quản lý thực tập thông minh, kiến tạo hành trình sư phạm số cho sinh viên thế hệ mới.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
  {/* Cột Hệ thống */}
  <div className="space-y-3">
    <h4 className="text-slate-200 font-bold text-sm uppercase tracking-wider">Hệ thống</h4>
    <ul className="text-slate-500 text-sm space-y-2 list-none p-0">
      <li>
        <Link to="/" className="hover:text-blue-400 cursor-pointer transition-colors no-underline text-inherit">
          Trang chủ
        </Link>
      </li>
      <li>
        {/* LIÊN KẾT: Quy trình ở footer lên trang quy trình */}
        <Link to="/quy-trinh" className="hover:text-blue-400 cursor-pointer transition-colors no-underline text-inherit">
          Quy trình
        </Link>
      </li>
    </ul>
  </div>

  {/* Cột Hỗ trợ */}
  <div className="space-y-3">
    <h4 className="text-slate-200 font-bold text-sm uppercase tracking-wider">Hỗ trợ</h4>
    <ul className="text-slate-500 text-sm space-y-2 list-none p-0">
      <li className="hover:text-blue-400 cursor-pointer transition-colors">Hướng dẫn</li>
      <li>
        {/* LIÊN KẾT: Liên hệ lên trang giới thiệu */}
        <Link to="/gioi-thieu" className="hover:text-blue-400 cursor-pointer transition-colors no-underline text-inherit">
          Liên hệ
        </Link>
      </li>
    </ul>
  </div>
</div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-white/5 p-6 rounded-2xl">
                <span className="text-slate-400 text-[10px] font-mono uppercase tracking-widest block mb-4">System Status</span>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-slate-800 bg-blue-500 flex items-center justify-center text-[10px] text-white font-bold">AI</div>
                    <div className="w-8 h-8 rounded-full border-2 border-slate-800 bg-emerald-500 flex items-center justify-center text-[10px] text-white font-bold">V8</div>
                  </div>
                  <div className="h-8 w-[1px] bg-white/10"></div>
                  <div>
                    <p className="text-white text-xs font-bold uppercase">Nhom 08 - Dev</p>
                    <p className="text-emerald-400 text-[10px] font-mono">● Operational</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-500 text-[11px] font-mono">
                © 2026 EDUSMART AI - KIẾN TẠO TƯƠNG LAI
              </p>
              <div className="flex gap-6">
                <span className="text-slate-600 text-[10px] font-mono hover:text-slate-400 cursor-pointer">PRIVACY POLICY</span>
                <span className="text-slate-600 text-[10px] font-mono hover:text-slate-400 cursor-pointer">TERMS OF SERVICE</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default HomePage;