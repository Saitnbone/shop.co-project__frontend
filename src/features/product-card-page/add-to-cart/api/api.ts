// import { apiClient } from '@/shared/api';

interface IData {
  variantId: string;
  quantity: number;
}

export const addToCart = async (userId: string, data: IData) => {
  try {
    await fetch(`${import.meta.env.VITE_API_URL}/cart/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        userId,
        ...data,
      }),
    });
  } catch (error) {
    console.error('Error adding to cart:', error);
    throw error;
  }
};
