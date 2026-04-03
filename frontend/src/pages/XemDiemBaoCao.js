import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const XemDiemBaoCao = ({ maSV }) => {
    const { t } = useTranslation();
    const [listDiem, setListDiem] = useState([]);

    useEffect(() => {
        if (maSV) {
            axios.get(`http://localhost/get_diem_sinhvien.php?maSV=${maSV}`)
                .then(res => {
                    setListDiem(Array.isArray(res.data) ? res.data : []);
                })
                .catch(err => {
                    console.error("API Error:", err);
                });
        }
    }, [maSV]);

    return (
        <div className="bg-slate-50 min-h-screen p-4 md:p-10 font-sans">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight flex items-center">
                            <span className="bg-blue-600 text-white p-2 rounded-lg mr-4 shadow-blue-200 shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            {t('KẾT QUẢ CHẤM ĐIỂM TỪ GV PHỔ THÔNG')}
                        </h2>
                        <p className="text-slate-500 mt-2 ml-14 font-medium italic">
                            {t('Hệ thống cập nhật điểm thực tập tự động')}
                        </p>
                    </div>
                </div>

                {/* Table Card */}
                <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-slate-800 text-slate-100">
                                    <th className="py-5 px-6 font-semibold uppercase text-xs tracking-wider">{t('Tên tệp tin')}</th>
                                    <th className="py-5 px-6 font-semibold uppercase text-xs tracking-wider">{t('Loại báo cáo')}</th>
                                    <th className="py-5 px-6 font-semibold uppercase text-xs tracking-wider text-center">{t('Điểm')}</th>
                                    <th className="py-5 px-6 font-semibold uppercase text-xs tracking-wider">{t('Nhận xét của Giáo viên')}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {listDiem.length > 0 ? (
                                    listDiem.map((item, index) => (
                                        <tr key={index} className="transition-all duration-200 hover:bg-blue-50/30 group">
                                            <td className="py-5 px-6">
                                                <div className="flex items-center">
                                                    <div className="p-2 bg-slate-100 rounded-md mr-3 group-hover:bg-blue-100 transition-colors">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-sm font-semibold text-slate-700 truncate max-w-xs uppercase italic tracking-tight">
                                                        {item.TenFile}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="py-5 px-6">
                                                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase">
                                                    {t(item.Loai)}
                                                </span>
                                            </td>
                                            <td className="py-5 px-6 text-center">
                                                {item.TrangThai === "1" ? (
                                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-red-50 border border-red-100 shadow-sm shadow-red-100">
                                                        <span className="text-2xl font-black text-red-600 leading-none">
                                                            {item.Diem}
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <span className="text-slate-400 font-medium italic text-sm animate-pulse">
                                                        {t('Đang chấm...')}
                                                    </span>
                                                )}
                                            </td>
                                            <td className="py-5 px-6">
                                                <div className="bg-amber-50/50 p-4 rounded-2xl border-l-4 border-amber-400">
                                                    <p className="text-sm text-slate-700 leading-relaxed">
                                                        {item.GhiChuGV ? item.GhiChuGV : (
                                                            <span className="text-slate-400 italic">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>
                                                                {t('Chưa có nhận xét')}
                                                            </span>
                                                        )}
                                                    </p>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="py-20 text-center">
                                            <div className="flex flex-col items-center">
                                                <div className="bg-slate-100 p-4 rounded-full mb-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                                                    </svg>
                                                </div>
                                                <span className="text-slate-400 font-medium text-lg">
                                                    {t('Bạn chưa nộp báo cáo nào hoặc dữ liệu đang được cập nhật.')}
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                {/* Footer Insight */}
                <div className="mt-6 text-right">
                    <p className="text-slate-400 text-xs font-medium">
                        © 2026 QNU - KSP Secure Dashboard v2.0
                    </p>
                </div>
            </div>
        </div>
    );
};

export default XemDiemBaoCao;