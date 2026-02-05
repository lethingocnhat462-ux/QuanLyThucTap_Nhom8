-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Feb 05, 2026 at 07:53 AM
-- Server version: 8.0.45
-- PHP Version: 8.3.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_thuctap`
--
CREATE DATABASE IF NOT EXISTS `db_thuctap` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `db_thuctap`;
--
-- Database: `quan_ly_thuc_tap`
--
CREATE DATABASE IF NOT EXISTS `quan_ly_thuc_tap` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `quan_ly_thuc_tap`;

-- --------------------------------------------------------

--
-- Table structure for table `BaoCaoGiaoAn`
--

CREATE TABLE `BaoCaoGiaoAn` (
  `MaTaiLieu` varchar(20) NOT NULL,
  `MaSV` varchar(20) DEFAULT NULL,
  `TenFile` varchar(255) DEFAULT NULL,
  `NgayNop` datetime DEFAULT NULL,
  `Loai` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `BaoCaoGiaoAn`
--

INSERT INTO `BaoCaoGiaoAn` (`MaTaiLieu`, `MaSV`, `TenFile`, `NgayNop`, `Loai`) VALUES
('TL001', '4551150001', 'GiaoAn_Tuan1_NguyenVanAn.pdf', '2025-10-05 08:30:00', 'GiaoAn'),
('TL002', '4551150001', 'BaoCao_Dot1_NguyenVanAn.docx', '2025-10-20 15:45:00', 'BaoCao'),
('TL003', '4551150003', 'GiaoAn_Toan_Lop10_LeHoangNam.pdf', '2025-10-06 09:00:00', 'GiaoAn'),
('TL004', '4551150007', 'GiaoAn_Tin_Hoc_VoVanKiet.pdf', '2025-10-07 10:15:00', 'GiaoAn'),
('TL005', '4551150010', 'BaoCao_TongKet_BuiTuyetMai.pdf', '2025-11-15 14:00:00', 'BaoCao');

-- --------------------------------------------------------

--
-- Table structure for table `ChiTietPhanCong`
--

CREATE TABLE `ChiTietPhanCong` (
  `MaPC` int NOT NULL,
  `MaPC_Custom` varchar(20) DEFAULT NULL,
  `MaDoan` varchar(20) DEFAULT NULL,
  `MaSV` varchar(20) DEFAULT NULL,
  `MaGVPT` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `ChiTietPhanCong`
--

INSERT INTO `ChiTietPhanCong` (`MaPC`, `MaPC_Custom`, `MaDoan`, `MaSV`, `MaGVPT`) VALUES
(1, 'PC001', 'D001', '4551150001', 'GVPT_001'),
(2, 'PC002', 'D001', '4551150003', 'GVPT_001'),
(3, 'PC003', 'D002', '4551150007', 'GVPT_002'),
(4, 'PC004', 'D003', '4551150010', 'GVPT_005');

-- --------------------------------------------------------

--
-- Table structure for table `DoanThucTap`
--

CREATE TABLE `DoanThucTap` (
  `MaDoan` varchar(20) NOT NULL,
  `TenDoan` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `MaNganh` varchar(20) DEFAULT NULL,
  `MaTruong` varchar(20) DEFAULT NULL,
  `MaGVDH` varchar(20) DEFAULT NULL,
  `NamHoc` varchar(20) DEFAULT NULL,
  `ChiTieu` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `DoanThucTap`
--

INSERT INTO `DoanThucTap` (`MaDoan`, `TenDoan`, `MaNganh`, `MaTruong`, `MaGVDH`, `NamHoc`, `ChiTieu`) VALUES
('D001', 'Đoàn THPT Quốc Học - Tin', 'SPTIN', 'THPT_QY', 'GV_IT_001', '2025-2026', 10),
('D002', 'Đoàn THPT Trưng Vương - Tin', 'SPTIN', 'THPT_TBTR', 'GV_IT_003', '2025-2026', 8),
('D003', 'Đoàn THPT Chuyên Lê Quý Đôn - Tin', 'SPTIN', 'THPT_CHV', 'GV_IT_009', '2025-2026', 12),
('D004', 'Đoàn THPT Quốc Học - Toán', 'SPMAT', 'THPT_QY', 'GV_MA_014', '2025-2026', 15),
('D005', 'Đoàn THPT Hai Bà Trưng - Toán', 'SPMAT', 'THPT_HBT', 'GV_MA_002', '2025-2026', 10),
('D011', 'Đoàn THPT Chuyên Lê Quý Đôn - Sinh', 'SPBIO', 'THPT_CHV', 'GV_BI_018', '2025-2026', 10);

-- --------------------------------------------------------

--
-- Table structure for table `DonViThucTap`
--

CREATE TABLE `DonViThucTap` (
  `MaDV` varchar(20) NOT NULL,
  `TenDonVi` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `DiaChi` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `SoDienThoai` varchar(15) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `NganhDaoTao` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `ChiTieu` int DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `DonViThucTap`
--

INSERT INTO `DonViThucTap` (`MaDV`, `TenDonVi`, `DiaChi`, `SoDienThoai`, `Email`, `NganhDaoTao`, `ChiTieu`) VALUES
('CĐ_KTBD', 'Cao đẳng Kỹ thuật Công nghệ', '172 An Dương Vương', '02563846622', 'info@cdktcnbd.edu.vn', 'Tin học', 20),
('THCS_BTX', 'THCS Bùi Thị Xuân', 'P. Bùi Thị Xuân, Quy Nhơn', '02563841888', 'thcsbuithixuan@quynhon.edu.vn', 'Tin học', 10),
('THCS_LHP', 'THCS Lê Hồng Phong', '45 Lê Hồng Phong, Quy Nhơn', '02563822334', 'thcslehongphong@quynhon.edu.vn', 'Tin, Anh', 10),
('THCS_LQY', 'THCS Lê Lợi', '120 Hải Thượng Lãn Ông, Quy Nhơn', '02563822944', 'thcsleloi@quynhon.edu.vn', 'Tin, Anh', 8),
('THCS_NVT', 'THCS Ngô Văn Sở', 'P. Ghềnh Ráng, Quy Nhơn', '02563847221', 'thcsngovanso@quynhon.edu.vn', 'Anh', 8),
('THCS_NVT2', 'THCS Nguyễn Huệ', 'P. Lê Lợi, Quy Nhơn', '02563822111', 'thcsnguyenhue@quynhon.edu.vn', 'Toán, Anh', 8),
('THCS_TQD', 'THCS Trần Quang Diệu', 'P. Trần Quang Diệu, Quy Nhơn', '02563841102', 'thcstranquangdieu@quynhon.edu.vn', 'Toán, Tin', 10),
('THPT_AM', 'THPT An Nhơn 1', 'TX. An Nhơn, Bình Định', '02563835456', 'thptannhon1@binhdinh.edu.vn', 'Toán', 15),
('THPT_CHV', 'THPT Chuyên Lê Quý Đôn', '02 Nguyễn Huệ, Quy Nhơn', '02563822230', 'thptlequydon@binhdinh.edu.vn', 'Tin, Sinh, Toán', 25),
('THPT_HBT', 'THPT Hai Bà Trưng', '02 Võ Văn Dũng, Quy Nhơn', '02563846522', 'thpthaibatrung@binhdinh.edu.vn', 'Toán, Văn', 12),
('THPT_HHL', 'THPT Hùng Vương', '10 Chu Văn An, Quy Nhơn', '02563821429', 'thpthungvuong@binhdinh.edu.vn', 'Anh, Lý', 15),
('THPT_NH', 'THPT Nguyễn Huệ', 'Tây Sơn, Bình Định', '02563881234', 'thptnguyenhue@binhdinh.edu.vn', 'Tin, Sinh', 12),
('THPT_NTH', 'THPT Nguyễn Thái Học', 'Trần Quang Diệu, Quy Nhơn', '02563841315', 'thptnguyenthaihoc@binhdinh.edu.vn', 'Văn, Anh', 10),
('THPT_PH', 'THPT Phan Bội Châu', 'P. Bùi Thị Xuân, Quy Nhơn', '02563510123', 'thptphanboichau@binhdinh.edu.vn', 'Sinh học', 10),
('THPT_QL', 'THPT Quang Trung', 'P. Quang Trung, Quy Nhơn', '02563841555', 'thptquangtrung@binhdinh.edu.vn', 'Toán, Địa', 10),
('THPT_QY', 'THPT Quốc Học Quy Nhơn', '09 Trần Phú, Quy Nhơn', '02563822449', 'thptquochoc@binhdinh.edu.vn', 'Tin, Toán, Anh', 20),
('THPT_SM', 'THPT Số 2 Tuy Phước', 'Phước Lộc, Tuy Phước', '02563833999', 'thptso2tuyphuoc@binhdinh.edu.vn', 'Anh', 12),
('THPT_TBTR', 'THPT Trưng Vương', '18 Nguyễn Huệ, Quy Nhơn', '02563822730', 'thpttrungvuong@binhdinh.edu.vn', 'Tin, Toán', 15),
('THPT_TL', 'THPT Tuy Phước 1', 'Tuy Phước, Bình Định', '02563834123', 'thpttuyphuoc1@binhdinh.edu.vn', 'Anh', 12),
('THPT_VH', 'THPT Võ Giữ', 'Hoài Ân, Bình Định', '02563876123', 'thptvogiu@binhdinh.edu.vn', 'Toán, Lý', 10);

-- --------------------------------------------------------

--
-- Table structure for table `GiangVienDH`
--

CREATE TABLE `GiangVienDH` (
  `MaGVDH` varchar(20) NOT NULL,
  `HoTen` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `GioiTinh` tinyint(1) DEFAULT NULL,
  `Nganh` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `SDT_LienHe` varchar(15) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `GiangVienDH`
--

INSERT INTO `GiangVienDH` (`MaGVDH`, `HoTen`, `GioiTinh`, `Nganh`, `SDT_LienHe`, `Email`) VALUES
('GV_BI_018', 'Hồ Văn Lợi', 1, 'Sư phạm Sinh học', '0905111239', 'hvloi@qnu.edu.vn'),
('GV_CH_007', 'Võ Hoàng Nam', 1, 'Sư phạm Hóa học', '0905111228', 'vhnam@qnu.edu.vn'),
('GV_EN_004', 'Phạm Phương Thảo', 0, 'Sư phạm Tiếng Anh', '0905111225', 'ppthao@qnu.edu.vn'),
('GV_EN_013', 'Hoàng Ngọc Bích', 0, 'Sư phạm Tiếng Anh', '0905111234', 'hnbich@qnu.edu.vn'),
('GV_EN_020', 'Đoàn Mỹ Linh', 0, 'Sư phạm Tiếng Anh', '0905111241', 'dmlinh@qnu.edu.vn'),
('GV_GE_008', 'Nguyễn Thị Kim Chi', 0, 'Sư phạm Địa lý', '0905111229', 'ntkchi@qnu.edu.vn'),
('GV_HI_011', 'Đỗ Minh Châu', 0, 'Sư phạm Lịch sử', '0905111232', 'dmchau@qnu.edu.vn'),
('GV_IT_001', 'Nguyễn Văn Thành', 1, 'Sư phạm Tin học', '0905111222', 'nvthanh@qnu.edu.vn'),
('GV_IT_003', 'Trần Minh Tâm', 1, 'Sư phạm Tin học', '0905111224', 'tmtam@qnu.edu.vn'),
('GV_IT_009', 'Lý Hữu Nghĩa', 1, 'Sư phạm Tin học', '0905111230', 'lhnghia@qnu.edu.vn'),
('GV_IT_012', 'Mai Xuân Hiếu', 1, 'Sư phạm Tin học', '0905111233', 'mxhieu@qnu.edu.vn'),
('GV_IT_017', 'Tạ Thị Thúy', 0, 'Sư phạm Tin học', '0905111238', 'ttthuy@qnu.edu.vn'),
('GV_IT_019', 'Quách Ngọc Hải', 1, 'Sư phạm Tin học', '0905111240', 'qnhai@qnu.edu.vn'),
('GV_LI_006', 'Bùi Thị Minh Nguyệt', 0, 'Sư phạm Ngữ văn', '0905111227', 'btmnguyet@qnu.edu.vn'),
('GV_LI_015', 'Nguyễn Lan Anh', 0, 'Sư phạm Ngữ văn', '0905111236', 'nlananh@qnu.edu.vn'),
('GV_MA_002', 'Lê Thị Thu Hà', 0, 'Sư phạm Toán', '0905111223', 'lttha@qnu.edu.vn'),
('GV_MA_010', 'Trịnh Công Sơn', 1, 'Sư phạm Toán', '0905111231', 'tcson@qnu.edu.vn'),
('GV_MA_014', 'Vũ Đình Trọng', 1, 'Sư phạm Toán', '0905111235', 'vdtrong@qnu.edu.vn'),
('GV_PH_005', 'Đặng Văn Hùng', 1, 'Sư phạm Vật lý', '0905111226', 'dvhung@qnu.edu.vn'),
('GV_PH_016', 'Phan Thanh Bình', 1, 'Sư phạm Vật lý', '0905111237', 'ptbinh@qnu.edu.vn');

-- --------------------------------------------------------

--
-- Table structure for table `GiaoVienPT`
--

CREATE TABLE `GiaoVienPT` (
  `MaGVPT` varchar(20) NOT NULL,
  `HoTen` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `GioiTinh` tinyint(1) DEFAULT NULL,
  `SDT_LienHe` varchar(15) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `MaDV` varchar(20) DEFAULT NULL,
  `Mon_PhuTrach` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `GiaoVienPT`
--

INSERT INTO `GiaoVienPT` (`MaGVPT`, `HoTen`, `GioiTinh`, `SDT_LienHe`, `Email`, `MaDV`, `Mon_PhuTrach`) VALUES
('GVPT_001', 'Nguyễn Công Thành', 1, '0913000111', 'thanh.nc@quochoc.edu.vn', 'THPT_QY', 'Tin học'),
('GVPT_002', 'Lê Thị Mai', 0, '0913000222', 'mai.lt@trungvuong.edu.vn', 'THPT_TBTR', 'Toán học'),
('GVPT_003', 'Trần Văn Hùng', 1, '0913000333', 'hung.tv@haibatrung.edu.vn', 'THPT_HBT', 'Tin học'),
('GVPT_004', 'Phạm Thị Lan', 0, '0913000444', 'lan.pt@hungvuong.edu.vn', 'THPT_HHL', 'Tiếng Anh'),
('GVPT_005', 'Đỗ Minh Đức', 1, '0913000555', 'duc.dm@lequydon.edu.vn', 'THPT_CHV', 'Sinh học'),
('GVPT_018', 'Trần Minh Hoàng', 1, '0913000909', 'hoang.tm@tuyphuoc2.edu.vn', 'THPT_SM', 'Tiếng Anh');

-- --------------------------------------------------------

--
-- Table structure for table `KetQuaThucTap`
--

CREATE TABLE `KetQuaThucTap` (
  `MaKQ` varchar(20) NOT NULL,
  `MaSV` varchar(20) DEFAULT NULL,
  `DiemChuNhiem` float DEFAULT NULL,
  `DiemGiangDay` float DEFAULT NULL,
  `DiemYThuc` float DEFAULT NULL,
  `NhanXet` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `KetQuaThucTap`
--

INSERT INTO `KetQuaThucTap` (`MaKQ`, `MaSV`, `DiemChuNhiem`, `DiemGiangDay`, `DiemYThuc`, `NhanXet`) VALUES
('KQ001', '4551150001', 8.5, 9, 10, 'Tốt'),
('KQ002', '4551150002', 9, 8.5, 9.5, 'Khá');

-- --------------------------------------------------------

--
-- Table structure for table `Khoa`
--

CREATE TABLE `Khoa` (
  `MaKhoa` varchar(20) NOT NULL,
  `TenKhoa` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `SDT_Khoa` varchar(15) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `DiaChi_Khoa` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Khoa`
--

INSERT INTO `Khoa` (`MaKhoa`, `TenKhoa`, `SDT_Khoa`, `Email`, `DiaChi_Khoa`) VALUES
('KSP_QNU', 'Khoa Sư phạm - Đại học Quy Nhơn', '0256746158', 'ksp@qnu.edu.vn', '170 An Dương Vương, Tp. Quy Nhơn');

-- --------------------------------------------------------

--
-- Table structure for table `NguoiDung`
--

CREATE TABLE `NguoiDung` (
  `MaTK` varchar(20) NOT NULL,
  `TenDangNhap` varchar(50) NOT NULL,
  `MatKhau` varchar(255) NOT NULL,
  `Quyen` int NOT NULL,
  `MaDinhDanh` varchar(100) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `NguoiDung`
--

INSERT INTO `NguoiDung` (`MaTK`, `TenDangNhap`, `MatKhau`, `Quyen`, `MaDinhDanh`, `Email`) VALUES
('TK_001', 'sv_an', '123', 2, '4551150001', 'sv1@st.qnu.edu.vn'),
('TK_002', 'sv_bich', '123', 2, '4551150002', 'sv2@st.qnu.edu.vn'),
('TK_003', 'sv_nam', '123', 2, '4551150003', 'sv3@st.qnu.edu.vn'),
('TK_004', 'sv_chau', '123', 2, '4551150004', 'sv4@st.qnu.edu.vn'),
('TK_005', 'sv_dung', '123', 2, '4551150005', 'sv5@st.qnu.edu.vn'),
('TK_006', 'sv_van', '123', 2, '4551150006', 'sv6@st.qnu.edu.vn'),
('TK_007', 'sv_kiet', '123', 2, '4551150007', 'sv7@st.qnu.edu.vn'),
('TK_008', 'sv_trang', '123', 2, '4551150008', 'sv8@st.qnu.edu.vn'),
('TK_009', 'sv_dang', '123', 2, '4551150009', 'sv9@st.qnu.edu.vn'),
('TK_010', 'sv_mai', '123', 2, '4551150010', 'sv10@st.qnu.edu.vn'),
('TK_011', 'sv_truong', '123', 2, '4551150011', 'sv11@st.qnu.edu.vn'),
('TK_012', 'sv_thao', '123', 2, '4551150012', 'sv12@st.qnu.edu.vn'),
('TK_013', 'sv_quyet', '123', 2, '4551150013', 'sv13@st.qnu.edu.vn'),
('TK_014', 'sv_yen', '123', 2, '4551150014', 'sv14@st.qnu.edu.vn'),
('TK_015', 'sv_bao', '123', 2, '4551150015', 'sv15@st.qnu.edu.vn'),
('TK_016', 'sv_ngan', '123', 2, '4551150016', 'sv16@st.qnu.edu.vn'),
('TK_017', 'sv_quan', '123', 2, '4551150017', 'sv17@st.qnu.edu.vn'),
('TK_018', 'sv_linh', '123', 2, '4551150018', 'sv18@st.qnu.edu.vn'),
('TK_019', 'sv_thang', '123', 2, '4551150019', 'sv19@st.qnu.edu.vn'),
('TK_020', 'sv_khue', '123', 2, '4551150020', 'sv20@st.qnu.edu.vn'),
('TK_ADM_01', 'admin_ksp', '123', 1, 'KSP_QNU', 'lethingocnhat462@gmail.com'),
('TK_GV_01', 'gv_thanh', '123', 3, 'GV_IT_001', 'nvthanh@qnu.edu.vn'),
('TK_GV_02', 'gv_ha.lt', '123', 3, 'GV_MA_002', 'lttha@qnu.edu.vn'),
('TK_GV_03', 'gv_tam.tm', '123', 3, 'GV_IT_003', 'tmtam@qnu.edu.vn'),
('TK_GV_04', 'gv_thao.pp', '123', 3, 'GV_EN_004', 'ppthao@qnu.edu.vn'),
('TK_GV_05', 'gv_hung.dv', '123', 3, 'GV_PH_005', 'dvhung@qnu.edu.vn'),
('TK_GV_06', 'gv_nguyet.bt', '123', 3, 'GV_LI_006', 'btmnguyet@qnu.edu.vn'),
('TK_GV_07', 'gv_nam.vh', '123', 3, 'GV_CH_007', 'vhnam@qnu.edu.vn'),
('TK_GV_08', 'gv_chi.ntk', '123', 3, 'GV_GE_008', 'ntkchi@qnu.edu.vn'),
('TK_GV_09', 'gv_nghia.lh', '123', 3, 'GV_IT_009', 'lhnghia@qnu.edu.vn'),
('TK_GV_10', 'gv_son.tc', '123', 3, 'GV_MA_010', 'tcson@qnu.edu.vn'),
('TK_GV_11', 'gv_chau.dm', '123', 3, 'GV_HI_011', 'dmchau@qnu.edu.vn'),
('TK_GV_12', 'gv_hieu.mx', '123', 3, 'GV_IT_012', 'mxhieu@qnu.edu.vn'),
('TK_GV_13', 'gv_bich.hn', '123', 3, 'GV_EN_013', 'hnbich@qnu.edu.vn'),
('TK_GV_14', 'gv_trong.vd', '123', 3, 'GV_MA_014', 'vdtrong@qnu.edu.vn'),
('TK_GV_15', 'gv_anh.nl', '123', 3, 'GV_LI_015', 'nlananh@qnu.edu.vn'),
('TK_GV_16', 'gv_binh.pt', '123', 3, 'GV_PH_016', 'ptbinh@qnu.edu.vn'),
('TK_GV_17', 'gv_thuy.tt', '123', 3, 'GV_IT_017', 'ttthuy@qnu.edu.vn'),
('TK_GV_18', 'gv_loi.hv', '123', 3, 'GV_BI_018', 'hvloi@qnu.edu.vn'),
('TK_GV_19', 'gv_hai.qn', '123', 3, 'GV_IT_019', 'qnhai@qnu.edu.vn'),
('TK_GV_20', 'gv_linh.dm', '123', 3, 'GV_EN_020', 'dmlinh@qnu.edu.vn');

-- --------------------------------------------------------

--
-- Table structure for table `SinhVien`
--

CREATE TABLE `SinhVien` (
  `MaSV` varchar(20) NOT NULL,
  `HoTen` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `NgaySinh` date DEFAULT NULL,
  `GioiTinh` tinyint(1) DEFAULT NULL,
  `Nganh` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `Que` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `SDT_LienHe` varchar(15) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `MaTK` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `SinhVien`
--

INSERT INTO `SinhVien` (`MaSV`, `HoTen`, `NgaySinh`, `GioiTinh`, `Nganh`, `Que`, `SDT_LienHe`, `Email`, `MaTK`) VALUES
('4551150001', 'Nguyễn Văn An', '2003-05-15', 1, 'Sư phạm Tin học', 'Quy Nhơn', '0912345678', '4551150001@st.qnu.edu.vn', 'TK_001'),
('4551150002', 'Trần Thị Bích', '2003-02-20', 0, 'Sư phạm Toán', 'Tuy Phước', '0922345678', '4551150002@st.qnu.edu.vn', 'TK_002'),
('4551150003', 'Lê Hoàng Nam', '2003-11-10', 1, 'Sư phạm Tin học', 'An Nhơn', '0932345678', '4551150003@st.qnu.edu.vn', 'TK_003'),
('4551150004', 'Phạm Minh Châu', '2003-08-05', 0, 'Sư phạm Tiếng Anh', 'Phù Cát', '0942345678', '4551150004@st.qnu.edu.vn', 'TK_004'),
('4551150005', 'Đỗ Hùng Dũng', '2003-04-12', 1, 'Sư phạm Vật lý', 'Hoài Nhơn', '0952345678', '4551150005@st.qnu.edu.vn', 'TK_005'),
('4551150006', 'Ngô Thanh Vân', '2003-09-25', 0, 'Sư phạm Ngữ văn', 'Quy Nhơn', '0962345678', '4551150006@st.qnu.edu.vn', 'TK_006'),
('4551150007', 'Võ Văn Kiệt', '2003-01-30', 1, 'Sư phạm Tin học', 'Tây Sơn', '0972345678', '4551150007@st.qnu.edu.vn', 'TK_007'),
('4551150008', 'Hoàng Thu Trang', '2003-06-18', 0, 'Sư phạm Toán', 'Vân Canh', '0982345678', '4551150008@st.qnu.edu.vn', 'TK_008'),
('4551150009', 'Lý Hải Đăng', '2003-12-01', 1, 'Sư phạm Hóa học', 'Quy Nhơn', '0992345678', '4551150009@st.qnu.edu.vn', 'TK_009'),
('4551150010', 'Bùi Tuyết Mai', '2003-03-14', 0, 'Sư phạm Tin học', 'Phù Mỹ', '0901122334', '4551150010@st.qnu.edu.vn', 'TK_010'),
('4551150011', 'Trịnh Xuân Trường', '2002-07-22', 1, 'Sư phạm Lịch sử', 'Hoài Ân', '0911223344', '4551150011@st.qnu.edu.vn', 'TK_011'),
('4551150012', 'Đặng Phương Thảo', '2003-10-05', 0, 'Sư phạm Tiếng Anh', 'An Lão', '0922334455', '4551150012@st.qnu.edu.vn', 'TK_012'),
('4551150013', 'Mai Văn Quyết', '2003-05-28', 1, 'Sư phạm Tin học', 'Quy Nhơn', '0933445566', '4551150013@st.qnu.edu.vn', 'TK_013'),
('4551150014', 'Hồ Thị Yến', '2003-02-12', 0, 'Sư phạm Ngữ văn', 'Tuy Phước', '0944556677', '4551150014@st.qnu.edu.vn', 'TK_014'),
('4551150015', 'Lương Gia Bảo', '2003-09-09', 1, 'Sư phạm Toán', 'Vĩnh Thạnh', '0955667788', '4551150015@st.qnu.edu.vn', 'TK_015'),
('4551150016', 'Quách Kim Ngân', '2003-04-21', 0, 'Sư phạm Tin học', 'Quy Nhơn', '0966778899', '4551150016@st.qnu.edu.vn', 'TK_016'),
('4551150017', 'Tạ Minh Quân', '2003-08-14', 1, 'Sư phạm Vật lý', 'An Nhơn', '0977889900', '4551150017@st.qnu.edu.vn', 'TK_017'),
('4551150018', 'Phan Mỹ Linh', '2003-01-11', 0, 'Sư phạm Địa lý', 'Phù Cát', '0988990011', '4551150018@st.qnu.edu.vn', 'TK_018'),
('4551150019', 'Cao Văn Thắng', '2003-06-30', 1, 'Sư phạm Tin học', 'Quy Nhơn', '0999001122', '4551150019@st.qnu.edu.vn', 'TK_019'),
('4551150020', 'Dương Thụy Khuê', '2003-12-25', 0, 'Sư phạm Tiếng Anh', 'Hoài Nhơn', '0900112233', '4551150020@st.qnu.edu.vn', 'TK_020');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `BaoCaoGiaoAn`
--
ALTER TABLE `BaoCaoGiaoAn`
  ADD PRIMARY KEY (`MaTaiLieu`),
  ADD KEY `MaSV` (`MaSV`);

--
-- Indexes for table `ChiTietPhanCong`
--
ALTER TABLE `ChiTietPhanCong`
  ADD PRIMARY KEY (`MaPC`),
  ADD UNIQUE KEY `MaPC_Custom` (`MaPC_Custom`),
  ADD KEY `MaDoan` (`MaDoan`),
  ADD KEY `MaSV` (`MaSV`),
  ADD KEY `MaGVPT` (`MaGVPT`);

--
-- Indexes for table `DoanThucTap`
--
ALTER TABLE `DoanThucTap`
  ADD PRIMARY KEY (`MaDoan`),
  ADD KEY `MaTruong` (`MaTruong`),
  ADD KEY `MaGVDH` (`MaGVDH`);

--
-- Indexes for table `DonViThucTap`
--
ALTER TABLE `DonViThucTap`
  ADD PRIMARY KEY (`MaDV`);

--
-- Indexes for table `GiangVienDH`
--
ALTER TABLE `GiangVienDH`
  ADD PRIMARY KEY (`MaGVDH`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- Indexes for table `GiaoVienPT`
--
ALTER TABLE `GiaoVienPT`
  ADD PRIMARY KEY (`MaGVPT`),
  ADD KEY `MaDV` (`MaDV`);

--
-- Indexes for table `KetQuaThucTap`
--
ALTER TABLE `KetQuaThucTap`
  ADD PRIMARY KEY (`MaKQ`),
  ADD KEY `MaSV` (`MaSV`);

--
-- Indexes for table `Khoa`
--
ALTER TABLE `Khoa`
  ADD PRIMARY KEY (`MaKhoa`);

--
-- Indexes for table `NguoiDung`
--
ALTER TABLE `NguoiDung`
  ADD PRIMARY KEY (`MaTK`),
  ADD UNIQUE KEY `TenDangNhap` (`TenDangNhap`);

--
-- Indexes for table `SinhVien`
--
ALTER TABLE `SinhVien`
  ADD PRIMARY KEY (`MaSV`),
  ADD KEY `MaTK` (`MaTK`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ChiTietPhanCong`
--
ALTER TABLE `ChiTietPhanCong`
  MODIFY `MaPC` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `BaoCaoGiaoAn`
--
ALTER TABLE `BaoCaoGiaoAn`
  ADD CONSTRAINT `BaoCaoGiaoAn_ibfk_1` FOREIGN KEY (`MaSV`) REFERENCES `SinhVien` (`MaSV`) ON DELETE CASCADE;

--
-- Constraints for table `ChiTietPhanCong`
--
ALTER TABLE `ChiTietPhanCong`
  ADD CONSTRAINT `ChiTietPhanCong_ibfk_1` FOREIGN KEY (`MaDoan`) REFERENCES `DoanThucTap` (`MaDoan`),
  ADD CONSTRAINT `ChiTietPhanCong_ibfk_2` FOREIGN KEY (`MaSV`) REFERENCES `SinhVien` (`MaSV`),
  ADD CONSTRAINT `ChiTietPhanCong_ibfk_3` FOREIGN KEY (`MaGVPT`) REFERENCES `GiaoVienPT` (`MaGVPT`);

--
-- Constraints for table `DoanThucTap`
--
ALTER TABLE `DoanThucTap`
  ADD CONSTRAINT `DoanThucTap_ibfk_1` FOREIGN KEY (`MaTruong`) REFERENCES `DonViThucTap` (`MaDV`),
  ADD CONSTRAINT `DoanThucTap_ibfk_2` FOREIGN KEY (`MaGVDH`) REFERENCES `GiangVienDH` (`MaGVDH`);

--
-- Constraints for table `GiaoVienPT`
--
ALTER TABLE `GiaoVienPT`
  ADD CONSTRAINT `GiaoVienPT_ibfk_1` FOREIGN KEY (`MaDV`) REFERENCES `DonViThucTap` (`MaDV`) ON DELETE CASCADE;

--
-- Constraints for table `KetQuaThucTap`
--
ALTER TABLE `KetQuaThucTap`
  ADD CONSTRAINT `KetQuaThucTap_ibfk_1` FOREIGN KEY (`MaSV`) REFERENCES `SinhVien` (`MaSV`) ON DELETE CASCADE;

--
-- Constraints for table `SinhVien`
--
ALTER TABLE `SinhVien`
  ADD CONSTRAINT `SinhVien_ibfk_1` FOREIGN KEY (`MaTK`) REFERENCES `NguoiDung` (`MaTK`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
