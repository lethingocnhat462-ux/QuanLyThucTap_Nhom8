import React from 'react';

const LanguageSwitcher = () => {
  return (
    <div className="flex items-center border border-gray-200 rounded-full p-1 bg-white shadow-sm ml-4">
      {/* Nút Tiếng Việt */}
      <button className="flex items-center px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold transition-all">
        <span className="mr-1">🇻🇳</span> VN
      </button>

      {/* Nút Tiếng Anh */}
      <button className="flex items-center px-3 py-1 rounded-full text-gray-500 text-xs font-medium hover:bg-gray-100 transition-all">
        <span className="mr-1">🇺🇸</span> EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;