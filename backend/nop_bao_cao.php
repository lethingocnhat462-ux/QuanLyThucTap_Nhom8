<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Nộp Báo Cáo - KSP</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 p-6"> <div class="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-200">
        <h2 class="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
            <span>📤</span> Tải lên báo cáo thực tập
        </h2>
        
        <form action="xuly_nop.php" method="POST" enctype="multipart/form-data" class="space-y-5">
            <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1">Mã số sinh viên</label>
                <input type="text" name="ma_sv" required class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
            </div>

            <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1">Loại tài liệu</label>
                <select name="loai" class="w-full p-3 border border-gray-300 rounded-lg outline-none">
                    <option value="Báo cáo">Báo cáo thực tập</option>
                    <option value="Giáo án">Giáo án giảng dạy</option>
                </select>
            </div>

            <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1">Chọn tệp tin (PDF/Word)</label>
                <input type="file" name="file_tai_lieu" accept=".pdf,.doc,.docx" required class="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100">
            </div>

            <button type="submit" name="btnNop" class="w-full bg-[#1e3a8a] text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-all shadow-lg mt-4">
                XÁC NHẬN GỬI BÁO CÁO
            </button>
        </form>
    </div>

</body>
</html>