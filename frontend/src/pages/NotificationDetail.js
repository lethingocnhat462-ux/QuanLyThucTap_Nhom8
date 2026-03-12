import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Import các tệp ảnh từ thư mục images của bạn
import hinhThucTap1 from '../images/ảnh thực tập.jpg';
import hinhThucTap2 from '../images/ảnh thực tập 2.jpg';
import hinhThucTap3 from '../images/ảnh thực tập 3.jpg';

const NotificationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Kho lưu trữ nội dung chi tiết của 3 thông báo
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

          {/* CHÈN HÌNH MỤC 1 */}
          <div className="my-8">
            <img 
              src={hinhThucTap1} 
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

          {/* CHÈN HÌNH MỤC 2 */}
          <img 
            src={hinhThucTap2} 
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
              <tbody className="bg-white divide-y divide-gray-100 uppercase">
                <tr className="hover:bg-blue-50/50 transition-colors">
                  <td className="px-4 py-4 font-mono font-bold text-slate-900">01</td>
                  <td className="px-4 py-4 font-mono font-bold text-slate-900">20260001</td>
                  <td className="px-4 py-4 font-extrabold text-slate-900">Nguyễn Văn A</td>
                  <td className="px-4 py-4 text-blue-800 font-bold">Trường THPT Quy Nhơn</td>
                  <td className="px-4 py-4 italic font-medium text-slate-600">Giảng dạy Tin học</td>
                </tr>
                <tr className="hover:bg-blue-50/50 transition-colors">
                  <td className="px-4 py-4 font-mono font-bold text-slate-900">02</td>
                  <td className="px-4 py-4 font-mono font-bold text-slate-900">20260002</td>
                  <td className="px-4 py-4 font-extrabold text-slate-900">Trần Thị B</td>
                  <td className="px-4 py-4 text-blue-800 font-bold">Trường THPT Global</td>
                  <td className="px-4 py-4 italic font-medium text-slate-600">Giảng dạy Tin học</td>
                </tr>
                <tr className="bg-gray-50">
                  <td colSpan="5" className="px-4 py-3 text-center text-gray-500 font-medium italic">Dữ liệu đang tiếp tục được cập nhật...</td>
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
               src={hinhThucTap3} 
               alt="Graduation and Internship"
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-10">
                <p className="text-white text-xl font-bold italic border-l-4 border-blue-500 pl-4 uppercase tracking-tight">"Hoàn thành chặng đường tri thức - Vững bước tương lai sư phạm"</p>
             </div>
          </div>

          <p className="text-slate-800 font-normal leading-relaxed">
            Ban lãnh đạo <strong className="font-bold text-slate-900">Khoa Sư Phạm - Đại học Quy Nhơn</strong> chúc mừng toàn thể sinh viên đã hoàn thành xuất sắc đợt thực tập sư phạm tại các trường phổ thông đối tác. Để hoàn tất quy trình xét điểm và cấp chứng nhận, sinh viên cần thực hiện đúng các thủ tục sau:
          </p>

          <h3 className="font-bold text-2xl text-blue-900 border-b-2 border-blue-100 pb-2 pt-4">1. Thời gian và Hình thức nộp báo cáo</h3>
          <ul className="list-disc ml-5 space-y-3 text-slate-800 font-medium">
            <li><span className="font-bold">Thời hạn cuối:</span> Trước 17:00 ngày 30/06/2026.</li>
            <li><span className="font-bold">Hình thức 1:</span> Nộp file số (PDF) lên hệ thống quản lý thực tập nội bộ.</li>
            <li><span className="font-bold">Hình thức 2:</span> Nộp bản cứng tại Văn phòng Khoa (P.204) cho Trợ lý đào tạo.</li>
          </ul>

          <h3 className="font-bold text-2xl text-blue-900 border-b-2 border-blue-100 pb-2 pt-4">2. Hồ sơ cần chuẩn bị</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-blue-50 rounded-xl border border-blue-100 shadow-sm">
               <h4 className="font-bold text-blue-800 mb-3 underline tracking-tight uppercase text-sm">Hồ sơ chuyên môn:</h4>
               <ul className="text-sm space-y-2 text-slate-700 font-medium">
                 <li>• Nhật ký thực tập có xác nhận hàng tuần.</li>
                 <li>• 02 giáo án giảng dạy xuất sắc nhất.</li>
                 <li>• Báo cáo thu hoạch cuối đợt (theo mẫu).</li>
               </ul>
            </div>
            <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-100 shadow-sm">
               <h4 className="font-bold text-emerald-800 mb-3 underline tracking-tight uppercase text-sm">Hồ sơ đánh giá:</h4>
               <ul className="text-sm space-y-2 text-slate-700 font-medium">
                 <li>• Phiếu đánh giá của giáo viên hướng dẫn.</li>
                 <li>• Biên bản tổng kết điểm của đơn vị tiếp nhận.</li>
                 <li>• Giấy xác nhận hoàn thành thực tập.</li>
               </ul>
            </div>
          </div>

          <h3 className="font-bold text-2xl text-blue-900 border-b-2 border-blue-100 pb-2 pt-4">3. Lễ tổng kết đợt thực tập</h3>
          <p className="text-slate-800 font-normal">
            Dự kiến lễ tổng kết và trao giải thưởng "Sinh viên thực tập tiêu biểu" sẽ diễn ra vào:
          </p>
          <div className="flex items-center gap-6 bg-slate-50 p-6 rounded-2xl border border-gray-200">
             <div className="bg-white p-4 rounded-xl shadow-md text-center min-w-[100px] border-b-4 border-blue-600">
                <span className="block text-4xl font-black text-blue-600">15</span>
                <span className="text-[12px] font-bold text-gray-500 uppercase tracking-widest">THÁNG 07</span>
             </div>
             <div>
                <p className="font-bold text-xl text-slate-900">Hội trường A1 - Quy Nhon University</p>
                <p className="text-sm text-slate-500 font-medium italic mt-1">Thành phần: Toàn thể sinh viên thực tập và Giảng viên hướng dẫn.</p>
             </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mt-8">
            <p className="text-sm text-red-900 font-black uppercase mb-2 tracking-wider">⚠️ Cảnh báo quan trọng:</p>
            <p className="text-sm text-red-800 font-medium leading-relaxed">
              Sinh viên nộp báo cáo trễ hạn sẽ bị trừ <span className="font-bold underline">1.0 điểm</span> vào cột điểm đánh giá thái độ chuyên môn. Những trường hợp không nộp hồ sơ sẽ không được xét tốt nghiệp đúng hạn.
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
        <div className="text-7xl mb-6">⚠️</div>
        <h2 className="text-2xl font-black text-slate-800 mb-2 uppercase tracking-tighter">Không tìm thấy dữ liệu</h2>
        <p className="text-slate-500 mb-8 leading-relaxed font-medium">Thông báo này có thể đã bị gỡ bỏ hoặc ID không chính xác trong cơ sở dữ liệu.</p>
        <button onClick={() => navigate('/')} className="bg-blue-600 text-white px-10 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg active:scale-95">
          Quay lại Trang Chủ
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-[#f0f4f8] min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-[2.5rem] overflow-hidden border border-white">
        {/* Header Style Trang Nghiêm Xanh Đen */}
        <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] p-12 text-white relative">
          <div className="absolute top-0 right-0 p-8 opacity-5">
             <div className="text-[12rem] font-black italic select-none">QNU</div>
          </div>
          <button 
            onClick={() => navigate('/')} 
            className="mb-8 flex items-center gap-2 text-blue-400 hover:text-white transition-colors font-black uppercase text-[10px] tracking-[0.3em]"
          >
            <span className="text-xl">←</span> Quay lại hệ thống
          </button>
          <div className="flex gap-3 mb-6">
             <span className="bg-blue-500/20 border border-blue-400/40 px-5 py-1.5 rounded-full text-[11px] font-black tracking-widest uppercase italic text-blue-200">
               {data.category}
             </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-8 drop-shadow-sm">{data.title}</h1>
          <div className="flex items-center gap-6 text-slate-400 text-[11px] font-mono border-t border-white/10 pt-8 uppercase tracking-[0.2em] font-bold">
             <span className="flex items-center gap-2">📅 {data.date}</span>
             <span className="opacity-30">|</span>
             <span>✍️ Admin: Khoa Sư Phạm</span>
          </div>
        </div>

        {/* Nội dung bài viết - Đã chỉnh độ đậm chữ */}
        <div className="p-10 md:p-16 text-slate-800 leading-relaxed text-[1.1rem] font-normal">
          {data.content}
        </div>

        {/* Chân trang thông báo */}
        <div className="bg-slate-50 p-10 border-t border-slate-100 flex flex-col md:flex-row gap-6 justify-between items-center text-center md:text-left">
          <div className="text-[10px] text-slate-500 font-mono italic tracking-[0.15em] uppercase font-bold">
            Hệ thống quản lý thực tập sư phạm - Nhóm 8 QNU <br/>
            <span className="text-blue-600">Document ID: {id?.toUpperCase()}</span>
          </div>
          <div className="flex gap-6">
             <button className="text-slate-800 text-xs font-black hover:text-blue-600 transition-colors tracking-widest uppercase border-b-2 border-transparent hover:border-blue-600">In thông báo</button>
             <button className="text-slate-800 text-xs font-black hover:text-blue-600 transition-colors tracking-widest uppercase border-b-2 border-transparent hover:border-blue-600">Tải file đính kèm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationDetail;