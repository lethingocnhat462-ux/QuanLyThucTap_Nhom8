import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // 1. Import hook dịch

const XemDSSVPage = () => {
    const { t } = useTranslation(); // 2. Khởi tạo hàm t()
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = localStorage.getItem('user');
                if (!userData) {
                    setLoading(false);
                    return;
                }

                const user = JSON.parse(userData);
                let maRaw = user.MaGVPT || user.MaTK || "";
                let digits = maRaw.match(/\d+/); 
                let maGVFinal = digits ? `GVPT_${digits[0]}` : maRaw;

                const apiUrl = "http://localhost/api_get_dssv_theo_gv.php";
                const response = await axios.get(apiUrl, { 
                    params: { maGV: maGVFinal } 
                });

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

    const handleChamDiem = (sv) => {
        navigate('/nhan-xet-cham-diem', { state: { student: sv } });
    };

    return (
        <div className="p-8">
            {/* 3. Bọc tiêu đề trang */}
            <h1 className="text-2xl font-bold text-blue-900 mb-6 uppercase tracking-tight">
                {t("DANH SÁCH SINH VIÊN THỰC TẬP")}
            </h1>
            
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                <table className="min-w-full">
                    <thead className="bg-blue-600 text-white">
                        <tr>
                            {/* 4. Bọc các tiêu đề cột */}
                            <th className="px-6 py-4 text-left font-semibold uppercase text-sm">{t("STT")}</th>
                            <th className="px-6 py-4 text-left font-semibold uppercase text-sm">{t("MÃ SV")}</th>
                            <th className="px-6 py-4 text-left font-semibold uppercase text-sm">{t("HỌ TÊN")}</th>
                            <th className="px-6 py-4 text-left font-semibold uppercase text-sm">{t("NGÀNH")}</th>
                            <th className="px-6 py-4 text-left font-semibold uppercase text-sm">{t("LIÊN HỆ")}</th>
                            <th className="px-6 py-4 text-center font-semibold uppercase text-sm">{t("THAO TÁC")}</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {loading ? (
                            <tr>
                                <td colSpan="6" className="p-10 text-center text-gray-500">
                                    {t("Đang tải dữ liệu...")}
                                </td>
                            </tr>
                        ) : students.length > 0 ? (
                            students.map((sv, index) => (
                                <tr key={sv.MaSV} className="hover:bg-blue-50 transition-colors">
                                    <td className="px-6 py-4 text-gray-600">{index + 1}</td>
                                    <td className="px-6 py-4 font-bold text-blue-700">{sv.MaSV}</td>
                                    <td className="px-6 py-4 font-medium text-gray-900">{sv.HoTen}</td>
                                    <td className="px-6 py-4 text-gray-600">{sv.Nganh}</td>
                                    <td className="px-6 py-4 text-gray-600">{sv.SDT_LienHe}</td>
                                    <td className="px-6 py-4 text-center">
                                        <button 
                                            onClick={() => handleChamDiem(sv)}
                                            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-4 rounded shadow-sm transition duration-200"
                                        >
                                            {t("Chấm điểm")}
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="p-16 text-center">
                                    <div className="text-red-500 font-bold text-lg">
                                        ⚠️ {t("Hiện chưa có sinh viên nào!")}
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            
            <div className="mt-4 text-right text-gray-500 italic font-medium">
                {t("Tổng cộng")}: <span className="text-blue-600 font-bold">{students.length}</span> {t("sinh viên")}
            </div>
        </div>
    );
};

export default XemDSSVPage;