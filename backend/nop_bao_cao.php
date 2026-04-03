<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nộp Báo Cáo - KSP Secure Portal</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; }
        .glass-effect { background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); }
    </style>
</head>
<body class="bg-[#f0f4f8] min-h-screen p-4 md:p-12 relative overflow-x-hidden">
    
    <div class="absolute top-0 right-0 w-1/4 h-1/4 bg-blue-400/10 rounded-full blur-[100px] pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-1/4 h-1/4 bg-indigo-400/10 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="max-w-2xl mx-auto relative z-10">
        <div class="glass-effect rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-blue-100 overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_rgba(37,99,235,0.08)]">
            
            <div class="bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#3b82f6] p-8 md:p-10 text-white relative">
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30 shadow-lg">
                        <span class="text-2xl"></span>
                    </div>
                    <div>
                        <h2 class="text-xl md:text-2xl font-black uppercase tracking-tight">
                            Hệ thống <span class="text-blue-200">Nộp báo cáo</span>
                        </h2>
                        <p class="text-blue-100/70 text-[10px] font-mono tracking-[0.2em] mt-1 uppercase">Portal Upload v2.0 • KSP Secure</p>
                    </div>
                </div>
            </div>

            <form action="xuly_nop.php" method="POST" enctype="multipart/form-data" class="p-8 md:p-10 space-y-7">
                
                <div class="space-y-2">
                    <div class="flex items-center gap-2 mb-1">
                        <div class="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <label class="text-[12px] font-bold text-slate-600 uppercase tracking-widest">Mã số sinh viên</label>
                    </div>
                    <input type="text" name="ma_sv" required 
                        placeholder="Nhập MSSV của bạn..."
                        class="w-full bg-slate-50 border-2 border-slate-100 p-4 rounded-2xl outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/5 font-semibold text-slate-800 shadow-sm">
                </div>

                <div class="space-y-2">
                    <div class="flex items-center gap-2 mb-1">
                        <div class="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        <label class="text-[12px] font-bold text-slate-600 uppercase tracking-widest">Phân loại báo cáo</label>
                    </div>
                    <select name="loai" class="w-full bg-slate-50 border-2 border-slate-100 p-4 rounded-2xl outline-none appearance-none transition-all focus:border-blue-400 focus:bg-white font-medium text-slate-800 cursor-pointer">
                        <option value="Báo cáo">Báo cáo thực tập cuối kỳ</option>
                        <option value="Giáo án">Hồ sơ giáo án giảng dạy</option>
                        <option value="Khác">Tài liệu bổ sung khác</option>
                    </select>
                </div>

                <div class="space-y-2">
                    <div class="flex items-center gap-2 mb-1">
                        <div class="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                        <label class="text-[12px] font-bold text-slate-600 uppercase tracking-widest">Tệp đính kèm (Tối đa 3 file PDF/Word)</label>
                    </div>
                    <div class="group relative">
                        <input type="file" id="file_input" name="file_tai_lieu[]" accept=".pdf,.doc,.docx" required multiple 
                            class="w-full text-sm text-slate-500 file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:text-xs file:font-black file:uppercase file:bg-blue-600 file:text-white hover:file:bg-blue-700 file:transition-all file:cursor-pointer p-2 bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl group-hover:border-blue-300 transition-colors">
                    </div>
                    <p id="file_count_error" class="text-[10px] text-red-500 font-bold hidden mt-1">⚠️ Bạn chỉ được phép chọn tối đa 3 tệp tin.</p>
                    <p class="text-[10px] text-slate-400 italic mt-1 font-medium">* Dung lượng tối đa: 20MB/file. Định dạng: .pdf, .docx</p>
                </div>

                <div class="flex justify-center pt-4">
                    <button type="submit" name="btnNop" 
                        class="group relative overflow-hidden bg-[#1e3a8a] text-white font-black py-4 px-12 rounded-2xl shadow-[0_15px_30px_rgba(30,58,138,0.2)] transition-all hover:scale-105 active:scale-95 tracking-[0.1em] text-sm w-full md:w-auto uppercase">
                        Xác nhận gửi báo cáo
                    </button>
                </div>
            </form>

            <div class="bg-slate-50/50 border-t border-slate-100 p-6 text-center">
                <p class="text-[9px] text-slate-400 font-mono uppercase tracking-[0.4em]">Đảm bảo an toàn dữ liệu bởi KSP Cloud Security</p>
            </div>
        </div>
    </div>

    <script>
        const fileInput = document.getElementById('file_input');
        const errorMsg = document.getElementById('file_count_error');

        fileInput.addEventListener('change', function() {
            if (this.files.length > 3) {
                errorMsg.classList.remove('hidden');
                this.value = ''; // Reset lại nếu chọn quá 3
            } else {
                errorMsg.classList.add('hidden');
            }
        });
    </script>
</body>
</html>