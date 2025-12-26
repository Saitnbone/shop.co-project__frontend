import { apiClient } from '@/shared/api';

interface IData {
  productId: string;
  quantity: number;
}

export const addToCart = async (userId: string, data: IData) => {
  try {
    await apiClient.post('/cart/add', {
      userId,
      ...data,
    });
  } catch (error) {
    console.error('Error adding to cart:', error);
    throw error;
  }
};
