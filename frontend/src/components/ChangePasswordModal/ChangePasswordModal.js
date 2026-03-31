import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Thêm hook đa ngôn ngữ
import './ChangePasswordModal.css';

const ChangePasswordModal = ({ isOpen, onClose, maTK }) => {
  const { t } = useTranslation(); // Khởi tạo hàm t
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Kiểm tra khớp mật khẩu (Dùng đa ngôn ngữ cho thông báo alert)
    if (formData.newPassword !== formData.confirmPassword) {
      alert(t("Mật khẩu xác nhận không khớp!")); 
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

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      alert(result.message);
      if (result.success) onClose();
      
    } catch (error) {
      console.error("Lỗi chi tiết:", error);
      alert(t("❌ Lỗi kết nối Server!"));
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          {/* Dùng Key: ĐỔI MẬT KHẨU */}
          <h3>{t("ĐỔI MẬT KHẨU")}</h3>
        </div>
        
        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-group">
            {/* Dùng Key: MẬT KHẨU CŨ */}
            <label>{t("MẬT KHẨU CŨ")}</label>
            <input 
              type="password" 
              placeholder="••••••••"
              onChange={(e) => setFormData({...formData, oldPassword: e.target.value})} 
              required 
            />
          </div>

          <div className="form-group">
            {/* Dùng Key: MẬT KHẨU MỚI */}
            <label>{t("MẬT KHẨU MỚI")}</label>
            <input 
              type="password" 
              placeholder="••••••••"
              onChange={(e) => setFormData({...formData, newPassword: e.target.value})} 
              required 
            />
          </div>

          <div className="form-group">
            {/* Dùng Key: XÁC NHẬN MẬT KHẨU */}
            <label>{t("XÁC NHẬN MẬT KHẨU")}</label>
            <input 
              type="password" 
              placeholder="••••••••"
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} 
              required 
            />
          </div>

          <div className="modal-footer">
            {/* Dùng Key: HỦY và CẬP NHẬT */}
            <button type="button" className="btn-cancel" onClick={onClose}>
              {t("HỦY")}
            </button>
            <button type="submit" className="btn-submit">
              {t("CẬP NHẬT")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordModal;