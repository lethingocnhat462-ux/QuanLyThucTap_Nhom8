import React, { useState, useEffect, useRef } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, PieController } from 'chart.js';
import { useTranslation } from 'react-i18next';
import { UserPlus, Search, Trash2, Settings, ShieldCheck, UserCircle, School, GraduationCap } from 'lucide-react';

ChartJS.register(ArcElement, Tooltip, Legend, PieController);

const AccountManagementPage = () => {
    const { t } = useTranslation();
    const [data, setData] = useState({ stats: { admin: 0, student: 0, teacher: 0, unit: 0 }, accounts: [] });
    const [searchTerm, setSearchTerm] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true);
    
    const [newUser, setNewUser] = useState({ 
        tenDangNhap: '', 
        maDinhDanh: '', 
        email: '', 
        quyen: '2' 
    });

    const canvasRef = useRef(null);
    const chartInstance = useRef(null);

    const fetchData = () => {
        setLoading(true);
        fetch('http://localhost/get_account_management.php')
            .then(res => res.json())
            .then(result => {
                if (result.status === "success") setData(result);
            })
            .catch(err => console.error("Lỗi kết nối:", err))
            .finally(() => setLoading(false));
    };

    useEffect(() => { fetchData(); }, []);

    useEffect(() => {
        if (canvasRef.current && !loading) {
            if (chartInstance.current) chartInstance.current.destroy();
            const ctx = canvasRef.current.getContext('2d');
            chartInstance.current = new ChartJS(ctx, {
                type: 'pie',
                data: {
                    labels: [t('QUẢN TRỊ VIÊN'), t('SINH VIÊN'), t('GIẢNG VIÊN'), t('GIÁO VIÊN THPT')],
                    datasets: [{
                        data: [data.stats.admin, data.stats.student, data.stats.teacher, data.stats.unit],
                        backgroundColor: ['#1d4ed8', '#ca8a04', '#16a34a', '#9333ea'],
                        hoverOffset: 20,
                        borderWidth: 4,
                        borderColor: '#ffffff'
                    }]
                },
                options: { 
                    maintainAspectRatio: false, 
                    plugins: { 
                        legend: { 
                            position: 'bottom',
                            labels: { font: { weight: 'bold', size: 12 }, padding: 20 }
                        } 
                    } 
                }
            });
        }
    }, [data.stats, t, loading]);

    const handleDelete = async (maTK) => {
        if (window.confirm(`${t("Bạn có chắc muốn xóa vĩnh viễn tài khoản")} ${maTK}?`)) {
            try {
                const response = await fetch(`http://localhost/delete_account.php?id=${maTK}`, { method: 'DELETE' });
                const result = await response.json();
                if (result.status === "success") {
                    alert(t("Đã xóa khỏi Database!"));
                    fetchData();
                }
            } catch (err) { 
                alert("Error connecting to delete API!"); 
            }
        }
    };

    const handleAddSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost/add_account.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUser)
            });
            const result = await response.json();
            if (result.status === "success") {
                alert(t("Thêm tài khoản thành công!"));
                setShowModal(false);
                setNewUser({ tenDangNhap: '', maDinhDanh: '', email: '', quyen: '2' });
                fetchData();
            } else {
                alert(result.message);
            }
        } catch (err) {
            alert("Server connection failed!");
        }
    };

    const getRoleBadge = (role) => {
        const roles = {
            1: { label: t("QUẢN TRỊ VIÊN"), class: "bg-blue-100 text-blue-700 border-blue-200" },
            2: { label: t("SINH VIÊN"), class: "bg-amber-100 text-amber-700 border-amber-200" },
            3: { label: t("GIẢNG VIÊN"), class: "bg-emerald-100 text-emerald-700 border-emerald-200" },
            4: { label: t("GIÁO VIÊN THPT"), class: "bg-purple-100 text-purple-700 border-purple-200" }
        };
        const r = roles[Number(role)] || { label: "N/A", class: "bg-gray-100" };
        return <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-tight border shadow-sm ${r.class}`}>{r.label}</span>;
    };

    const filteredAccounts = data.accounts.filter(acc => 
        acc.MaTK?.toLowerCase().includes(searchTerm.toLowerCase()) || 
        acc.TenDangNhap?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        acc.MaDinhDanh?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        acc.Email?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4 md:p-10 bg-[#f8fafc] min-h-screen font-sans text-slate-900">
            {/* Header */}
            <div className="max-w-7xl mx-auto mb-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h2 className="text-4xl font-black tracking-tight flex items-center gap-3">
                            <span className="p-3 bg-blue-600 text-white rounded-2xl shadow-xl shadow-blue-200"><Settings size={32} /></span> 
                            {t("Quản trị hệ thống tài khoản")}
                        </h2>
                        <p className="text-slate-500 font-bold mt-2 ml-1">{t("Theo dõi và điều phối nhân sự trong hệ thống")}</p>
                    </div>
                    <button onClick={() => setShowModal(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1">
                        <UserPlus size={20} /> {t("Thêm mới")}
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                {/* Chart Card */}
                <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-white flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2 h-64 relative">
                        <canvas ref={canvasRef}></canvas>
                    </div>
                    <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
                        {[
                            { label: 'QUẢN TRỊ VIÊN', color: '#1d4ed8', val: data.stats.admin, icon: <ShieldCheck size={16}/> },
                            { label: 'SINH VIÊN', color: '#ca8a04', val: data.stats.student, icon: <GraduationCap size={16}/> },
                            { label: 'GIẢNG VIÊN', color: '#16a34a', val: data.stats.teacher, icon: <UserCircle size={16}/> },
                            { label: 'GIÁO VIÊN THPT', color: '#9333ea', val: data.stats.unit, icon: <School size={16}/> }
                        ].map((item) => (
                            <div key={item.label} className="p-4 rounded-2xl bg-slate-50 border-b-4 transition-all hover:shadow-md" style={{borderBottomColor: item.color}}>
                                <div className="flex items-center gap-2 mb-1">
                                    <span style={{color: item.color}}>{item.icon}</span>
                                    <p className="text-[10px] font-black text-slate-400 tracking-widest">{t(item.label)}</p>
                                </div>
                                <p className="text-3xl font-black" style={{color: item.color}}>{item.val}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Search Card */}
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-[2.5rem] shadow-xl shadow-blue-200 text-white flex flex-col justify-center">
                    <h3 className="text-xl font-black mb-4 flex items-center gap-2 italic uppercase"><Search size={20} /> {t("Tìm kiếm nhanh")}</h3>
                    <input 
                        type="text" placeholder={t("Tìm kiếm nhanh mã định danh, tên...")} 
                        className="w-full p-5 rounded-2xl bg-white/10 border-2 border-white/20 backdrop-blur-md outline-none focus:bg-white focus:text-slate-900 transition-all font-bold placeholder:text-white/50"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Table */}
            <div className="max-w-7xl mx-auto bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50 border-b border-slate-100">
                                <th className="p-6 text-[11px] font-black uppercase tracking-widest text-slate-400">{t("Mã TK")}</th>
                                <th className="p-6 text-[11px] font-black uppercase tracking-widest text-slate-400">{t("Tên đăng nhập")}</th>
                                <th className="p-6 text-[11px] font-black uppercase tracking-widest text-slate-400">{t("Mã định danh")}</th>
                                <th className="p-6 text-[11px] font-black uppercase tracking-widest text-slate-400">{t("Vai Trò")}</th>
                                <th className="p-6 text-[11px] font-black uppercase tracking-widest text-slate-400 text-center">{t("Thao tác")}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {filteredAccounts.map((acc, i) => (
                                <tr key={i} className="hover:bg-blue-50/30 transition-colors group">
                                    <td className="p-6 font-mono text-sm font-black text-blue-600">{acc.MaTK}</td>
                                    <td className="p-6">
                                        <p className="font-black text-slate-800 text-lg">{acc.TenDangNhap}</p>
                                        <p className="text-xs text-slate-400 font-bold">{acc.Email}</p>
                                    </td>
                                    <td className="p-6">
                                        <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg font-black text-xs border border-indigo-100">
                                            {acc.MaDinhDanh || <span className="text-slate-300 italic">{t("Trống")}</span>}
                                        </span>
                                    </td>
                                    <td className="p-6">{getRoleBadge(acc.Quyen)}</td>
                                    <td className="p-6 text-center">
                                        <button onClick={() => handleDelete(acc.MaTK)} className="p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm opacity-0 group-hover:opacity-100">
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-[3rem] p-10 w-full max-w-md shadow-2xl border border-white">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-3xl font-black text-slate-900 tracking-tight">{t("Tạo tài khoản")}</h3>
                            <button onClick={() => setShowModal(false)} className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-100 text-slate-400 hover:bg-red-500 hover:text-white transition-all font-black">✕</button>
                        </div>
                        <form onSubmit={handleAddSubmit} className="space-y-4">
                            <input required type="text" placeholder={t("Tên đăng nhập")} className="w-full p-5 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none font-bold transition-all" value={newUser.tenDangNhap} onChange={(e) => setNewUser({...newUser, tenDangNhap: e.target.value})} />
                            <input required type="text" placeholder={t("Mã định danh")} className="w-full p-5 bg-blue-50 border-2 border-blue-100 rounded-2xl focus:border-blue-500 outline-none font-black text-blue-700" value={newUser.maDinhDanh} onChange={(e) => setNewUser({...newUser, maDinhDanh: e.target.value})} />
                            <input required type="email" placeholder="Email" className="w-full p-5 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none font-bold transition-all" value={newUser.email} onChange={(e) => setNewUser({...newUser, email: e.target.value})} />
                            <select className="w-full p-5 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-500 outline-none font-black" value={newUser.quyen} onChange={(e) => setNewUser({...newUser, quyen: e.target.value})}>
                                <option value="2">🎓 {t("SINH VIÊN")}</option>
                                <option value="3">👨‍🏫 {t("GIẢNG VIÊN")}</option>
                                <option value="4">🏫 {t("GIÁO VIÊN THPT")}</option>
                                <option value="1">🛡️ {t("QUẢN TRỊ VIÊN")}</option>
                            </select>
                            <button type="submit" className="w-full py-5 font-black text-white bg-blue-600 rounded-[2rem] shadow-xl shadow-blue-200 hover:bg-blue-700 mt-6 transition-all text-lg uppercase tracking-widest italic">{t("Xác nhận tạo")}</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AccountManagementPage;