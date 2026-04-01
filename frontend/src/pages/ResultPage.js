import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next'; // Thêm import này

const ResultPage = ({ userProfile }) => {
    const { t } = useTranslation(); // Khởi tạo hook translation
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [inputMaSV, setInputMaSV] = useState('');

    const handleSearch = async (maSVToFetch) => {
        const targetMaSV = maSVToFetch || inputMaSV;
        
        if (!targetMaSV) {
            setError(t("Vui lòng nhập mã sinh viên để tra cứu!")); // Sử dụng t()
            return;
        }

        setLoading(true);
        setError('');
        setResult(null);

        try {
            const response = await axios.get(`http://localhost/api_get_ketqua.php?MaSV=${targetMaSV}`);
            
            if (response.data.status === 'success') {
                setResult(response.data.data);
            } else {
                // Sử dụng t() cho thông báo lỗi từ server hoặc mặc định
                setError(response.data.message ? t(response.data.message) : t("Rất tiếc, bạn không trúng tuyển."));
            }
        } catch (err) {
            console.error("API Error:", err);
            setError(t("Lỗi kết nối đến máy chủ (Kiểm tra Docker Port 80)!")); // Sử dụng t()
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem('user'));
        const currentMaSV = userProfile?.MaTK || savedUser?.MaTK || userProfile?.MaSV || savedUser?.MaSV;

        if (currentMaSV) {
            setInputMaSV(currentMaSV);
            handleSearch(currentMaSV); 
        }
    }, [userProfile]);

    return (
        <div className="max-w-4xl mx-auto transition-all duration-500 p-4">
            <div className="mb-8">
                <h1 className="text-3xl font-black text-blue-900 uppercase tracking-tight">
                    {/* Chuyển đổi tiêu đề động */}
                    {result ? t("🎉 Kết quả xét tuyển") : t("📊 Tra cứu trạng thái")}
                </h1>
                <p className="text-gray-500 font-medium">
                    {t("Hệ thống xét duyệt thực tập tự động - QNU AI Smart Portal")}
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-3 mb-10 bg-white p-6 rounded-[2rem] shadow-lg border border-blue-100">
                <div className="relative flex-1 w-full">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                    <input 
                        type="text" 
                        value={inputMaSV}
                        onChange={(e) => setInputMaSV(e.target.value)}
                        placeholder={t("Nhập mã sinh viên (Ví dụ: TK_003)...")} // Dịch placeholder
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border-2 border-transparent rounded-2xl outline-none focus:border-blue-500 focus:bg-white transition-all font-bold text-blue-900"
                    />
                </div>
                <button 
                    onClick={() => handleSearch()}
                    className="w-full md:w-auto bg-blue-700 text-white px-8 py-3 rounded-2xl font-black hover:bg-blue-800 transition-all shadow-xl shadow-blue-200 active:scale-95 uppercase text-sm tracking-widest"
                >
                    {t("Tìm kiếm")} {/* Dịch nút bấm */}
                </button>
            </div>

            {loading ? (
                <div className="flex justify-center items-center h-40">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
                </div>
            ) : result ? (
                <div className="relative overflow-hidden bg-white rounded-[40px] shadow-2xl border border-blue-50 animate-in fade-in zoom-in duration-500">
                    <div className="h-4 bg-gradient-to-r from-green-400 to-blue-500 w-full"></div>
                    <div className="p-10 flex flex-col md:flex-row items-center gap-10">
                        <div className="relative">
                            <div className="w-40 h-40 bg-green-100 rounded-full flex items-center justify-center text-6xl shadow-inner animate-bounce">🏫</div>
                            <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-3 rounded-2xl shadow-lg transform rotate-12 font-bold">PASS</div>
                        </div>
                        <div className="flex-1 space-y-6 text-center md:text-left">
                            <div>
                                <h2 className="text-sm font-black text-green-600 uppercase tracking-[0.2em] mb-1">
                                    {t("Chúc mừng bạn!")}
                                </h2>
                                <p className="text-4xl font-black text-blue-900 leading-tight">{result.TenDonVi}</p>
                            </div>
                            <div className="flex flex-wrap gap-4 justify-center md:justify-start font-bold">
                                <div className="bg-blue-50 text-blue-800 px-6 py-3 rounded-2xl border border-blue-100">
                                    📌 {t("Nguyện vọng")}: <span className="text-xl">{result.ThuTuNV}</span>
                                </div>
                                <div className="bg-gray-50 text-gray-600 px-6 py-3 rounded-2xl border border-gray-100 italic text-sm flex items-center">
                                    📅 {t("Ngày xét")}: {result.ThoiGianXet}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="bg-white rounded-[40px] shadow-xl p-16 text-center border border-dashed border-gray-200">
                    <div className="text-7xl mb-6 grayscale opacity-50">🕵️‍♂️</div>
                    <h2 className="text-2xl font-black text-gray-400 uppercase">
                        {t("Hồ sơ đang chờ duyệt")}
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-md mx-auto font-medium">
                        {error ? t(error) : t("Hệ thống chưa tìm thấy kết quả xét tuyển cho mã sinh viên này.")}
                    </p>
                </div>
            )}
        </div>
    );
};

export default ResultPage;