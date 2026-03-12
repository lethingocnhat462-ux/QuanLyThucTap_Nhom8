import React, { useEffect, useState } from 'react';
import axios from 'axios';

const XemDSSVPage = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 1. Lấy user từ localStorage
                const userData = localStorage.getItem('user');
                if (!userData) {
                    console.error("Không tìm thấy thông tin đăng nhập.");
                    setLoading(false);
                    return;
                }

                const user = JSON.parse(userData);
                
                // 2. Xử lý mã GV (Bỏ TK_ nếu có để khớp với Database)
                let maRaw = user.MaGVPT || user.MaTK || "";
let digits = maRaw.match(/\d+/); 
let maGVFinal = digits ? `GVPT_${digits[0]}` : maRaw;

console.log("Mã gửi lên API:", maGVFinal);

// 2. ĐỊNH NGHĨA URL ĐÚNG (Xóa bỏ phần 'const url =' dư thừa bên trong chuỗi)
const apiUrl = "http://localhost/api_get_dssv_theo_gv.php";

// 3. Gọi API sạch sẽ
const response = await axios.get(apiUrl, { 
    params: { maGV: maGVFinal } 
});

                console.log("Dữ liệu thực tế nhận được:", response.data);
                
                // Kiểm tra nếu response.data là mảng thì mới set
                if (Array.isArray(response.data)) {
                    setStudents(response.data);
                } else {
                    setStudents([]);
                }

            } catch (error) {
                console.error("Lỗi gọi API:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold text-blue-900 mb-6 uppercase tracking-tight">
                Danh sách sinh viên thực tập
            </h1>
            
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                <table className="min-w-full">
                    <thead className="bg-blue-600 text-white">
                        <tr>
                            <th className="px-6 py-4 text-left font-semibold uppercase text-sm">STT</th>
                            <th className="px-6 py-4 text-left font-semibold uppercase text-sm">Mã SV</th>
                            <th className="px-6 py-4 text-left font-semibold uppercase text-sm">Họ Tên</th>
                            <th className="px-6 py-4 text-left font-semibold uppercase text-sm">Ngành</th>
                            <th className="px-6 py-4 text-left font-semibold uppercase text-sm">Liên hệ</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {loading ? (
                            <tr><td colSpan="5" className="p-10 text-center text-gray-500">Đang tải dữ liệu...</td></tr>
                        ) : students.length > 0 ? (
                            students.map((sv, index) => (
                                <tr key={sv.MaSV} className="hover:bg-blue-50 transition-colors">
                                    <td className="px-6 py-4 text-gray-600">{index + 1}</td>
                                    <td className="px-6 py-4 font-bold text-blue-700">{sv.MaSV}</td>
                                    <td className="px-6 py-4 font-medium text-gray-900">{sv.HoTen}</td>
                                    <td className="px-6 py-4 text-gray-600">{sv.Nganh}</td>
                                    <td className="px-6 py-4 text-gray-600">{sv.SDT_LienHe}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="p-16 text-center">
                                    <div className="text-red-500 font-bold text-lg">⚠️ Hiện chưa có sinh viên nào!</div>
                                    <div className="text-gray-400 text-sm italic">Vui lòng kiểm tra lại phân công đợt thực tập.</div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            
            <div className="mt-4 text-right text-gray-500 italic font-medium">
                Tổng cộng: <span className="text-blue-600 font-bold">{students.length}</span> sinh viên
            </div>
        </div>
    );
};

export default XemDSSVPage;