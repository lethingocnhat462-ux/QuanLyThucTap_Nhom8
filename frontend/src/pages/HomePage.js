import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const newBubbles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      size: Math.random() * 40 + 10 + 'px',
      left: Math.random() * 100 + '%',
      duration: Math.random() * 15 + 10 + 's',
      delay: Math.random() * 5 + 's',
      opacity: Math.random() * 0.5 + 0.1
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <>
      <style>{`

/* ===== GLOBAL ===== */

html,body{
margin:0;
overflow-x:hidden;
background:#0f172a;
font-family:Inter,system-ui;
}


/* ===== AI BACKGROUND ===== */

.bg-ai-network{
position:relative;

background:
radial-gradient(circle at 10% 20%, rgba(59,130,246,.25), transparent 40%),
radial-gradient(circle at 90% 80%, rgba(147,51,234,.18), transparent 45%),
radial-gradient(circle at 50% 50%, rgba(14,165,233,.12), transparent 60%),
linear-gradient(135deg,#0f172a,#1e293b);

min-height:100vh;
width:100%;
}

/* ===== NEURAL NETWORK ===== */

.bg-ai-network::before{

content:"";
position:absolute;
inset:0;

background-image:

linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px);

background-size:120px 120px;
animation:gridMove 30s linear infinite;
pointer-events:none;
}

@keyframes gridMove{
from{transform:translateY(0)}
to{transform:translateY(120px)}
}
.stat-card{

/* ghi đè viền xanh của glass-card-tech */
border:1px solid rgba(255,255,255,.45) !important;

outline:2px solid rgba(255,255,255,.18) !important;

outline-offset:3px;

/* glow trắng */
box-shadow:
0 0 18px rgba(255,255,255,.25),
0 25px 60px rgba(0,0,0,.35);

/* giữ nguyên hiệu ứng card */
}

/* tắt viền gradient xanh */
.stat-card::after{
display:none;
}

.stat-card:hover{

border:1px solid rgba(255,255,255,.65) !important;

outline:2px solid rgba(255,255,255,.35) !important;

box-shadow:
0 0 30px rgba(255,255,255,.35),
0 40px 100px rgba(0,0,0,.55);

transform:translateY(-6px) scale(1.02);

}
/* ===== GLASS CARD ===== */

.glass-card-tech{

position:relative;

background:rgba(255,255,255,.08);
backdrop-filter:blur(28px) saturate(180%);
-webkit-backdrop-filter:blur(28px) saturate(180%);
border-radius:24px;
border:1px solid rgba(255,255,255,.15);
box-shadow:
0 25px 60px rgba(0,0,0,.35),
inset 0 0 25px rgba(255,255,255,.05);
transition:all .35s cubic-bezier(.23,1,.32,1);
overflow:hidden;
}

/* reflection */

.glass-card-tech::after{
content:"";
position:absolute;
inset:0;
border-radius:24px;
padding:1px;

background:linear-gradient(
120deg,
rgba(59,130,246,.6),
rgba(147,51,234,.6),
rgba(6,182,212,.6)
);

-webkit-mask:
linear-gradient(#000 0 0) content-box,
linear-gradient(#000 0 0);

-webkit-mask-composite:xor;
mask-composite:exclude;
opacity:.4;
}

/* hover glow */

.glass-card-tech:hover{

transform:translateY(-8px) scale(1.02);
box-shadow:
0 40px 100px rgba(0,0,0,.55),
0 0 35px rgba(59,130,246,.35);
}

/* ===== BUBBLE ===== */

.bubble{

position:absolute;
bottom:-100px;
background:
radial-gradient(circle at 30% 30%,rgba(255,255,255,.35),rgba(255,255,255,.08));
border:1px solid rgba(255,255,255,.15);
border-radius:50%;
animation:floatUp linear infinite;
backdrop-filter:blur(6px);
z-index:1;
}

@keyframes floatUp{

from{
transform:translateY(0) scale(1);
opacity:0;
}

30%{
opacity:.45;
}

to{
transform:translateY(-130vh) scale(1.9);
opacity:0;
}

}

/* ===== HEADING ===== */

.heading-ai-glow{

background:linear-gradient(
to bottom,
#ffffff,
#dbeafe 40%,
#60a5fa
);

-webkit-background-clip:text;
-webkit-text-fill-color:transparent;

filter:drop-shadow(0 0 25px rgba(96,165,250,.4));

font-weight:900;

}
/* ===== BUTTON ===== */

button:first-child{

background:linear-gradient(135deg,#3b82f6,#2563eb);

box-shadow:0 10px 30px rgba(37,99,235,.4);

}

button:first-child:hover{

box-shadow:0 15px 45px rgba(37,99,235,.6);

}
.btn-start{

background:linear-gradient(135deg,#3b82f6,#2563eb);
border:1px solid rgba(147,197,253,.6);

box-shadow:
0 10px 30px rgba(37,99,235,.4),
0 0 15px rgba(59,130,246,.5);

position:relative;
overflow:hidden;

}

.btn-start:hover{

box-shadow:
0 15px 45px rgba(37,99,235,.7),
0 0 25px rgba(59,130,246,.8);

transform:scale(1.05);

}
/* ===== TEXT ===== */

p{
color:#cbd5f5;
}

`}</style>

<div className="bg-ai-network min-h-screen relative overflow-hidden flex flex-col">

{/* bubbles */}

<div className="absolute inset-0 z-0 pointer-events-none">
{bubbles.map(b => (
<div
key={b.id}
className="bubble"
style={{
width:b.size,
height:b.size,
left:b.left,
animationDuration:b.duration,
animationDelay:b.delay,
opacity:b.opacity
}}
/>
))}
</div>

<header className="relative pt-32 pb-20 px-4 text-center z-10">

<div className="inline-block px-4 py-1.5 mb-8 text-[10px] font-bold tracking-[0.4em] text-blue-400 uppercase bg-blue-500/10 border border-blue-500/30 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.1)]">
Intelligence Education System
</div>

<h1 className="text-5xl md:text-7xl mb-8 leading-tight heading-ai-glow uppercase">
HỆ THỐNG QUẢN LÝ <br/>
<span className="text-white">THỰC TẬP SƯ PHẠM</span>
</h1>

<p className="max-w-2xl mx-auto text-blue-100/70 text-lg md:text-xl mb-12 font-medium">
Nâng tầm trải nghiệm thực tập với công nghệ <span className="text-blue-400 font-bold">Smart-AI</span>, kết nối tri thức và tối ưu hóa tương lai.
</p>

<div className="flex justify-center gap-6">

<button
onClick={() => navigate('/login')}
className="btn-start px-10 py-4 rounded-xl font-bold transition-all text-white"
>
BẮT ĐẦU NGAY
</button>

<Link 
  to="/quy-trinh" 
  className="flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white font-medium rounded-xl
  bg-white/5 backdrop-blur-sm no-underline
             hover:bg-white/10 hover:border-white/40 hover:scale-105 
             transition-all duration-300 shadow-lg"
>
  {/* Icon Con Mắt (SVG cho sắc nét) */}
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className="w-5 h-5"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.644C3.67 8.5 7.652 6 12 6c4.348 0 8.332 2.5 9.964 5.678a1.012 1.012 0 0 1 0 .644C20.33 15.5 16.348 18 12 18c-4.348 0-8.332-2.5-9.964-5.678Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>

  <span>XEM QUY TRÌNH</span>
</Link>

</div>

</header>

<section className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6 relative z-10 w-full">

<StatCard icon="👨‍🎓" title="Sinh viên" value="1,250+" color="#3b82f6"/>
<StatCard icon="🏫" title="Trường đối tác" value="45" color="#a855f7"/>
<StatCard icon="📄" title="Báo cáo" value="85%" color="#06b6d4"/>
<StatCard icon="✅" title="Hoàn thành" value="320" color="#10b881"/>

</section>

<main className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10 w-full flex-grow">

<div className="lg:col-span-2 space-y-8">

<h3 className="text-2xl font-bold text-white flex items-center gap-3">
<span className="w-1.5 h-8 bg-blue-500 rounded-full"></span>
BẢN TIN CÔNG NGHỆ
</h3>

<div className="grid gap-6">

<NewsItem tag="AI UPDATE" title="Hướng dẫn nộp hồ sơ thực tập qua cổng AI Smart" time="3 giờ trước"/>

<NewsItem tag="LỊCH TRÌNH" title="Cập nhật danh sách phân công trường đợt 2 - Năm 2026" time="1 ngày trước"/>

</div>

</div>

<aside className="glass-card-tech p-8 h-fit">

<h3 className="text-lg font-bold mb-8 text-blue-400 tracking-widest uppercase">
Lộ trình số
</h3>

<div className="space-y-6">

<Step num="1" text="Đăng ký nguyện vọng" active/>

<Step num="2" text="Nhận phân công AI"/>

<Step num="3" text="Thực tập số hóa"/>

</div>

</aside>

</main>

<footer className="pt-16 pb-8 px-8 mt-auto bg-black/40 backdrop-blur-xl border-t border-white/5">

<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

<div className="col-span-1 md:col-span-2">

<div className="flex items-center gap-4 mb-6">

<div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center font-black text-xl shadow-lg shadow-blue-500/30 text-white">
KSP
</div>

<h4 className="text-xl font-bold tracking-tight text-white">
KHOA SƯ PHẠM <br/>
<span className="text-xs font-light text-blue-400">
ĐẠI HỌC QUY NHƠN
</span>
</h4>

</div>

<p className="text-slate-400 text-sm leading-relaxed max-w-sm">
Tiên phong ứng dụng trí tuệ nhân tạo vào quản lý giáo dục, kiến tạo tương lai số cho ngành sư phạm.
</p>

</div>

<div className="text-center md:text-left"></div>
<p className="text-[9px] tracking-[0.5em] text-slate-600 uppercase">
© 2026 EDUSMART AI - KIẾN TẠO TƯƠNG LAI
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
const StatCard = ({ icon, title, value, color }) => (
<div className="glass-card-tech p-6 group">

<div className="text-3xl mb-4" style={{filter:`drop-shadow(0 0 8px ${color})`}}>
{icon}
</div>

<div className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">
{title}
</div>

<div className="text-3xl font-black text-white group-hover:text-blue-400 transition-colors">
{value}
</div>

</div>
);

const NewsItem = ({ tag, title, time }) => (
<div className="glass-card-tech p-5 flex gap-5 items-center cursor-pointer group">

<div className="w-12 h-12 bg-blue-500/10 rounded-lg flex-shrink-0 flex items-center justify-center border border-white/5 group-hover:border-blue-500/50">
<div className="w-4 h-4 bg-blue-400/40 rounded-full animate-ping"></div>
</div>

<div>

<div className="flex gap-3 items-center mb-1">

<span className="text-[9px] font-bold text-blue-400 uppercase">
{tag}
</span>

<span className="text-[9px] text-slate-500">
{time}
</span>

</div>

<h4 className="text-md font-bold text-slate-200 group-hover:text-white transition-colors">
{title}
</h4>

</div>

</div>
);

const Step = ({ num, text, active }) => (
<div className="flex items-center gap-4">

<div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold border ${
active
? 'bg-blue-600 border-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.6)] text-white'
: 'border-white/20 text-slate-200 bg-white/5'
}`}>
{num}
</div>

<span className={`text-xs font-bold uppercase tracking-tighter ${
active ? 'text-white' : 'text-slate-300'
}`}>
{text}
</span>

</div>
);

export default HomePage;