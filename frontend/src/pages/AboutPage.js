import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import imgNhat from '../images/member1.jpg';
import imgPhuong from '../images/member2.jpg';
import imgLam from '../images/member3.jpg';
import imgQuynh from '../images/member4.jpg';
import imgThuan from '../images/member5.jpg';
import imgDieu from '../images/member6.jpg';

const AboutPage = () => {
  const { t } = useTranslation();

  const members = [
    { id: 1, name: "Lê Thị Ngọc Nhất", role: t("Trưởng nhóm"), img: imgNhat },
    { id: 2, name: "Đinh Thị Hồng Phương", role: t("Lập trình viên"), img: imgPhuong },
    { id: 3, name: "Phan Thị Thanh Lam", role: t("Thiết kế UI/UX"), img: imgLam },
    { id: 4, name: "Phan Võ Như Quỳnh", role: t("Quản trị CSDL"), img: imgQuynh },
    { id: 5, name: "Bùi Thị Thanh Thuận", role: t("Kiểm thử (Tester)"), img: imgThuan },
    { id: 6, name: "Mai Thị Mỹ Diệu", role: t("Phân tích hệ thống"), img: imgDieu },
  ];

  return (
    <div className="min-h-screen bg-[#e2e8f0] flex flex-col relative overflow-hidden font-sans">
      
      {/* 1. ĐỐM MÀU TRẠM NỀN */}
      <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] bg-blue-400 rounded-full blur-[120px] opacity-30 z-0"></div>
      <div className="absolute bottom-[5%] right-[-5%] w-[40%] h-[50%] bg-indigo-400 rounded-full blur-[100px] opacity-40 z-0"></div>

      {/* 2. HIỆU ỨNG HẠT KIM TUYẾN (To hơn và rực rỡ hơn) */}
<div className="absolute inset-0 pointer-events-none z-0">
  {[...Array(60)].map((_, i) => {
    const colors = ['#ffffff', '#f7e581d0', '#60a5fa', '#f0abfc']; // Trắng, Vàng kim, Xanh, Tím nhẹ
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 5 + 3; // Kích thước to hơn (3px - 8px)
    
    return (
      <div 
        key={`glitter-${i}`}
        className="absolute animate-twinkle-spin"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: randomColor,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          borderRadius: '2px', // Hình hơi vuông để bắt sáng như kim tuyến thật
          boxShadow: `0 0 12px ${randomColor}`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${Math.random() * 4 + 2}s`,
          opacity: 0.8
        }}
      />
    );
  })}
</div>
      {/* 3. HIỆU ỨNG BONG BÓNG HẠT  */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div 
            key={`bubble-${i}`}
            className="absolute rounded-full animate-float blur-[1px]"
            style={{
              width: `${Math.random() * 12 + 6}px`,
              height: `${Math.random() * 12 + 6}px`,
              background: 'rgba(255, 255, 255, 0.3)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 15px rgba(255, 255, 255, 0.5)',
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${Math.random() * 20 + 10}s`
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {members.map((member) => (
            <div 
              key={member.id} 
              className="group relative bg-white/40 backdrop-blur-xl border border-white/50 p-8 rounded-[2.5rem] transition-all duration-500 text-center hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:bg-white/60"
            >
              <div className="relative w-36 h-36 mx-auto mb-6 rounded-full border-4 border-white/80 p-1 group-hover:border-blue-500 transition-all duration-500 shadow-xl overflow-hidden">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                {member.name}
              </h3>
              <p className="text-blue-700 bg-white/50 border border-blue-100/50 inline-block px-4 py-1 rounded-full text-xs uppercase tracking-widest font-bold">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-20 pb-10">
          <Link to="/" className="inline-block px-14 py-4 bg-blue-700 text-white font-bold rounded-2xl hover:bg-blue-800 transition-all duration-300 shadow-xl shadow-blue-900/20 uppercase tracking-widest text-sm no-underline hover:scale-105 active:scale-95">
            {t('Quay lại trang chủ')}
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes twinkleSpin {
    0%, 100% { 
      opacity: 0.3; 
      transform: scale(0.6) rotate(0deg); 
    }
    50% { 
      opacity: 1; 
      transform: scale(1.2) rotate(180deg); 
      filter: brightness(1.5);
    }
  }
  .animate-twinkle-spin { 
    animation: twinkleSpin ease-in-out infinite; 
  }
        @keyframes lineMove {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-line { animation: lineMove 3s linear infinite; }
        
        @keyframes float {
          from { transform: translateY(110vh) scale(1); opacity: 0; }
          20% { opacity: 0.4; }
          80% { opacity: 0.4; }
          to { transform: translateY(-10vh) scale(1.5); opacity: 0; }
        }
        .animate-float { animation: float linear infinite; }

        /* KEYFRAME CHO KIM TUYẾN */
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .animate-twinkle { animation: twinkle ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default AboutPage;