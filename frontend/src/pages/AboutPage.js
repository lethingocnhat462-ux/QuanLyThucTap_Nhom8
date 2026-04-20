import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logoKSP from '../images/logo.png';

// Định nghĩa URL gốc của Backend
const API_URL = "http://localhost"; 

const AboutPage = () => {
  const { t } = useTranslation();
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/get_members.php`)
      .then((res) => res.json())
      .then((data) => {
        setMembers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Lỗi fetch thành viên:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="min-h-screen bg-[#e2e8f0] flex flex-col relative overflow-hidden font-sans">
        
        {/* --- PHẦN HIỆU ỨNG NỀN --- */}
        <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] bg-blue-400 rounded-full blur-[120px] opacity-30 z-0"></div>
        <div className="absolute bottom-[5%] right-[-5%] w-[40%] h-[50%] bg-indigo-400 rounded-full blur-[100px] opacity-40 z-0"></div>

        <div className="absolute inset-0 pointer-events-none z-0">
          {[...Array(60)].map((_, i) => (
            <div 
              key={`glitter-${i}`}
              className="absolute animate-twinkle-spin"
              style={{
                width: `${Math.random() * 5 + 3}px`,
                height: `${Math.random() * 5 + 3}px`,
                backgroundColor: ['#ffffff', '#f7e581d0', '#60a5fa', '#f0abfc'][Math.floor(Math.random() * 4)],
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                borderRadius: '2px',
                boxShadow: `0 0 12px white`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 4 + 2}s`,
                opacity: 0.8
              }}
            />
          ))}
        </div>

        {/* Header */}
        <div className="relative z-10 bg-gradient-to-br from-blue-800 to-indigo-900 text-white py-20 px-6 text-center shadow-2xl border-b border-white/20">
          <h1 className="text-5xl font-black mb-6 uppercase tracking-tighter italic drop-shadow-md">
            {t('Giới thiệu')} <span className="text-blue-300">{t('Hệ thống')}</span>
          </h1>
          <p className="max-w-3xl mx-auto text-blue-100 text-xl leading-relaxed font-light">
            {t('Nền tảng hiện đại kết nối sinh viên và các trường đối tác tại')}{' '}
            <span className="font-bold text-white border-b-2 border-blue-400 pb-1">
              {t('Trường Đại học Quy Nhơn')}
            </span>
          </p>
        </div>

        {/* Nội dung chính */}
        <div className="relative z-10 flex-1 max-w-7xl mx-auto py-20 px-6">
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-widest uppercase mb-4">
                {t('Đội ngũ phát triển')}
              </h2>
              <div className="h-[4px] w-full bg-slate-300 rounded-full overflow-hidden">
                <div className="h-full w-full animate-line bg-blue-600"></div>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="text-center text-slate-600 font-bold">Đang tải dữ liệu nhóm...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {members.map((member) => (
                <div 
                  key={member.id} 
                  className="group relative bg-white/40 backdrop-blur-xl border border-white/50 p-8 rounded-[2.5rem] transition-all duration-500 text-center hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:bg-white/60"
                >
                  <div className="relative w-36 h-36 mx-auto mb-6 rounded-full border-4 border-white/80 p-1 group-hover:border-blue-500 transition-all duration-500 shadow-xl overflow-hidden">
                    <img 
                      src={`${API_URL}/uploads/${member.avatar_url}`} 
                      alt={member.ho_ten} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }}
                    />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {member.ho_ten}
                  </h3>
                  <p className="text-blue-700 bg-white/50 border border-blue-100/50 inline-block px-4 py-1 rounded-full text-xs uppercase tracking-widest font-bold">
                    {member.vai_tro}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-20 pb-10">
            <Link to="/" className="inline-block px-14 py-4 bg-blue-700 text-white font-bold rounded-2xl hover:bg-blue-800 transition-all duration-300 shadow-xl shadow-blue-900/20 uppercase tracking-widest text-sm no-underline hover:scale-105 active:scale-95">
              {t('Quay lại trang chủ')}
            </Link>
          </div>
        </div>

        {/* --- CSS ANIMATION --- */}
        <style>{`
          @keyframes twinkleSpin {
            0%, 100% { opacity: 0.3; transform: scale(0.6) rotate(0deg); }
            50% { opacity: 1; transform: scale(1.2) rotate(180deg); filter: brightness(1.5); }
          }
          .animate-twinkle-spin { animation: twinkleSpin ease-in-out infinite; }
          @keyframes lineMove {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-line { animation: lineMove 3s linear infinite; }
        `}</style>
      </div>

      {/* Footer nằm hẳn bên ngoài div chính để không bị lồng vào Grid */}
      <footer className="relative pt-16 pb-8 bg-[#0f172a] text-slate-300">
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
                                  <li><Link to="/don-vi" className="no-underline text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-400"></span>{t('Đơn vị thực tập')}</Link></li>
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
          <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
            <p>© {new Date().getFullYear()} {t('Khoa Sư phạm - Đại học Quy Nhơn')}</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default AboutPage;