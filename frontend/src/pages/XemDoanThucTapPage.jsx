import React, { useState, useEffect } from 'react';
import { MapPin, Building2, GraduationCap, Calendar, Users, Cpu } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const XemDoanThucTapPage = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const maTK = user?.MaTK;

    if (!maTK) {
      setLoading(false);
      return;
    }

    fetch(`http://localhost/get_doan_thuc_tap.php?maTK=${maTK}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.status === "success") {
          setData(result.data);
        }
      })
      .catch((err) => console.error("Fetch error:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f8fafc]">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-200 rounded-full animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full border-t-4 border-blue-600 rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-blue-900 font-bold animate-pulse tracking-tight">{t("Hệ thống đang đồng bộ dữ liệu...")}</p>
    </div>
  );

  const groupedData = data.reduce((groups, item) => {
    const group = (groups[item.MaDoan] || []);
    group.push(item);
    groups[item.MaDoan] = group;
    return groups;
  }, {});

  return (
    <div className="p-4 md:p-10 bg-[#f4f7ff] min-h-screen font-sans text-slate-900">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-black rounded-full uppercase tracking-widest border border-blue-200 shadow-sm">
                {t("GIẢNG VIÊN DASHBOARD")}
              </span>
            </div>
            <h1 className="text-4xl font-black tracking-tight flex items-center gap-3">
              {t("Quản lý")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">{t("Đoàn Thực Tập")}</span>
            </h1>
            <p className="text-slate-600 font-bold mt-2">{t("Theo dõi và quản lý danh sách sinh viên thực tập tại các đơn vị")}</p>
          </div>
          
          <div className="hidden lg:flex bg-white p-5 rounded-2xl shadow-sm border border-gray-200 items-center gap-4">
            <div className="bg-blue-600 p-3 rounded-xl text-white shadow-lg shadow-blue-200">
               <Users size={24} />
            </div>
            <div>
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-tighter">{t("TỔNG SỐ ĐOÀN")}</p>
              <p className="text-2xl font-black leading-none">{Object.keys(groupedData).length}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-10">
        {Object.keys(groupedData).length > 0 ? (
          Object.keys(groupedData).map((maDoan) => {
            const info = groupedData[maDoan][0];
            return (
              <div key={maDoan} className="group bg-white rounded-[2.5rem] shadow-xl shadow-blue-900/5 border border-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-blue-100">
                {/* Header Card */}
                <div className="relative bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] p-8 md:p-10 text-white">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                    <Cpu size={120} />
                  </div>
                  
                  <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-blue-100 text-[11px] font-black tracking-[0.2em] uppercase bg-white/10 w-fit px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm">
                        <Building2 size={14} />
                        <span>{t("Mã đoàn")}: {maDoan}</span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight italic border-l-4 border-blue-400 pl-4">
                        {info.TenDoan}
                      </h2>
                      <div className="flex flex-wrap gap-4 mt-4">
                        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 shadow-sm transition-colors hover:bg-white/30">
                          <MapPin size={18} className="text-blue-200" />
                          <span className="text-sm font-black tracking-tight">{info.TenDonVi} • {info.DiaChi}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end">
                      <div className="bg-white text-blue-900 p-5 rounded-[2rem] shadow-2xl min-w-[140px] text-center transform transition-transform hover:scale-105">
                        <div className="flex items-center gap-2 text-blue-500 mb-1 justify-center">
                          <Calendar size={14} />
                          <span className="text-[10px] uppercase font-black tracking-widest">{t("Năm học")}</span>
                        </div>
                        <p className="text-3xl font-black tracking-tighter">{info.NamHoc}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Table Section */}
                <div className="p-4 md:p-8 overflow-x-auto">
                  <table className="w-full border-separate border-spacing-y-3">
                    <thead>
                      <tr className="text-slate-500 text-[12px] uppercase font-black tracking-[0.15em]">
                        <th className="px-6 py-4 text-left">{t("Thông tin sinh viên")}</th>
                        <th className="px-6 py-4 text-left">{t("Chuyên ngành đào tạo")}</th>
                        <th className="px-6 py-4 text-center">{t("Tình trạng")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {groupedData[maDoan].map((sv) => (
                        <tr key={sv.MaSV} className="group/row">
                          <td className="px-6 py-5 bg-slate-50/80 group-hover/row:bg-blue-50 rounded-l-[1.5rem] border-y border-l border-transparent group-hover/row:border-blue-200 transition-all">
                            <div className="flex items-center gap-5">
                              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-700 font-black text-xl shadow-sm border border-slate-100 group-hover/row:scale-110 transition-transform">
                                {sv.HoTenSV.charAt(0)}
                              </div>
                              <div>
                                <p className="font-black text-slate-900 text-lg leading-tight tracking-tight">{sv.HoTenSV}</p>
                                <p className="text-xs text-blue-700 font-black font-mono mt-1 tracking-widest bg-blue-100 w-fit px-2 rounded">#{sv.MaSV}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-5 bg-slate-50/80 group-hover/row:bg-blue-50 border-y border-transparent group-hover/row:border-blue-200 transition-all">
                            <div className="flex items-center gap-3 text-slate-800 font-extrabold">
                              <GraduationCap size={20} className="text-slate-400" />
                              <span className="text-[15px] tracking-tight">{sv.Nganh}</span>
                            </div>
                          </td>
                          <td className="px-6 py-5 bg-slate-50/80 group-hover/row:bg-blue-50 rounded-r-[1.5rem] border-y border-r border-transparent group-hover/row:border-blue-200 text-center transition-all">
                            <span className="inline-flex items-center px-4 py-1.5 rounded-xl text-[11px] font-black bg-emerald-100 text-emerald-800 uppercase tracking-widest shadow-sm border border-emerald-200">
                              {t("Đang thực tập")}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })
        ) : (
          <div className="bg-white p-24 rounded-[3rem] shadow-xl border-4 border-dashed border-slate-100 text-center">
            <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8 text-slate-200">
              <Users size={48} />
            </div>
            <h3 className="text-2xl font-black tracking-tight">{t("Dữ liệu hiện đang trống")}</h3>
            <p className="text-slate-500 font-bold mt-2">{t("Hiện tại Thầy/Cô chưa có đoàn thực tập nào được phân công.")}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default XemDoanThucTapPage;