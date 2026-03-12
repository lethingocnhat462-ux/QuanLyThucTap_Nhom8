import React, { useState } from 'react';
import './ChangePasswordModal.css'; // Đảm bảo đã import file CSS của em

const ChangePasswordModal = ({ isOpen, onClose, maTK }) => {
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  if (!isOpen) return null;

const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert("Mật khẩu xác nhận không khớp!");
      return;
    }

    try {

const response = await fetch('http://localhost/update_password.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        userId: maTK, 
        oldPassword: formData.oldPassword,
        newPassword: formData.newPassword
    })
});

      // Kiểm tra nếu response trả về không phải dạng JSON (có thể do lỗi PHP)
      if (!response.ok) {
          throw new Error('Mạng có vấn đề hoặc URL sai');
      }

      const result = await response.json();
      alert(result.message);
      if (result.success) onClose();
      
    } catch (error) {
      console.error("Lỗi chi tiết:", error);
      alert("Lỗi kết nối server! Vui lòng kiểm tra lại địa chỉ backend.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h3>Đổi mật khẩu</h3>
        </div>
        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Mật khẩu cũ</label>
            <input 
              type="password" 
              placeholder="••••••••"
              onChange={(e) => setFormData({...formData, oldPassword: e.target.value})} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Mật khẩu mới</label>
            <input 
              type="password" 
              placeholder="••••••••"
              onChange={(e) => setFormData({...formData, newPassword: e.target.value})} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Xác nhận mật khẩu</label>
            <input 
              type="password" 
              placeholder="••••••••"
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} 
              required 
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn-cancel" onClick={onClose}>HỦY</button>
            <button type="submit" className="btn-submit">CẬP NHẬT</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordModal;