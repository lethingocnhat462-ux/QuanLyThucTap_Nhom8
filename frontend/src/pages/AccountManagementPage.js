import React, { useState, useEffect, useRef } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, PieController } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, PieController);

const AccountManagementPage = () => {
    const [data, setData] = useState({ stats: { admin: 0, student: 0, teacher: 0, unit: 0 }, accounts: [] });
    const [searchTerm, setSearchTerm] = useState("");
    const [showModal, setShowModal] = useState(false);
    
    const [newUser, setNewUser] = useState({ 
        tenDangNhap: '', 
        maDinhDanh: '', 
        email: '', 
        quyen: '2' 
    });

    const canvasRef = useRef(null);
    const chartInstance = useRef(null);

    const fetchData = () => {
        // Cô khuyên bạn nên dùng 'localhost' nếu '127.0.0.1' báo lỗi kết nối trên một số trình duyệt
        fetch('http://127.0.0.1/get_account_management.php')
            .then(res => res.json())
            .then(result => {
                if (result.status === "success") setData(result);
            })
            .catch(err => console.error("Lỗi kết nối:", err));
    };

    useEffect(() => { fetchData(); }, []);

    useEffect(() => {
        if (canvasRef.current) {
            if (chartInstance.current) chartInstance.current.destroy();
            const ctx = canvasRef.current.getContext('2d');
            chartInstance.current = new ChartJS(ctx, {
                type: 'pie',
                data: {
                    labels: ['Quản trị viên', 'Sinh viên', 'Giảng viên', 'GV THPT'],
                    datasets: [{
                        data: [data.stats.admin, data.stats.student, data.stats.teacher, data.stats.unit],
                        backgroundColor: ['#1d4ed8', '#ca8a04', '#16a34a', '#9333ea'],
                        borderWidth: 2,
                    }]
                },
                options: { maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }
            });
        }
    }, [data.stats]);

    const handleDelete = async (maTK) => {
        if (window.confirm(`Bạn có chắc muốn xóa vĩnh viễn tài khoản ${maTK}?`)) {
            try {
                const response = await fetch(`http://127.0.0.1/delete_account.php?id=${maTK}`, {
                    method: 'DELETE'
                });
                const result = await response.json();
                if (result.status === "success") {
                    alert("Đã xóa khỏi Database!");
                    fetchData();
                }
            } catch (err) { 
                alert("Lỗi kết nối khi xóa tài khoản. Kiểm tra lại API delete_account.php!"); 
                console.error(err);
            }
        }
    };

    const handleAddSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1/add_account.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUser)
            });

            const text = await response.text(); 
            try {
                const result = JSON.parse(text);
                if (result.status === "success") {
                    alert("Thêm tài khoản thành công!");
                    setShowModal(false);
                    setNewUser({ tenDangNhap: '', maDinhDanh: '', email: '', quyen: '2' });
                    fetchData();
                } else {
                    alert("Lỗi từ Server: " + result.message);
                }
            } catch (jsonErr) {
                alert("Lỗi hệ thống: Phản hồi không đúng định dạng JSON.");
                console.error(text);
            }
        } catch (err) {
            alert("Không thể kết nối tới Server PHP!");
        }
    };

    const getRoleName = (role) => {
        const roles = { 1: "Quản trị viên", 2: "Sinh viên", 3: "Giảng viên", 4: "Giáo viên THPT" };
        return roles[Number(role)] || "Khác";
    };

    const filteredAccounts = data.accounts.filter(acc => 
        acc.MaTK?.toLowerCase().includes(searchTerm.toLowerCase()) || 
        acc.TenDangNhap?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        acc.MaDinhDanh?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        acc.Email?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-8 bg-gray-50 min-h-screen font-sans">
            <h2 className="text-2xl font-black text-blue-900 mb-8 uppercase flex items-center gap-3">
                <span className="p-2 bg-blue-600 text-white rounded-xl shadow-lg ring-4 ring-blue-100">⚙️</span> 
                Quản trị hệ thống tài khoản
            </h2>
            
            {/* Biểu đồ thống kê */}
            <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-blue-900/5 border border-white mb-8 flex flex-col md:flex-row items-center justify-around gap-8">
                <div className="w-full md:w-1/2 h-64"><canvas ref={canvasRef}></canvas></div>
                <div className="grid grid-cols-2 gap-4 w-full md:w-1/3">
                    {[
                        { label: 'QUẢN TRỊ VIÊN', color: '#1d4ed8', val: data.stats.admin },
                        { label: 'SINH VIÊN', color: '#ca8a04', val: data.stats.student },
                        { label: 'GIẢNG VIÊN', color: '#16a34a', val: data.stats.teacher },
                        { label: 'GIÁO VIÊN THPT', color: '#9333ea', val: data.stats.unit }
                    ].map((item) => (
                        <div key={item.label} className="p-4 rounded-2xl border-b-4 bg-gray-50 transition-transform hover:scale-105" style={{borderBottomColor: item.color}}>
                            <p className="text-[10px] font-black text-gray-400 tracking-widest">{item.label}</p>
                            <p className="text-3xl font-black" style={{color: item.color}}>{item.val}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Thanh tìm kiếm & Nút Thêm */}
            <div className="flex gap-4 mb-6">
                <div className="relative flex-1">
                    <input 
                        type="text" placeholder="Tìm kiếm nhanh mã định danh, tên..." 
                        className="w-full p-4 pl-14 rounded-2xl border-2 border-transparent bg-white shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <span className="absolute left-5 top-1/2 -translate-y-1/2 text-xl grayscale opacity-50">🔍</span>
                </div>
                <button onClick={() => setShowModal(true)} className="bg-blue-600 hover:bg-blue-700 hover:shadow-blue-200 hover:shadow-lg text-white px-8 rounded-2xl font-bold transition-all flex items-center gap-2">
                    <span className="text-2xl">+</span> Thêm mới
                </button>
            </div>

            {/* Bảng danh sách tài khoản */}
            <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-blue-600 text-white font-bold">
                            <th className="p-5 text-xs uppercase tracking-widest">Mã TK</th>
                            <th className="p-5 text-xs uppercase tracking-widest">Tên đăng nhập</th>
                            <th className="p-5 text-xs uppercase tracking-widest">Mã định danh</th>
                            <th className="p-5 text-xs uppercase tracking-widest">Email</th>
                            <th className="p-5 text-xs uppercase tracking-widest text-center">Vai Trò</th>
                            <th className="p-5 text-xs uppercase tracking-widest text-center">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {filteredAccounts.map((acc, i) => (
                            <tr key={i} className="hover:bg-blue-50/50 transition-colors group">
                                <td className="p-5 font-mono text-sm font-bold text-blue-600">{acc.MaTK}</td>
                                <td className="p-5 font-semibold text-gray-800">{acc.TenDangNhap}</td>
                                <td className="p-5">
                                    <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg font-bold text-sm border border-indigo-100">
                                        {acc.MaDinhDanh || <span className="text-gray-300 font-normal italic">Trống</span>}
                                    </span>
                                </td>
                                <td className="p-5 text-sm text-gray-500">{acc.Email}</td>
                                <td className="p-5 text-center">
    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter border shadow-sm ${
        Number(acc.Quyen) === 1 ? "bg-blue-100 text-blue-700 border-blue-200" :
        Number(acc.Quyen) === 2 ? "bg-amber-100 text-amber-700 border-amber-200" :
        Number(acc.Quyen) === 3 ? "bg-emerald-100 text-emerald-700 border-emerald-200" :
        "bg-purple-100 text-purple-700 border-purple-200"
    }`}>
        {getRoleName(acc.Quyen)}
    </span>
</td>
                                <td className="p-5 text-center">
                                    <button 
                                        onClick={() => handleDelete(acc.MaTK)} 
                                        className="p-2 bg-red-50 text-red-400 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm opacity-0 group-hover:opacity-100"
                                    >
                                        🗑️
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal Thêm tài khoản */}
            {showModal && (
                <div className="fixed inset-0 bg-blue-900/40 flex items-center justify-center z-50 p-4 backdrop-blur-md">
                    <div className="bg-white rounded-[2.5rem] p-10 w-full max-w-md shadow-2xl animate-in fade-in zoom-in duration-300 border border-white">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-2xl font-black text-blue-900">Tạo tài khoản</h3>
                            <button onClick={() => setShowModal(false)} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-400 hover:bg-red-500 hover:text-white transition-all">✕</button>
                        </div>
                        <form onSubmit={handleAddSubmit} className="space-y-5">
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-400 px-4 uppercase">Thông tin cơ bản</label>
                                <input required type="text" placeholder="Tên đăng nhập" 
                                    className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent outline-none focus:border-blue-500 transition-all"
                                    value={newUser.tenDangNhap} onChange={(e) => setNewUser({...newUser, tenDangNhap: e.target.value})} />
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-400 px-4 uppercase">Mã định danh (Bắt buộc)</label>
                                <input required type="text" placeholder="Ví dụ: 45511500xx" 
                                    className="w-full p-4 bg-blue-50/50 rounded-2xl border-2 border-blue-100 outline-none focus:border-blue-500 transition-all font-bold text-blue-700 placeholder:font-normal"
                                    value={newUser.maDinhDanh} onChange={(e) => setNewUser({...newUser, maDinhDanh: e.target.value})} />
                            </div>
                                
                            <input required type="email" placeholder="Địa chỉ Email" 
                                className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent outline-none focus:border-blue-500 transition-all"
                                value={newUser.email} onChange={(e) => setNewUser({...newUser, email: e.target.value})} />
                            
                            <select className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent outline-none focus:border-blue-500 transition-all font-semibold"
                                value={newUser.quyen} onChange={(e) => setNewUser({...newUser, quyen: e.target.value})}>
                                <option value="2">🎓 Sinh viên</option>
                                <option value="3">👨‍🏫 Giảng viên</option>
                                <option value="4">🏫 Giáo viên THPT</option>
                                <option value="1">🛡️ Quản trị viên</option>
                            </select>

                            <div className="flex gap-4 pt-6">
                                <button type="submit" className="flex-1 py-4 font-black text-white bg-blue-600 rounded-2xl shadow-lg shadow-blue-200 hover:bg-blue-700 transform hover:-translate-y-1 transition-all text-lg">Xác nhận tạo</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AccountManagementPage;