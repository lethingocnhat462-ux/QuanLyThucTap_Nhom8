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
    background: linear-gradient(135deg, #0f172a 0%, #0a1e5f 50%, #000000 100%) !important;
    background-attachment: fixed;
}

/* Thêm hiệu ứng hạt sáng cho đỡ trống */
.bg-custom-blue::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url('https://www.transparenttextures.com/patterns/stardust.png');
    opacity: 0.1;
    pointer-events: none;
}

        /* Hiệu ứng kính sáng bóng (Light Glassmorphism) */
        .glass-form {
            background: rgba(255, 255, 255, 0.15) !important;
            backdrop-filter: blur(20px) saturate(160%);
            -webkit-backdrop-filter: blur(20px) saturate(160%);
            border: 1px solid rgba(255, 255, 255, 0.25);
            box-shadow: 0 25px 50px -12px rgba(255, 255, 255, 0.3);
        }

        /* Ô nhập liệu trong suốt nhẹ */
        .glass-input {
            background: rgba(255, 255, 255, 0.1) !important;
            border: 1px solid rgba(255, 255, 255, 0.2) !important;
            color: white !important;
            transition: all 0.3s ease;
        }
        .glass-input:focus {
            background: rgba(255, 255, 255, 0.2) !important;
            border-color: white !important;
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
        }
        .glass-input::placeholder {
            color: rgba(255, 255, 255, 0.4);
        }
    </style>
</head>
<body class="bg-custom-blue min-h-screen flex flex-col font-sans relative overflow-hidden">

    <div class="absolute top-[-10%] left-[-10%] w-96 h-96 bg-white/10 rounded-full blur-[100px]"></div>
    <div class="absolute bottom-[-5%] right-[-5%] w-80 h-80 bg-blue-400/20 rounded-full blur-[100px]"></div>

    <div class="p-6 flex justify-between items-center relative z-10">
        <a href="http://localhost:3000/login" class="text-white/80 font-bold hover:text-white transition-all flex items-center gap-2 text-xs uppercase tracking-widest">
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