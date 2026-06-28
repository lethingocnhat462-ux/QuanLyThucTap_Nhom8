import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logoKSP from '../images/logo.png';

// --- CÁC COMPONENT CON ---

const StatCard = ({ icon, title, value, year }) => (
  <div className="glass-card-tech p-6 group cursor-pointer">
    <div className="text-3xl mb-4">{icon}</div>
    <div className="text-slate-500 text-[13px] font-bold uppercase tracking-wider mb-1">{title}</div>
    <div className="flex flex-col">
      <div className="text-3xl font-black text-slate-800 group-hover:text-blue-600 transition-colors">
        {value}
      </div>
      <div className="text-[11px] text-slate-400 font-medium mt-1">
        Năm {year}
      </div>
    </div>
  </div>
);

const NewsItem = ({ tag, title, time, id }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  return (
    <div 
      onClick={() => navigate(`/thong-bao/${id}`)}
      className="glass-card-tech p-5 flex gap-5 items-center cursor-pointer group"
    >
      <div className="w-12 h-12 bg-blue-50 rounded-lg flex-shrink-0 flex items-center justify-center border border-blue-100 group-hover:border-blue-400">
        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
      </div>
      <div>
        <div className="flex gap-3 items-center mb-1">
          <span className="text-[9px] font-bold text-blue-500 uppercase">{t(tag)}</span>
          <span className="text-[9px] text-slate-400">{t(time)}</span>
        </div>
        <h4 className="text-md font-bold text-slate-700 group-hover:text-blue-600 transition-colors">{t(title)}</h4>
      </div>
    </div>
  );
};

const Step = ({ num, text, active }) => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center gap-4">
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold border ${active ? 'bg-blue-600 border-blue-400 text-white shadow-md shadow-blue-200' : 'border-slate-200 text-slate-400 bg-slate-50'
        }`}>{num}</div>
      <span className={`text-xs font-bold uppercase tracking-tighter ${active ? 'text-slate-800' : 'text-slate-400'}`}>{t(text)}</span>
    </div>
  );
};

// --- COMPONENT CHÍNH ---

function HomePage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;600&family=Montserrat:wght@400;600&display=swap');
        html, body { margin: 0; overflow-x: hidden; background: #f8fafc; font-family: 'Inter', system-ui, sans-serif; color: #1e293b; }
        .bg-ai-network {
          position: relative;
          background: linear-gradient(180deg, #f0f7ff 0%, #ffffff 100%);
          min-height: 100vh; width: 100%;
        }
        .bg-ai-network::before {
  display: none;
}
        .glass-card-tech {
          position: relative; background: rgba(255, 255, 255, 0.8);
          border-radius: 24px; border: 1px solid rgba(226, 232, 240, 0.8);
          box-shadow: 0 4px 15px -3px rgba(0, 0, 0, 0.05); transition: all .2s ease-in-out;
        }
        .glass-card-tech:hover {
          transform: translateY(-2px); background: #ffffff;
          border: 1px solid rgba(59, 130, 246, 0.3);
          box-shadow: 0 10px 20px -5px rgba(59, 130, 246, 0.1);
        }
        .heading-ai-glow {
          color: #1e3a8a;
          font-weight: 900; letter-spacing: 0.03em; line-height: 1.4 !important;
        }
        .text-main-blue { color: #2563eb; }
      `}</style>

      <div className="bg-ai-network min-h-screen relative overflow-hidden flex flex-col">
        
        <header className="relative pt-16 pb-16 px-4 text-center z-10">
          <h1 className="text-5xl md:text-7xl mb-8 leading-tight heading-ai-glow uppercase">
            {t('HỆ THỐNG QUẢN LÝ')} <br />
            <span className="text-main-blue">{t('THỰC TẬP SƯ PHẠM')}</span>
          </h1>
          <p className="w-full text-slate-500 text-lg md:text-xl mb-10 font-light flex items-center justify-center gap-1">
            {t('Nâng tầm trải nghiệm thực tập với công nghệ')} 
            <span className="text-blue-600 font-semibold px-2 py-0.5 mx-1 bg-blue-50 rounded-md">Smart-AI</span> 
            {t(', kết nối tri thức và tối ưu hóa tương lai.')}
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <button 
              onClick={() => navigate('/login')} 
              className="px-10 py-4 bg-[#2563eb] text-white font-bold rounded-2xl transition-all duration-200 hover:bg-blue-700 active:scale-95 shadow-lg shadow-blue-500/20"
            >
              <span className="flex items-center gap-2">
                {t('BẮT ĐẦU NGAY')}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </header>

        <section className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6 relative z-10 w-full">
          <StatCard title={t("Sinh viên")} value="1,250+" year="2025-2026" />
          <StatCard title={t("Trường đối tác")} value="30+" year="2025-2026" />
          <StatCard title={t("Báo cáo")} value="99%" year="2025-2026" />
          <StatCard title={t("Hoàn thành")} value="1200+" year="2025-2026" />
        </section>

        <main className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10 w-full flex-grow">
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-bold text-[#1e3a8a] flex items-center gap-3">
              <span className="w-1.5 h-8 bg-blue-500 rounded-full"></span>
              {t('BẢN TIN CÔNG NGHỆ')}
            </h3>
            <div className="grid gap-6">
              <NewsItem id="huong-dan-nop-ho-so" tag="AI UPDATE" title="Hướng dẫn nộp hồ sơ thực tập qua cổng AI Smart" time="3 giờ trước" />
              <NewsItem id="cap-nhat-danh-sach" tag="LỊCH TRÌNH" title="Cập nhật danh sách phân công trường đợt 2 - Năm 2026" time="1 ngày trước" />
              <NewsItem id="ket-thuc-thuc-tap" tag="THÔNG BÁO" title="Thông báo kết thúc đợt thực tập sư phạm và nộp báo cáo cuối kỳ" time="Vừa xong" />
            </div>
          </div>

          <aside className="glass-card-tech p-8 h-fit shadow-sm">
            <h3 className="text-lg font-bold mb-8 text-blue-600 tracking-widest uppercase">{t('Lộ trình số')}</h3>
            <div className="space-y-6">
              <Step num="1" text="Đăng ký nguyện vọng" active />
              <Step num="2" text="Nhận phân công AI" />
              <Step num="3" text="Thực tập số hóa" />
            </div>
          </aside>
        </main>

        <footer className="relative mt-20 pt-16 pb-8 bg-[#0f172a] text-slate-300">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-16">
              
              {/* Cột 1: Giới thiệu Khoa */}
              <div className="col-span-1 lg:col-span-2 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 flex items-center justify-center bg-white rounded-2xl p-2 shadow-md">
                    <img 
                      src={logoKSP} 
                      alt="Logo Khoa Sư Phạm" 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                  <div>
                    <p className="text-blue-500 text-[13px] tracking-[0.15em] font-black uppercase mb-0">
                      {t('Trường Đại học Quy Nhơn')}
                    </p>
                    <h3 className="text-white text-xl font-bold tracking-wide leading-tight">
                      {t('KHOA SƯ PHẠM')}
                    </h3>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
                  {t('Đào tạo những thế hệ nhà giáo tương lai tâm huyết, tài năng, góp phần xây dựng nền giáo dục hiện đại cho đất nước.')}
                </p>
              </div>

              {/* Cột 2: Hệ thống */}
              <div className="space-y-6">
                <h4 className="text-white font-bold text-sm uppercase tracking-wider relative inline-block">
                  {t('Hệ thống')}
                  <span className="absolute -bottom-1 left-0 w-8 h-[2px] bg-blue-500"></span>
                </h4>
                <ul className="text-sm space-y-3 list-none p-0">
                  <li><Link to="/" className="no-underline text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-400"></span>{t('Trang chủ')}</Link></li>
                  <li><Link to="/quy-trinh" className="no-underline text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-400"></span>{t('Quy trình thực tập')}</Link></li>
                  <li><Link to="/gioi-thieu" className="no-underline text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-400"></span>{t('Giới thiệu')}</Link></li>
                  <li><Link to="/don-vi" className="no-underline text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-400"></span>{t('Đơn vị thực tập')}</Link></li>
                </ul>
              </div>

              {/* Cột 3: Liên hệ */}
              <div className="space-y-6">
                <h4 className="text-white font-bold text-sm uppercase tracking-wider relative inline-block">
                  {t('Liên hệ')}
                  <span className="absolute -bottom-1 left-0 w-8 h-[2px] bg-blue-500"></span>
                </h4>
                <div className="space-y-4 text-sm text-slate-400">
                  <div className="flex items-start gap-3"><span className="text-blue-400">📍</span><p>170 An Dương Vương, Quy Nhơn, Gia lai</p></div>
                  <div className="flex items-center gap-3"><span className="text-blue-400">📞</span><p>(0256) 3846 156</p></div>
                  <div className="flex items-center gap-3"><span className="text-blue-400">✉️</span><p>khoasupham@qnu.edu.vn</p></div>
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
    </>
  );
}

export default HomePage;