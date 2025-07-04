import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export interface UserInfo {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'staff' | 'resident';
}

export const getUserInfo = async (): Promise<UserInfo> => {
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');
  
  if (!token) {
    throw new Error('No token found');
  }

  try {
    const response = await axios.get(`${API_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to get user info');
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  sessionStorage.removeItem('token');
}; 