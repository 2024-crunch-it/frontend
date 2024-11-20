import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1/users';

// API 호출: 사용자 청약 희망 면적 조회
export const fetchDesiredArea = async (userId: number) => {
  const response = await axios.get(`${BASE_URL}/desired-area`, { params: { userId } });
  return response.data;
};

// API 호출: 사용자 청약 희망 면적 업데이트
export const updateDesiredArea = async (userId: number, desiredArea: number) => {
  const response = await axios.put(`${BASE_URL}/desired-area`, null, { params: { userId, desiredArea } });
  return response.data;
};

// API 호출: 뱃지 개수 조회
export const fetchBadgeCount = async (userId: number) => {
  const response = await axios.get(`${BASE_URL}/badge-count`, { params: { userId } });
  return response.data;
};