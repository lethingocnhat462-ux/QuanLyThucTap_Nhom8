import axios from 'axios';

const BASE_URL = 'http://localhost:8080/QUANLYTHUCTAP_NHOM8/backend'; // Thay đổi port nếu cần

export const getStudentsByGV = async (maGV) => {
    try {
        const response = await axios.get(`${BASE_URL}/api_get_dssv_theo_gv.php`, {
            params: { maGV: maGV }
        });
        return response.data;
    } catch (error) {
        console.error("Lỗi khi gọi API danh sách SV:", error);
        return [];
    }
};