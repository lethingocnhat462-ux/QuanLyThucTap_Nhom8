import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const NhanXetChamDiemPage = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const student = location.state?.student;

    const [fileList, setFileList] = useState([]); 
    const [currentFile, setCurrentFile] = useState(null);
    const [diem, setDiem] = useState("");
    const [nhanXet, setNhanXet] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStudentFile = async () => {
            if (!student?.MaSV) return;
            try {
                setLoading(true);
                const res = await axios.get(`http://localhost/api_get_file_bao_cao.php?maSV=${student.MaSV}`);
                
                if (res.data && Array.isArray(res.data)) {
                    setFileList(res.data);
                    setCurrentFile(null); 
                } else {
                    setFileList([]);
                }
            } catch (error) {
                console.error("API Connection Error:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchStudentFile();
    }, [student]);

    const handleSelectFile = (file) => {
        setCurrentFile(file);
        setDiem(file.Diem || ""); 
        setNhanXet(file.GhiChuGV || ""); 
    };

    const handleSave = async () => {
        if (!diem) return alert(t("Vui lòng nhập điểm!"));
        if (!currentFile) return alert(t("Vui lòng chọn một file để chấm điểm!"));

        try {
            const response = await axios.post("http://localhost/api_update_diem.php", {
                maSV: student.MaSV,
                tenFile: currentFile.TenFile,
                diem: diem,
                ghiChu: nhanXet
            });
            
            if (response.data.success) {
                alert(`${t("✅ Đã lưu điểm thành công cho file")}: ${currentFile.TenFile}`);
                
                const updatedList = fileList.map(f => 
                    f.TenFile === currentFile.TenFile ? { ...f, Diem: diem, GhiChuGV: nhanXet } : f
                );
                setFileList(updatedList);
            } else {
                alert(t("Lỗi từ server: ") + response.data.message);
            }
        } catch (error) {
            alert(t("❌ Lỗi kết nối Server!"));
        }
    };

    if (!student) return <div className="p-10 text-center font-bold text-red-500">{t("Vui lòng chọn sinh viên!")}</div>;

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-blue-900 uppercase">
                    {t("CHẤM ĐIỂM BÁO CÁO")}: {student.HoTen} - {student.MaSV}
                </h2>
                <button 
                    onClick={() => navigate(-1)} 
                    className="text-gray-600 hover:text-blue-600 flex items-center gap-1 transition-colors font-medium"
                >
                    ← {t("Quay lại")}
                </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* CỘT TRÁI: PREVIEW FILE */}
                <div className="lg:w-2/3 bg-white rounded-xl shadow-md border overflow-hidden flex flex-col" style={{ height: '75vh' }}>
                    <div className="bg-gray-100 p-3 border-b font-bold flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <span className="text-xs text-gray-500 uppercase">{t("Danh sách file báo cáo")}:</span>
                            {fileList.map((file, index) => (
                                <button 
                                    key={index}
                                    onClick={() => handleSelectFile(file)}
                                    className={`px-3 py-1 text-xs rounded-full border transition-all font-bold ${
                                        currentFile?.TenFile === file.TenFile 
                                        ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
                                        : 'bg-white text-blue-600 border-blue-600 hover:bg-blue-50'
                                    }`}
                                >
                                    File {index + 1}
                                </button>
                            ))}
                        </div>
                        {currentFile && (
                            <a 
                                href={`http://localhost/uploads/${currentFile.TenFile}`} 
                                download 
                                className="text-emerald-600 text-xs font-bold hover:underline flex items-center gap-1"
                            >
                                {t("Tải xuống")} ↓
                            </a>
                        )}
                    </div>
                    
                    <div className="flex-1 flex items-center justify-center bg-gray-200 relative">
                        {loading ? (
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                                <p className="text-sm font-medium text-gray-500">{t("Đang tải dữ liệu...")}</p>
                            </div>
                        ) : currentFile ? (
                            <iframe 
                                key={currentFile.TenFile}
                                src={`http://localhost/uploads/${currentFile.TenFile}`} 
                                className="w-full h-full border-none"
                                title="Preview"
                            />
                        ) : (
                            <div className="text-center p-10 bg-white rounded-xl shadow-sm border-2 border-dashed border-blue-200 max-w-md">
                                <p className="text-5xl mb-4">🖱️</p>
                                <p className="text-blue-600 font-bold text-lg">{t("Vui lòng chọn File 1, 2... để chấm điểm")}</p>
                                <p className="text-gray-400 text-sm mt-2">{t("Chọn tệp từ danh sách phía trên để bắt đầu nhận xét")}</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* CỘT PHẢI: FORM CHẤM ĐIỂM */}
                <div className="lg:w-1/3 bg-white rounded-xl shadow-md border p-6 flex flex-col">
                    <h3 className="font-extrabold text-xl mb-6 border-b pb-4 text-gray-800 flex justify-between items-center">
                        <span>{t("CHẤM ĐIỂM")}</span>
                        {currentFile && (
                            <span className="text-blue-600 text-xs bg-blue-50 px-2 py-1 rounded border border-blue-100">
                                {t("Đang chấm")}: File {fileList.indexOf(currentFile) + 1}
                            </span>
                        )}
                    </h3>
                    
                    <div className="mb-5">
                        <label className="block text-sm font-bold mb-2 text-gray-700 uppercase tracking-tight">{t("Điểm số")}</label>
                        <input 
                            type="number" 
                            className="w-full p-4 border-2 border-gray-100 rounded-xl focus:border-blue-500 focus:ring-0 outline-none transition-all text-lg font-bold"
                            placeholder={t("Nhập điểm...")}
                            value={diem}
                            onChange={(e) => setDiem(e.target.value)}
                        />
                    </div>
                    
                    <div className="mb-6 flex-1">
                        <label className="block text-sm font-bold mb-2 text-gray-700 uppercase tracking-tight">{t("Lời phê cho file này")}</label>
                        <textarea 
                            rows="10"
                            className="w-full p-4 border-2 border-gray-100 rounded-xl focus:border-blue-500 focus:ring-0 outline-none resize-none transition-all"
                            placeholder={t("Nhập nhận xét...")}
                            value={nhanXet}
                            onChange={(e) => setNhanXet(e.target.value)}
                        ></textarea>
                    </div>
                    
                    <button 
                        onClick={handleSave}
                        disabled={!currentFile}
                        className={`w-full py-4 rounded-xl font-black text-white shadow-xl transition-all transform hover:-translate-y-1 active:scale-95 ${
                            !currentFile ? 'bg-gray-300 cursor-not-allowed shadow-none' : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                    >
                        {t("LƯU ĐIỂM FILE NÀY")}
                    </button>
                    
                    <div className="mt-6 p-4 bg-amber-50 border border-amber-100 rounded-lg">
                        <p className="text-[11px] text-amber-700 leading-relaxed">
                            <strong>* {t("Ghi chú")}:</strong> {t("Bạn có thể chấm điểm riêng biệt cho từng file. Hệ thống sẽ tự động cập nhật kết quả vào hồ sơ sinh viên.")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NhanXetChamDiemPage;