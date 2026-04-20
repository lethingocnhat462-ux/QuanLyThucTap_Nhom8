import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const API_URL = "http://localhost";
const NotificationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Hàm xử lý in thông báo
  const handlePrint = () => {
    window.print();
  };

  const notifications = {
    "huong-dan-nop-ho-so": {
      title: "Hướng dẫn nộp hồ sơ thực tập sư phạm qua cổng AI Smart",
      date: "12/03/2026",
      category: "AI Update",
      content: (
        <div className="space-y-6">
          <p className="leading-relaxed text-slate-800 font-normal">
            Thực hiện kế hoạch chuyển đổi số trong quản lý hành chính, nhà trường chính thức triển khai hệ thống tiếp nhận hồ sơ thực tập trực tuyến. Quy trình này nhằm tạo điều kiện thuận lợi nhất cho sinh viên, đảm bảo tính chính xác và bảo mật thông tin cao.
          </p>

          <div className="my-8">
            <img 
              src={`${API_URL}/uploads/anh-thuc-tap.jpg`} 
              alt="Hướng dẫn nộp hồ sơ" 
              className="w-full max-h-[450px] object-cover rounded-[2rem] shadow-xl border-4 border-white" 
            />
            <p className="text-center text-sm text-gray-500 mt-3 italic underline decoration-blue-200">Hình 1: Giao diện cổng nộp hồ sơ trực tuyến AI Smart</p>
          </div>

          <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-600">
            <h3 className="font-bold text-blue-900 mb-3 uppercase tracking-wide text-lg">Quy trình thực hiện 4 bước:</h3>
            <ol className="list-decimal ml-5 space-y-3 text-slate-800 font-medium">
              <li><span className="font-bold">Đăng nhập:</span> Sử dụng tài khoản sinh viên nội bộ tại địa chỉ <span className="text-blue-700 font-mono">aismart.portal.edu.vn</span>.</li>
              <li><span className="font-bold">Khai báo thông tin:</span> Truy cập phân hệ "Quản lý thực tập", chọn mục "Nộp hồ sơ trực tuyến" và kiểm tra lại thông tin cá nhân.</li>
              <li><span className="font-bold">Số hóa tài liệu:</span> Đính kèm các văn bản sau (định dạng PDF):
                <ul className="list-circle ml-6 mt-2 italic text-slate-600 font-normal">
                  <li>Giấy giới thiệu thực tập (đã có xác nhận của Ban lãnh đạo Khoa).</li>
                  <li>Đơn đăng ký thực tập (theo mẫu chuẩn 2026).</li>
                  <li>Sơ yếu lý lịch chuyên môn (CV) dành cho ngành giáo dục.</li>
                </ul>
              </li>
              <li><span className="font-bold">Hoàn tất:</span> Nhấn "Xác nhận gửi hồ sơ". Hệ thống sẽ phản hồi trạng thái tiếp nhận qua Email trong vòng 24 giờ.</li>
            </ol>
            </div>
          <p className="text-sm font-semibold text-red-700 bg-red-50 p-4 rounded-lg border border-red-100">
            * Lưu ý: Các tệp tin tải lên phải rõ nét, không bị mờ và dung lượng mỗi tệp không vượt quá 5MB.
          </p>
        </div>
      )
    },
    "cap-nhat-danh-sach": {
      title: "Cập nhật danh sách phân công địa điểm thực tập đợt 2 - Năm học 2026",
      date: "11/03/2026",
      category: "Lịch trình",
      content: (
        <div className="space-y-6">
          <p className="leading-relaxed text-slate-800 font-normal">
            Căn cứ vào nguyện vọng của sinh viên và sự tiếp nhận từ các đơn vị liên kết, Văn phòng Đào tạo thông báo danh sách điều phối thực tập sư phạm Đợt 2. Đây là giai đoạn quan trọng để sinh viên rèn luyện kỹ năng đứng lớp và nghiệp vụ sư phạm thực tế.
          </p>

          <img 
            src={`${API_URL}/uploads/anh-thuc-tap-2.jpg`} 
            alt="Danh sách phân công" 
            className="w-full max-h-[400px] object-cover rounded-[2rem] shadow-lg my-6 border-2 border-gray-100" 
          />

          <div className="overflow-hidden border border-gray-200 rounded-xl shadow-sm">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="px-4 py-4 text-left font-bold uppercase tracking-wider">STT</th>
                  <th className="px-4 py-4 text-left font-bold uppercase tracking-wider">Mã Số</th>
                  <th className="px-4 py-4 text-left font-bold uppercase tracking-wider">Họ và Tên</th>
                  <th className="px-4 py-4 text-left font-bold uppercase tracking-wider">Đơn vị tiếp nhận</th>
                  <th className="px-4 py-4 text-left font-bold uppercase tracking-wider">Vị trí</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100 uppercase font-bold text-slate-900">
                <tr className="hover:bg-blue-50/50 transition-colors">
                  <td className="px-4 py-4 font-mono">01</td>
                  <td className="px-4 py-4 font-mono">20260001</td>
                  <td className="px-4 py-4">Nguyễn Văn A</td>
                  <td className="px-4 py-4 text-blue-800">Trường THPT Quy Nhơn</td>
                  <td className="px-4 py-4 italic font-medium text-slate-600">Giảng dạy Tin học</td>
                </tr>
                <tr className="hover:bg-blue-50/50 transition-colors">
                  <td className="px-4 py-4 font-mono">02</td>
                  <td className="px-4 py-4 font-mono">20260002</td>
                  <td className="px-4 py-4">Trần Thị B</td>
                  <td className="px-4 py-4 text-blue-800">Trường THPT Global</td>
                  <td className="px-4 py-4 italic font-medium text-slate-600">Giảng dạy Tin học</td>
                  </tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-3 text-slate-800 border-t pt-6">
            <p><span className="font-bold text-slate-900">Thời gian tập trung:</span> 07:30 ngày 25/03/2026 tại đơn vị tiếp nhận.</p>
            <p><span className="font-bold text-slate-900">Yêu cầu:</span> Trang phục chỉnh tề, mang theo thẻ sinh viên và sổ nhật ký thực tập.</p>
          </div>
        </div>
      )
    },
    "ket-thuc-thuc-tap": {
      title: "Thông báo kết thúc đợt thực tập sư phạm và nộp báo cáo cuối kỳ",
      date: "12/03/2026",
      category: "Thông báo",
      content: (
        <div className="space-y-6 text-justify">
          <div className="relative w-full h-80 rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl border-4 border-white">
             <img 
               src={`${API_URL}/uploads/anh-thuc-tap-3.jpg`} 
               alt="Graduation"
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-10">
                <p className="text-white text-xl font-bold italic border-l-4 border-blue-500 pl-4 uppercase tracking-tight">"Hoàn thành chặng đường tri thức - Vững bước tương lai sư phạm"</p>
             </div>
          </div>

          <p className="text-slate-800 font-normal leading-relaxed">
            Ban lãnh đạo <strong className="font-bold text-slate-900">Khoa Sư Phạm - Đại học Quy Nhơn</strong> chúc mừng toàn thể sinh viên đã hoàn thành xuất sắc đợt thực tập sư phạm tại các trường phổ thông đối tác.
          </p>

          <h3 className="font-bold text-2xl text-blue-900 border-b-2 border-blue-100 pb-2 pt-4">1. Thời gian và Hình thức nộp báo cáo</h3>
          <ul className="list-disc ml-5 space-y-3 text-slate-800 font-medium">
            <li><span className="font-bold">Thời hạn cuối:</span> Trước 17:00 ngày 30/06/2026.</li>
            <li><span className="font-bold">Hình thức:</span> Nộp file PDF lên hệ thống hoặc bản cứng tại P.204.</li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mt-8">
            <p className="text-sm text-red-900 font-black uppercase mb-2 tracking-wider">⚠️ Cảnh báo quan trọng:</p>
            <p className="text-sm text-red-800 font-medium leading-relaxed">
              Sinh viên nộp báo cáo trễ hạn sẽ bị trừ <span className="font-bold underline">1.0 điểm</span> vào cột đánh giá.
            </p>
          </div>
        </div>
      )
    }
  };

  const data = notifications[id];

if (!data) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-12 bg-white rounded-[2.5rem] shadow-2xl max-w-md border border-gray-200">
        <h2 className="text-2xl font-black text-slate-800 mb-2">Không tìm thấy dữ liệu</h2>
        <p className="text-slate-500">Thông báo này không tồn tại hoặc đã bị xóa.</p>
        <button onClick={() => navigate('/')} className="bg-blue-600 text-white px-10 py-3 rounded-full font-bold mt-6 hover:bg-blue-700 transition-all">
          Quay lại Trang Chủ
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-[#f0f4f8] min-h-screen py-10 px-4">
      <style>
        {`@media print { .no-print { display: none !important; } .print-container { box-shadow: none !important; border: none !important; width: 100% !important; margin: 0 !important; border-radius: 0 !important; } }`}
      </style>

      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-[2.5rem] overflow-hidden border border-white print-container">
        {/* Header - Sửa lại để bọc toàn bộ title */}
        <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] p-12 text-white relative">
          <button 
            onClick={() => navigate('/')} 
            className="no-print mb-8 flex items-center gap-2 text-blue-400 hover:text-white transition-colors font-black uppercase text-[10px] tracking-[0.3em]"
          >
            <span className="text-xl">←</span> Quay lại hệ thống
          </button>
          
          <span className="bg-blue-500/20 border border-blue-400/40 px-5 py-1.5 rounded-full text-[11px] font-black tracking-widest uppercase italic text-blue-200">
            {data.category}
          </span>
          
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mt-6 mb-8">
            {data.title}
          </h1>
          
          <div className="flex items-center gap-6 text-slate-400 text-[11px] font-mono border-t border-white/10 pt-8 uppercase font-bold">
             <span>📅 {data.date}</span>
             <span>✍️ Admin: Khoa Sư Phạm</span>
          </div>
        </div>

        {/* Nội dung bài viết */}
        <div className="p-10 md:p-16 text-slate-800 leading-relaxed text-[1.1rem] font-normal print-content">
          {data.content}
        </div>

        {/* Chân trang */}
        <div className="bg-slate-50 p-10 border-t border-slate-100 flex flex-col md:flex-row gap-6 justify-between items-center no-print">
          <div className="text-[10px] text-slate-500 font-mono italic tracking-[0.15em] uppercase font-bold text-center md:text-left">
            Hệ thống quản lý thực tập sư phạm - Nhóm 8 QNU <br/>
            <span className="text-blue-600">Document ID: {id?.toUpperCase()}</span>
          </div>
          <button 
            onClick={handlePrint}
            className="bg-slate-800 text-white px-8 py-3 rounded-full text-xs font-black hover:bg-blue-600 transition-all tracking-widest uppercase shadow-lg"
          >
            In thông báo
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationDetail;