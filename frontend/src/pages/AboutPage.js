import React from 'react';
import { Link } from 'react-router-dom';
import imgNhat from '../images/member1.jpg';
import imgPhuong from '../images/member2.jpg';
import imgLam from '../images/member3.jpg';
import imgQuynh from '../images/member4.jpg';
import imgThuan from '../images/member5.jpg';
import imgDieu from '../images/member6.jpg';

const AboutPage = () => {
  const members = [
    { id: 1, name: "Lê Thị Ngọc Nhất", role: "Trưởng nhóm", img: imgNhat },
    { id: 2, name: "Đinh Thị Hồng Phương", role: "Lập trình viên", img: imgPhuong },
    { id: 3, name: "Phan Thị Thanh Lam", role: "Thiết kế UI/UX", img: imgLam },
    { id: 4, name: "Phan Võ Như Quỳnh", role: "Quản trị CSDL", img: imgQuynh },
    { id: 5, name: "Bùi Thị Thanh Thuận", role: "Kiểm thử (Tester)", img: imgThuan },
    { id: 6, name: "Mai Thị Mỹ Diệu", role: "Phân tích hệ thống", img: imgDieu },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col relative overflow-hidden font-sans">
      
      {/* Hiệu ứng Hạt bong bóng Tinh thể (Sang trọng) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full animate-float blur-[1px]"
            style={{
              width: `${Math.random() * 10 + 4}px`,
              height: `${Math.random() * 10 + 4}px`,
              background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(59,130,246,0.4) 100%)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 15px rgba(59,130,246,0.5)',
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${Math.random() * 20 + 10}s`
            }}
          />
        ))}
      </div>

      {/* Header Giới thiệu - Gradient sâu */}
      <div className="relative z-10 bg-gradient-to-b from-[#1e3a8a] to-[#0f172a] text-white py-20 px-6 text-center border-b border-white/10">
        <h1 className="text-5xl font-black mb-6 uppercase tracking-tighter italic">
          Giới thiệu <span className="text-blue-400">Hệ thống</span>
        </h1>
        <p className="max-w-3xl mx-auto text-blue-100/80 text-xl leading-relaxed font-light">
          Nền tảng hiện đại kết nối sinh viên và các trường đối tác tại <span className="font-bold text-white border-b-2 border-blue-500 pb-1">ĐH Quy Nhơn</span>
        </p>
      </div>

      {/* Danh sách thành viên - Glassmorphism */}
      <div className="relative z-10 flex-1 max-w-6xl mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <div className="text-center mb-16">
  <div className="inline-block relative">
    <h2 className="text-3xl font-light text-white tracking-[0.2em] uppercase mb-4">
      Đội ngũ phát triển
    </h2>

    {/* Line chạy */}
    <div className="h-[3px] w-full bg-white/10 rounded-full overflow-hidden">
      <div className="h-full w-full animate-line bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
    </div>

  </div>
</div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {members.map((member) => (
            <div 
              key={member.id} 
              className="group relative bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 hover:border-blue-500/50 transition-all duration-500 text-center hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            >
              {/* Vòng sáng ẩn phía sau ảnh */}
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl group-hover:bg-blue-500/40 transition-all duration-500"></div>
              
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full border-2 border-white/20 p-1 group-hover:border-blue-400 transition-all duration-500 shadow-2xl">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-700" 
                  onError={(e) => e.target.src = 'https://via.placeholder.com/150'} 
                />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors tracking-tight">
                {member.name}
              </h3>
              <p className="text-blue-300/60 text-xs uppercase tracking-[0.15em] font-semibold italic">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        {/* Nút Quay lại - Hiệu ứng Glow */}
        <div className="text-center mt-20 pb-10">
          <Link to="/" className="inline-block px-14 py-4 bg-white text-[#0f172a] font-bold rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-blue-500/40 uppercase tracking-widest text-sm no-underline">
            Quay lại trang chủ
          </Link>
        </div>
      </div>

      <style>{`

@keyframes lineMove {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
}

.animate-line {
  background-size: 200px 100%;
  animation: lineMove 2.5s linear infinite;
}
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          20% { opacity: 0.6; }
          80% { opacity: 0.6; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        .animate-float { animation: float linear infinite; }
      `}</style>
    </div>
  );
};

export default AboutPage;