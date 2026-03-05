import React, { useState, useEffect } from 'react';

const SubmissionPage = () => {
  // --- STATE QUẢN LÝ DỮ LIỆU ---
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [tenTaiLieu, setTenTaiLieu] = useState('');
  const [danhSach, setDanhSach] = useState([]);
  const maSV = '4551150001'; // Mã sinh viên mẫu khớp với Database

  // --- 1. LẤY DANH SÁCH BÁO CÁO TỪ BACKEND ---
  const fetchSubmissions = async () => {
    try {
      console.log("🔄 Đang tải danh sách báo cáo...");
      const res = await fetch(`http://localhost:5000/api/submissions/${maSV}`);
      if (!res.ok) throw new Error("Lỗi kết nối Server");
      const data = await res.json();
      setDanhSach(data);
    } catch (error) {
      console.error("❌ Lỗi khi lấy dữ liệu:", error);
    }
  };

  // Tự động chạy khi mở trang
  useEffect(() => {
    fetchSubmissions();
  }, []);

  // --- 2. HÀM XỬ LÝ GỬI BÁO CÁO ---
  const handleUpload = async (e) => {
    e.preventDefault();
    console.log("🖱️ Bắt đầu gửi báo cáo...");

    // Kiểm tra tính hợp lệ của đầu vào
    if (!file || !tenTaiLieu) {
      alert("Vui lòng nhập tên tài liệu và chọn file!");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('tenHienThi', tenTaiLieu);
    formData.append('maSV', maSV);
    formData.append('loai', 'BaoCao');

    try {
      const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        alert("✅ Đã lưu vào phpMyAdmin thành công!");
        // Reset form sau khi gửi thành công
        setTenTaiLieu('');
        setFile(null);
        setFileName('');
        // Cập nhật lại bảng hiển thị ngay lập tức
        fetchSubmissions();
      } else {
        alert("❌ Lỗi từ Server: " + result.message);
      }
    } catch (error) {
      console.error("❌ Lỗi kết nối:", error);
      alert("❌ Không thể kết nối với Server! Hãy kiểm tra Node.js (cổng 5000) đã chạy chưa.");
    }
  };

  return (
    <div className="p-10 bg-gray-50 min-h-full">
      {/* TIÊU ĐỀ TRANG */}
      <h1 className="text-3xl font-bold text-[#1e3a8a] mb-8 uppercase tracking-wide">
        Nộp báo cáo / Giáo án
      </h1>

      {/* KHU VỰC FORM NỘP BÀI */}
      <div className="bg-white rounded-[40px] shadow-lg border border-gray-100 p-12 max-w-5xl mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          
          {/* Nhập tên hiển thị */}
          <div className="flex flex-col gap-3">
            <label className="text-[11px] font-bold text-gray-500 uppercase ml-2">Tên tài liệu hiển thị</label>
            <input
              type="text"
              value={tenTaiLieu}
              onChange={(e) => setTenTaiLieu(e.target.value)}
              className="w-full border-2 border-gray-200 rounded-2xl py-4 px-6 text-lg focus:outline-none focus:border-[#1e3a8a]"
              placeholder="Ví dụ: Báo cáo thực tập tuần 1" 
            />
          </div>

          {/* Chọn File */}
          <div className="flex flex-col gap-3">
            <label className="text-[11px] font-bold text-gray-500 uppercase ml-2">Chọn tệp tin (PDF, DOCX)</label>
            <div className="flex items-center gap-4 bg-[#f1f5f9] rounded-2xl p-2 border border-dashed border-gray-300">
              <label className="bg-[#dbeafe] text-[#2563eb] font-bold py-3 px-6 rounded-xl cursor-pointer hover:bg-blue-200 transition-colors">
                Choose File
                <input 
                  type="file" 
                  className="hidden" 
                  onChange={(e) => {
                    if(e.target.files[0]) {
                      setFile(e.target.files[0]);
                      setFileName(e.target.files[0].name);
                      console.log("📁 Đã chọn file:", e.target.files[0].name);
                    }
                  }} 
                />
              </label>
              <span className="text-gray-500 text-sm italic truncate max-w-[150px]">
                {fileName || 'Chưa chọn tệp'}
              </span>
            </div>
          </div>
        </div>

        {/* Nút gửi */}
        <button 
          onClick={handleUpload}
          className="w-full bg-[#1e3a8a] text-white font-bold py-5 rounded-2xl text-xl shadow-md hover:bg-blue-900 transition-all uppercase tracking-widest"
          style={{ position: 'relative', zIndex: 10 }}
        >
          Gửi báo cáo
        </button>
      </div>

      {/* BẢNG THEO DÕI KẾT QUẢ */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-1.5 h-8 bg-green-500 rounded-full"></div>
        <h2 className="text-2xl font-bold text-[#1e3a8a] uppercase italic">Theo dõi kết quả đánh giá</h2>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-[#f8fafc] text-[#64748b] text-xs font-bold uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4">MÃ TÀI LIỆU</th>
              <th className="px-6 py-4">MASV</th>
              <th className="px-6 py-4">TÊN FILE</th>
              <th className="px-6 py-4">NGÀY NỘP</th>
              <th className="px-6 py-4">LOẠI</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {danhSach.length > 0 ? danhSach.map((item, idx) => (
              <tr key={idx} className="hover:bg-blue-50 transition-colors">
                <td className="px-6 py-4 text-xs font-mono">{item.MaTaiLieu || item.matailieu}</td>
                <td className="px-6 py-4 text-sm">{item.MaSV || item.masv}</td>
                <td className="px-6 py-4 text-sm text-blue-600 font-medium">{item.TenFile || item.tenfile}</td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {new Date(item.NgayNop || item.ngaynop).toLocaleString('vi-VN')}
                </td>
                <td className="px-6 py-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-[10px] font-bold">
                    {item.Loai || item.loai}
                  </span>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="5" className="px-6 py-10 text-center text-gray-400 italic">
                  Chưa có báo cáo nào được nộp.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubmissionPage;