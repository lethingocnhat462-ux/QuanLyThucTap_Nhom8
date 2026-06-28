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
      <div className="min-h-screen bg-[#f8fafc] flex flex-col relative overflow-hidden font-sans">
        
        {/* Header */}
        <div className="relative z-10 bg-gradient-to-br from-blue-800 to-indigo-900 text-white py-20 px-6 text-center shadow-md border-b border-white/10">
          <h1 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight drop-shadow-sm">
            {t('Giới thiệu')} <span className="text-blue-300">{t('Hệ thống')}</span>
          </h1>
          <p className="max-w-3xl mx-auto text-blue-100 text-lg leading-relaxed font-normal">
            {t('Nền tảng hiện đại kết nối sinh viên và các trường đối tác tại')}{' '}
            <span className="font-bold text-white border-b border-blue-400 pb-1">
              {t('Trường Đại học Quy Nhơn')}
            </span>
          </p>
        </div>

        {/* Nội dung chính */}
        <div className="relative z-10 flex-1 max-w-7xl mx-auto py-16 px-6 w-full">
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-wider uppercase mb-4">
                {t('Đội ngũ phát triển')}
              </h2>
              <div className="h-[3px] w-24 bg-blue-600 mx-auto rounded-full"></div>
            </div>
          </div>

          {loading ? (
            <div className="text-center text-slate-500 font-medium py-10">Đang tải dữ liệu nhóm...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((member) => (
                <div 
                  key={member.id} 
                  className="group bg-white border border-slate-200 p-8 rounded-[2rem] transition-all duration-300 text-center hover:shadow-md hover:border-blue-300"
                >
                  <div className="relative w-32 h-32 mx-auto mb-6 rounded-full border-2 border-slate-100 p-1 group-hover:border-blue-500 transition-colors duration-300 shadow-sm overflow-hidden">
                    <img 
                      src={`${API_URL}/uploads/${member.avatar_url}`} 
                      alt={member.ho_ten} 
                      className="w-full h-full object-cover rounded-full" 
                      onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {member.ho_ten}
                  </h3>
                  <p className="text-blue-600 bg-blue-50 border border-blue-100 inline-block px-4 py-1 rounded-full text-xs uppercase tracking-wider font-semibold">
                    {member.vai_tro}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-16 pb-6">
            <Link to="/" className="inline-block px-10 py-3.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-md uppercase tracking-wider text-sm no-underline">
              {t('Quay lại trang chủ')}
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative pt-16 pb-8 bg-[#0f172a] text-slate-300">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-slate-800"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-2 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-2xl p-2 shadow-md">
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