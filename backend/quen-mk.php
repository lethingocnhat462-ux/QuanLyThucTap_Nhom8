<?php
// Logic PHP xử lý khi nhấn nút Lưu
if (isset($_POST['btnLuu'])) {
    $identity = $_POST['ma_so'];
    // Xử lý logic tại xu-ly-quen-mk.php
}
?>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đặt Lại Mật Khẩu - Khoa Sư Phạm</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>

.bg-custom-blue {
    background:
    linear-gradient(135deg,#eef6ff 0%,#ffffff 50%,#dbeafe 100%) !important;
    background-attachment: fixed;
}


/* bỏ hiệu ứng sao tối */
.bg-custom-blue::before {
    display:none;
}


/* Card trắng */
.glass-form {
    background: rgba(255,255,255,0.85) !important;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border:1px solid #dbeafe;
    box-shadow:
    0 25px 60px rgba(37,99,235,.18);
}

/* Input sáng */
.glass-input {
    background:#f8fbff !important;
    border:1px solid #bfdbfe !important;
    color:#1e3a8a !important;
}
.glass-input:focus {
    background:white !important;
    border-color:#2563eb !important;
    box-shadow:
    0 0 0 4px rgba(37,99,235,.15);
}
.glass-input::placeholder {
    color:#94a3b8;
}
/* text */
.text-white {
    color:#1e3a8a !important;
}
.text-blue-100\/60 {
    color:#64748b !important;
}
.text-blue-200 {
    color:#2563eb !important;
}

/* nút */
button {
    background:#2563eb !important;
    color:white !important;
}
button:hover {
    background:#1d4ed8 !important;
}

</style>
</head>
<body class="bg-custom-blue min-h-screen flex flex-col font-sans relative overflow-hidden">

    <div class="absolute top-[-10%] left-[-10%] w-96 h-96 bg-white/10 rounded-full blur-[100px]"></div>
    <div class="absolute bottom-[-5%] right-[-5%] w-80 h-80 bg-blue-400/20 rounded-full blur-[100px]"></div>

    <div class="p-6 flex justify-between items-center relative z-10">
        <a href="http://localhost:3000/login" 
class="text-blue-700 font-bold hover:text-blue-900 transition-all flex items-center gap-2 text-xs uppercase tracking-widest">
            <span class="text-xl">←</span> Quay lại đăng nhập
        </a>
        <span class="font-black text-white/30 uppercase tracking-[0.3em] text-[10px]">KSP Digital System</span>
    </div>

    <div class="flex-grow flex items-center justify-center p-4 relative z-10">
        <form action="xu-ly-quen-mk.php" method="POST" class="glass-form p-10 rounded-[2.5rem] w-full max-w-md">
            
            <div class="flex justify-center mb-8">
                <div class="bg-white text-blue-700 w-16 h-16 flex items-center justify-center rounded-2xl font-black text-2xl shadow-xl shadow-blue-900/20">KSP</div>
            </div>
            
            <h2 class="text-3xl font-black text-center text-white mb-2 uppercase tracking-tighter">Đặt lại mật khẩu</h2>
            <p class="text-center text-blue-100/60 text-[10px] font-bold uppercase tracking-[0.3em] mb-10">An toàn & Bảo mật</p>

            <div class="space-y-6">
                <div>
                    <label class="block text-[10px] font-black text-blue-200 mb-2 uppercase tracking-widest">Mã định danh hoặc Email</label>
                    <input 
                        type="text" 
                        name="ma_so" 
                        placeholder="MSSV hoặc email@qnu.edu.vn" 
                        class="glass-input w-full p-4 rounded-2xl outline-none" 
                        required
                    />
                </div>

                <div>
                    <label class="block text-[10px] font-black text-blue-200 mb-2 uppercase tracking-widest">Mật khẩu mới</label>
                    <input 
                        type="password" 
                        name="password_new" 
                        placeholder="••••••••" 
                        class="glass-input w-full p-4 rounded-2xl outline-none" 
                        required
                    />
                </div>

                <div>
                    <label class="block text-[10px] font-black text-blue-200 mb-2 uppercase tracking-widest">Xác nhận mật khẩu</label>
                    <input 
                        type="password" 
                        name="password_confirm" 
                        placeholder="••••••••" 
                        class="glass-input w-full p-4 rounded-2xl outline-none" 
                        required
                    />
                </div>
            </div>

            <button type="submit" name="btnLuu" class="w-full bg-white text-blue-700 font-black py-4 rounded-2xl mt-10 hover:bg-blue-50 transition-all transform hover:scale-[1.02] active:scale-95 shadow-2xl uppercase tracking-widest text-xs">
                Cập nhật mật khẩu
            </button>
            
            <p class="text-center text-[9px] text-white/40 mt-8 font-bold leading-relaxed uppercase tracking-wider">
                Hệ thống tự động bảo mật dữ liệu người dùng.
            </p>
        </form>
    </div>

    <footer class="p-8 text-center text-white/20 text-[10px] font-black uppercase tracking-[0.5em]">
        © 2026 KHOA SƯ PHẠM - ĐHQN
    </footer>
</body>
</html>