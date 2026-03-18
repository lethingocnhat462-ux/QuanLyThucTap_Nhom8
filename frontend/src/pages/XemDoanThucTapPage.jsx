import React, { useState, useEffect } from 'react';

const XemDoanThucTapPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Lấy user ngay tại đây để tránh lỗi "changed size"
    const user = JSON.parse(localStorage.getItem('user'));
    const maTK = user?.MaTK;

    if (!maTK) {
      setLoading(false);
      return;
    }

    console.log("Đang tải dữ liệu cho MaTK:", maTK);

    // 2. Gọi API (Dùng dấu backtick ` )
    // Nhớ kiểm tra xem có cần thêm /backend/ vào trước file php không nhé
    fetch(`http://localhost/get_doan_thuc_tap.php?maTK=${maTK}`)
      .then((res) => res.json())
      .then((result) => {
        console.log("Dữ liệu server trả về:", result);
        if (result.status === "success") {
          setData(result.data);
        }
      })
      .catch((err) => console.error("Lỗi Fetch:", err))
      .finally(() => setLoading(false));

  }, []); // LUÔN ĐỂ MẢNG RỖNG Ở ĐÂY

  if (loading) return <div className="p-10 text-blue-900 font-bold text-center">Đang tải danh sách đoàn phụ trách...</div>;

  // Nhóm dữ liệu theo MaDoan
  const groupedData = data.reduce((groups, item) => {
    const group = (groups[item.MaDoan] || []);
    group.push(item);
    groups[item.MaDoan] = group;
    return groups;
  }, {});

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-[#1e3a8a] mb-8 uppercase flex items-center gap-3">
        <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
        Đoàn thực tập tôi phụ trách
      </h1>

      {Object.keys(groupedData).length > 0 ? (
        Object.keys(groupedData).map((maDoan) => {
          const info = groupedData[maDoan][0];
          return (
            <div key={maDoan} className="mb-10 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Header của từng đoàn */}
              <div className="bg-[#1e3a8a] p-6 text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-bold uppercase">{info.TenDoan}</h2>
                    <p className="text-blue-200 text-sm italic mt-1">{info.TenDonVi} - {info.DiaChi}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs uppercase opacity-70 font-bold">Năm học</p>
                    <p className="font-semibold text-lg">{info.NamHoc}</p>
                  </div>
                </div>
              </div>

              {/* Bảng sinh viên của đoàn đó */}
              <div className="p-4">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-gray-400 text-xs uppercase font-bold border-b">
                      <th className="px-6 py-3">Mã sinh viên</th>
                      <th className="px-6 py-3">Họ và tên</th>
                      <th className="px-6 py-3">Ngành học</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {groupedData[maDoan].map((sv) => (
                      <tr key={sv.MaSV} className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-4 font-bold text-blue-600">{sv.MaSV}</td>
                        <td className="px-6 py-4 font-medium text-gray-800">{sv.HoTenSV}</td>
                        <td className="px-6 py-4 text-gray-500 italic">{sv.Nganh}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })
      ) : (
        <div className="bg-white p-10 rounded-2xl shadow text-center text-gray-500">
          Hiện tại Thầy/Cô chưa có đoàn thực tập nào được phân công.
        </div>
      )}
    </div>
  );
};

export default XemDoanThucTapPage;