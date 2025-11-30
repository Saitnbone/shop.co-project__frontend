// import { apiClient } from '@/shared/api';
import { IUserInfo } from './types';

export const getUserInfo = async () => {
  try {
    // const response = await apiClient.get<IUserInfo>('/users/profile-info');
    // return response;
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/users/profile-info`,
      {
        method: 'GET',
        credentials: 'include',
      }
    );
    return response.json() as Promise<IUserInfo>;
  } catch (error) {
    console.error('Error fetching user profile info:', error);
    throw error;
  }
};
