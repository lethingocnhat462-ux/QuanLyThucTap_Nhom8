import React, { useState, useEffect } from 'react';

const RegistrationPage = () => {
    const [nv1, setNv1] = useState('');
    const [nv2, setNv2] = useState('');
    const [nv3, setNv3] = useState('');
    const [ghiChu, setGhiChu] = useState('');
    const [danhSachTruong, setDanhSachTruong] = useState([]);
    const [loading, setLoading] = useState(true);

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

    const renderOptions = (currentValue, otherValues) => {
        if (loading) return <option value="">Đang tải dữ liệu...</option>;
        if (danhSachTruong.length === 0) return <option value="">(Bảng dữ liệu trống)</option>;
        
        return (
            <>
                <option value="">-- Chọn trường thực tập --</option>
                {danhSachTruong.map((truong) => {
                    const isSelectedElsewhere = otherValues.includes(truong.TenDonVi);
                    return (
                        <option 
                            key={truong.MaDV} 
                            value={truong.TenDonVi} 
                            disabled={isSelectedElsewhere}
                        >
                            {truong.TenDonVi} {isSelectedElsewhere ? "(Đã chọn)" : ""}
                        </option>
                    );
                })}
            </>
        );
    };

    return (
        <div className="min-h-screen bg-[#f0f4f8] py-12 px-4">
            {/* Khối nền trang trí tạo độ sâu công nghệ */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
            
            <div className="max-w-4xl mx-auto relative z-10">
                {/* CARD CHÍNH */}
<div className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-blue-100 overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_rgba(37,99,235,0.1)]">
                    
                    {/* Header: Xanh Gradient Sang Trọng */}
                    <div className="bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#3b82f6] p-10 text-white relative">
                        <div className="flex items-center gap-5">
                            <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-inner border border-white/30">
                                <span className="text-3xl animate-bounce">📝</span>
                            </div>
                            <div>
                                <h2 className="text-2xl font-black uppercase tracking-tight">
                                    Đăng ký <span className="text-blue-200">Nguyện vọng</span>
                                </h2>
                                <p className="text-blue-100/80 text-xs font-mono tracking-widest mt-1 uppercase">Hệ thống điều phối thực tập v8.0</p>
                            </div>
                        </div>
                        {/* Biểu tượng chip công nghệ chìm phía sau */}
                        <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none text-7xl font-black">AI</div>
                    </div>

                    {/* Nội dung Form: Rõ chữ và sạch sẽ */}
                    <div className="p-10 space-y-8 bg-white">
                        
                        {/* Nguyện vọng 1 */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                                <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wider">Nguyện vọng 1 (Ưu tiên cao nhất) *</label>
                            </div>
                            <select 
                                className="w-full bg-slate-50 border-2 border-slate-100 p-4 rounded-2xl outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 font-medium text-slate-800 shadow-sm" 
                                onChange={(e) => setNv1(e.target.value)} value={nv1}
                            >
                                {renderOptions(nv1, [nv2, nv3])}
                            </select>
                        </div>

                        {/* Grid NV2 & NV3 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[13px] font-bold text-slate-500 uppercase tracking-wider pl-1">Nguyện vọng 2</label>
<select 
                                    className="w-full bg-slate-50 border-2 border-slate-100 p-4 rounded-2xl outline-none transition-all focus:border-blue-400 focus:bg-white font-medium text-slate-800" 
                                    onChange={(e) => setNv2(e.target.value)} value={nv2}
                                >
                                    {renderOptions(nv2, [nv1, nv3])}
                                </select>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[13px] font-bold text-slate-500 uppercase tracking-wider pl-1">Nguyện vọng 3</label>
                                <select 
                                    className="w-full bg-slate-50 border-2 border-slate-100 p-4 rounded-2xl outline-none transition-all focus:border-blue-400 focus:bg-white font-medium text-slate-800" 
                                    onChange={(e) => setNv3(e.target.value)} value={nv3}
                                >
                                    {renderOptions(nv3, [nv1, nv2])}
                                </select>
                            </div>
                        </div>

                        {/* Ghi chú */}
                        <div className="space-y-3">
                            <label className="text-[13px] font-bold text-slate-500 uppercase tracking-wider pl-1">Ghi chú bổ sung</label>
                            <textarea 
                                className="w-full bg-slate-50 border-2 border-slate-100 p-5 rounded-2xl h-32 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400 font-medium" 
                                placeholder="Ví dụ: Mong muốn thực tập tại khu vực gần nơi cư trú..." 
                                onChange={(e) => setGhiChu(e.target.value)}
                            ></textarea>
                        </div>

                        {/* Button Xác nhận: Hiệu ứng chuyên nghiệp */}
                        <div className="flex justify-center pt-6">
                            <button 
                                onClick={handleRegister} 
                                className="group relative overflow-hidden bg-[#1e3a8a] text-white font-black py-5 px-20 rounded-2xl shadow-[0_15px_30px_rgba(30,58,138,0.25)] transition-all hover:scale-105 active:scale-95 tracking-[0.15em] text-sm"
                            >
                                <span className="relative z-10">XÁC NHẬN ĐĂNG KÝ HỆ THỐNG</span>
                                {/* Hiệu ứng quét sáng khi hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                            </button>
                        </div>
</div>

                    {/* Footer nhỏ bên dưới Card */}
                    <div className="bg-slate-50 border-t border-slate-100 p-6 text-center">
                        <p className="text-[10px] text-slate-400 font-mono uppercase tracking-[0.3em]">
                            Mọi thông tin sẽ được tự động đồng bộ hóa với cơ sở dữ liệu khoa sư phạm
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;