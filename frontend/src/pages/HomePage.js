import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; 


function HomePage() {
  const navigate = useNavigate(); // Dùng để điều hướng giống như lệnh Redirect

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold">K</div>
          <h1 className="text-xl font-bold text-blue-900 leading-tight">KHOA SƯ PHẠM<br/><span className="text-sm">ĐH QUY NHƠN</span></h1>
        </div>
        <div className="hidden md:flex gap-6 font-medium text-gray-700">
  <Link to="/" className="hover:text-blue-600">Trang chủ</Link>
  <Link to="/gioi-thieu" className="hover:text-blue-600">Giới thiệu</Link>
  {/* ĐỔI href="#" THÀNH to="/don-vi" */}
  <Link to="/don-vi" className="hover:text-blue-600 font-bold text-blue-900">Đơn vị thực tập</Link>
  <Link to="/quy-trinh" className="hover:text-blue-600">Quy trình</Link>
</div>
        {/* SỬA TẠI ĐÂY */}
        <button 
          onClick={() => navigate('/login')} 
          className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Đăng nhập
        </button>
      </nav>

      <header className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-20 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase tracking-wide">Hệ thống quản lý thực tập sư phạm</h2>
        <p className="max-w-2xl mx-auto text-blue-100 mb-8">Nền tảng kết nối sinh viên, giảng viên và các trường phổ thông đối tác...</p>
        <div className="flex justify-center gap-4">
          {/* SỬA TẠI ĐÂY */}
          <button 
            onClick={() => navigate('/login')} 
            className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 shadow-lg"
          >
            Đăng ký thực tập ngay
          </button>
        </div>
      </header>

      <section className="max-w-6xl mx-auto -mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
        <StatCard icon="👨‍🎓" title="Sinh viên thực tập" value="1250" color="border-blue-500" />
        <StatCard icon="🏫" title="Trường đối tác" value="45" color="border-green-500" />
        <StatCard icon="📄" title="Báo cáo đã nộp" value="85%" color="border-yellow-500" />
        <StatCard icon="✅" title="Hoàn thành đợt" value="320" color="border-purple-500" />
      </section>

      <main className="max-w-6xl mx-auto py-16 px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-2xl font-bold border-l-8 border-blue-900 pl-4 mb-8">Bản tin</h3>
          <NewsItem tag="HỒ SƠ" title="Hướng dẫn nộp hồ sơ thực tập sư phạm 2" time="3 giờ trước" />
          <NewsItem tag="LỊCH THI" title="Danh sách phân công trường thực tập" time="1 ngày trước" />
        </div>
        <aside className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
          <h3 className="text-xl font-bold mb-6">Quy trình thực tập</h3>
          <Step num="1" text="Đăng ký nguyện vọng" active />
          <Step num="2" text="Nhận phân công" />
          <Step num="3" text="Thực tập tại trường" />
        </aside>
      </main>
    </div>
  );
}

// Các Component hỗ trợ giữ nguyên như cũ
const StatCard = ({ icon, title, value, color }) => (
  <div className={`bg-white p-6 rounded-2xl shadow-lg border-b-4 ${color} hover:transform hover:-translate-y-2 transition`}>
    <div className="text-3xl mb-2">{icon}</div>
    <div className="text-gray-500 text-sm font-medium">{title}</div>
    <div className="text-2xl font-bold text-gray-800">{value}</div>
  </div>
);

const NewsItem = ({ tag, title, time }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
    <span className="text-blue-600 font-bold text-xs">{tag}</span>
    <h4 className="text-lg font-bold mt-1 text-gray-800 uppercase">{title}</h4>
    <p className="text-gray-400 text-sm mt-2 font-medium">Cập nhật: {time}</p>
  </div>
);

const Step = ({ num, text, active }) => (
  <div className="flex items-center gap-4 mb-6">
    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${active ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>{num}</div>
    <div className={`font-semibold ${active ? 'text-gray-800' : 'text-gray-400'}`}>{text}</div>
  </div>
);

export default HomePage;