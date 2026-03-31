import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ReportsPage = () => {
  const { t } = useTranslation();
  const [fileError, setFileError] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files.length > 3) {
      setFileError(true);
      e.target.value = ''; 
    } else {
      setFileError(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-gray-100">
      {/* Header trang */}
      <div className="bg-white p-4 shadow-sm font-bold text-blue-900 border-b uppercase">
        {t("Hệ thống nộp báo cáo")}
      </div>
      
      {/* Nội dung Form */}
      <div className="p-6 flex-1 flex justify-center overflow-y-auto">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-lg border border-blue-100 overflow-hidden self-start">
          <div className="bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#3b82f6] p-8 text-white">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30">
                <span className="text-2xl">📤</span>
              </div>
              <div>
                <h2 className="text-xl font-black uppercase tracking-tight">
                  {t("Hệ thống")} <span className="text-blue-200">{t("Nộp báo cáo")}</span>
                </h2>
                <p className="text-blue-100/70 text-[10px] font-mono mt-1 uppercase">Portal Upload v2.0 • KSP Secure</p>
              </div>
            </div>
          </div>

          <form className="p-8 space-y-6">
            <div>
              <label className="block text-[12px] font-bold text-slate-600 uppercase mb-2">{t("Mã số sinh viên")}</label>
              <input type="text" placeholder={t("Nhập MSSV của bạn...")} className="w-full bg-slate-50 border-2 p-4 rounded-2xl outline-none focus:border-blue-500 font-semibold" />
            </div>

            <div>
              <label className="block text-[12px] font-bold text-slate-600 uppercase mb-2">{t("Phân loại báo cáo")}</label>
              <select className="w-full bg-slate-50 border-2 p-4 rounded-2xl outline-none focus:border-blue-400 cursor-pointer">
                <option>{t("Báo cáo thực tập cuối kỳ")}</option>
                <option>{t("Hồ sơ giáo án giảng dạy")}</option>
                <option>{t("Tài liệu bổ sung khác")}</option>
              </select>
            </div>

            <div>
              <label className="block text-[12px] font-bold text-slate-600 uppercase mb-2">{t("Tệp đính kèm (Tối đa 3 file PDF/Word)")}</label>
              <input type="file" multiple onChange={handleFileChange} className="w-full p-2 bg-slate-50 border-2 border-dashed rounded-2xl" />
              {fileError && <p className="text-red-500 text-[10px] font-bold mt-1">⚠️ {t("Bạn chỉ được phép chọn tối đa 3 tệp tin.")}</p>}
              <p className="text-[10px] text-slate-400 italic mt-1 font-medium">* {t("Dung lượng tối đa: 20MB/file. Định dạng: .pdf, .docx")}</p>
            </div>

            <button type="submit" className="w-full bg-[#1e3a8a] text-white font-black py-4 rounded-2xl uppercase hover:scale-[1.02] transition-all shadow-lg">
              {t("Xác nhận gửi báo cáo")}
            </button>
          </form>

          <div className="bg-slate-50/50 border-t p-6 text-center">
            <p className="text-[9px] text-slate-400 font-mono uppercase tracking-widest">{t("Đảm bảo an toàn dữ liệu bởi KSP Cloud Security")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;