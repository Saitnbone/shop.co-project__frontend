import { apiClient } from '@/shared/api';

export interface ICartItem {
  variantId: string;
  quantity: number;
}

export interface ICart {
  userId: string;
  items: ICartItem[];
  total: number;
}

export const getCartData = async (userId: string) => {
  try {
    const response = await apiClient.get<ICart>(`/cart/get-cart/${userId}`);
    return response;
  } catch (error) {
    console.error('Error fetching cart data:', error);
    throw error;
  }
};
