// import { apiClient } from '@/shared/api';
import { UpdateUserData } from '../types/types';

// export const updateUserData = async (userData: UpdateUserData) => {
//   try {
//     await apiClient.put('/users/me-update', userData);
//   } catch (error) {
//     console.error('Failed to update user data:', error);
//     throw error;
//   }
// };

export const updateUserData = async (userData: UpdateUserData) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/users/me-update`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(userData),
      }
    );
    if (!response.ok) {
      throw new Error('Failed to update user data');
    }
  } catch (error) {
    console.error('Failed to update user data:', error);
    throw error;
  }
};
