import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const NhanXetChamDiemPage = () => {
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
                    // Mặc định không chọn file nào để tránh tự động tải về
                    setCurrentFile(null); 
                } else {
                    setFileList([]);
                }
            } catch (error) {
                console.error("Lỗi kết nối API:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchStudentFile();
    }, [student]);

    // Hàm xử lý khi nhấn chọn một File để chấm
    const handleSelectFile = (file) => {
        setCurrentFile(file);
        setDiem(file.Diem || ""); // Load điểm của riêng file đó
        setNhanXet(file.GhiChuGV || ""); // Load nhận xét của riêng file đó
    };

    const handleSave = async () => {
        if (!diem) return alert("Vui lòng nhập điểm!");
        if (!currentFile) return alert("Vui lòng chọn một file để chấm điểm!");

        try {
            const response = await axios.post("http://localhost/api_update_diem.php", {
                maSV: student.MaSV,
                tenFile: currentFile.TenFile, // Gửi chính xác tên file đang chấm
                diem: diem,
                ghiChu: nhanXet
            });
            
            if (response.data.success) {
                alert(`Đã lưu điểm thành công cho file: ${currentFile.TenFile}`);
                
                // Cập nhật dữ liệu trong mảng fileList tại local để không phải reload trang
                const updatedList = fileList.map(f => 
                    f.TenFile === currentFile.TenFile ? { ...f, Diem: diem, GhiChuGV: nhanXet } : f
                );
                setFileList(updatedList);
            } else {
                alert("Lỗi từ server: " + response.data.message);
            }
        } catch (error) {
            alert("Lỗi kết nối khi lưu dữ liệu!");
        }
    };

    if (!student) return <div className="p-10 text-center">Vui lòng chọn sinh viên!</div>;

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-blue-900 uppercase">
                    Chấm điểm báo cáo: {student.HoTen} - {student.MaSV}
                </h2>
                <button onClick={() => navigate(-1)} className="text-gray-600 hover:underline">← Quay lại</button>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* CỘT TRÁI: PREVIEW FILE */}
                <div className="lg:w-2/3 bg-white rounded-xl shadow-md border overflow-hidden flex flex-col" style={{ height: '75vh' }}>
                    <div className="bg-gray-100 p-3 border-b font-bold flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <span className="text-sm">📄 DANH SÁCH FILE:</span>
                            {fileList.map((file, index) => (
                                <button 
                                    key={index}
                                    onClick={() => handleSelectFile(file)}
                                    className={`px-3 py-1 text-xs rounded-full border transition-all ${
                                        currentFile?.TenFile === file.TenFile 
                                        ? 'bg-blue-600 text-white border-blue-600' 
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
                                className="text-emerald-600 text-xs font-bold hover:underline"
                            >
                                Tải xuống file này ↓
                            </a>
                        )}
                    </div>
                    
                    <div className="flex-1 flex items-center justify-center bg-gray-200">
                        {loading ? (
                            <p>Đang tải dữ liệu...</p>
                        ) : currentFile ? (
                            <iframe 
                                key={currentFile.TenFile}
                                src={`http://localhost/uploads/${currentFile.TenFile}`} 
                                className="w-full h-full border-none"
                                title="Preview"
                            />
                        ) : (
                            <div className="text-center p-10 bg-white rounded-lg shadow-sm border-2 border-dashed border-blue-200">
                                <p className="text-4xl mb-2">🖱️</p>
                                <p className="text-blue-600 font-medium">Vui lòng chọn File 1, 2... để chấm điểm</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* CỘT PHẢI: FORM CHẤM ĐIỂM */}
                <div className="lg:w-1/3 bg-white rounded-xl shadow-md border p-6 flex flex-col">
                    <h3 className="font-bold text-lg mb-4 border-b pb-2 text-gray-700 flex justify-between">
                        <span>CHẤM ĐIỂM</span>
                        {currentFile && <span className="text-blue-500 text-sm italic">Đang chấm: File {fileList.indexOf(currentFile) + 1}</span>}
                    </h3>
                    
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1 text-gray-600">Điểm số</label>
                        <input 
                            type="number" 
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                            placeholder="Nhập điểm..."
                            value={diem}
                            onChange={(e) => setDiem(e.target.value)}
                        />
                    </div>
                    
                    <div className="mb-6 flex-1">
                        <label className="block text-sm font-semibold mb-1 text-gray-600">Lời phê cho file này</label>
                        <textarea 
                            rows="10"
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none resize-none"
                            placeholder="Nhập nhận xét..."
                            value={nhanXet}
                            onChange={(e) => setNhanXet(e.target.value)}
                        ></textarea>
                    </div>
                    
                    <button 
                        onClick={handleSave}
                        disabled={!currentFile}
                        className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transition-all ${
                            !currentFile ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 active:scale-95'
                        }`}
                    >
                        LƯU ĐIỂM FILE NÀY
                    </button>
                    
                    <p className="text-[10px] text-slate-400 mt-4 italic text-center">
                        * Bạn có thể chấm điểm riêng biệt cho từng file.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NhanXetChamDiemPage;