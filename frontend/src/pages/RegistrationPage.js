import React, { useState, useEffect } from 'react';

const RegistrationPage = () => {
    const [nv1, setNv1] = useState('');
    const [nv2, setNv2] = useState('');
    const [nv3, setNv3] = useState('');
    const [ghiChu, setGhiChu] = useState('');
    const [danhSachTruong, setDanhSachTruong] = useState([]);
    const [loading, setLoading] = useState(true);

    // 1. Lấy danh sách trường từ database
    useEffect(() => {
        const fetchTruongs = async () => {
            try {
                const res = await fetch('http://localhost/api_get_truong.php');
                const data = await res.json();
                if (Array.isArray(data)) {
                    setDanhSachTruong(data);
                }
            } catch (err) {
                console.error("Lỗi kết nối API:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchTruongs();
    }, []);

    // 2. Hàm xử lý gửi đăng ký
    const handleRegister = async () => {
        if (!nv1) { alert("⚠️ Vui lòng chọn Nguyện vọng 1!"); return; }
        const data = { maSV: "4551150001", nv1, nv2, nv3, ghiChu };
        try {
            const response = await fetch('http://localhost/api_nguyenvong.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            if (result.status === "success") alert("✅ Đăng ký thành công!");
        } catch (error) { alert("❌ Lỗi kết nối Server!"); }
    };

    // 3. Hàm tạo danh sách <option> cho Select
    const renderOptions = () => {
        if (loading) return <option value="">Đang tải dữ liệu...</option>;
        if (danhSachTruong.length === 0) return <option value="">(Bảng DonViThucTap đang trống)</option>;
        return (
            <>
                <option value="">-- Chọn trường thực tập --</option>
                {danhSachTruong.map((truong) => (
                    <option key={truong.MaDV} value={truong.TenDonVi}>
                        {truong.TenDonVi}
                    </option>
                ))}
            </>
        );
    };

    // TẤT CẢ PHẦN RETURN PHẢI NẰM TRONG HÀM NÀY
    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-8 border-b pb-4">
                    <span className="text-2xl">📝</span>
                    <h2 className="text-xl font-bold text-blue-900 uppercase">
                        Đăng ký nguyện vọng thực tập
                    </h2>
                </div>
                
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Nguyện vọng 1 (Bắt buộc) *</label>
                        <select 
                            className="w-full border-2 p-3 rounded-lg focus:border-blue-500 outline-none transition-all" 
                            onChange={(e) => setNv1(e.target.value)} value={nv1}
                        >
                            {renderOptions()}
                        </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Nguyện vọng 2</label>
                            <select className="w-full border-2 p-3 rounded-lg" onChange={(e) => setNv2(e.target.value)} value={nv2}>
                                {renderOptions()}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Nguyện vọng 3</label>
                            <select className="w-full border-2 p-3 rounded-lg" onChange={(e) => setNv3(e.target.value)} value={nv3}>
                                {renderOptions()}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Ghi chú bổ sung</label>
                        <textarea 
                            className="w-full border-2 p-3 rounded-lg h-24 focus:border-blue-500 outline-none" 
                            placeholder="Nhập ghi chú..." 
                            onChange={(e) => setGhiChu(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="flex justify-center">
                        <button 
                            onClick={handleRegister} 
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-16 rounded-xl shadow-lg transition-all active:scale-95"
                        >
                            XÁC NHẬN ĐĂNG KÝ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;