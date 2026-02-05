import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage'; // QUAN TRỌNG: Phải import dòng này

function App() {
  return (
    <Router>
      <Routes>
        {/* Trang chủ và Đăng nhập */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />

        {/* Các tuyến đường hồ sơ cá nhân (Dùng chung ProfilePage) */}
        <Route path="/student/profile" element={<ProfilePage />} />
        <Route path="/admin/profile" element={<ProfilePage />} />
        <Route path="/teacher/profile" element={<ProfilePage />} />
        <Route path="/mentor/profile" element={<ProfilePage />} />
        
        {/* Route mặc định nếu không khớp cái nào ở trên */}
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;