import { apiClient } from '@/shared/api';

export interface ICartItem {
  variantId: string;
  quantity: number;
  image: string;
  name: string;
  price: string;
  color: string;
  size: string;
}

export interface ICart {
  items: ICartItem[];
  total: number;
  userId: string;
}

export class CartApi {
  // Получение корзины
  static async getCartData(userId: string) {
    try {
      const response = await apiClient.get<ICart>(`/cart/get-cart/${userId}`);
      return response.items;
    } catch (error) {
      console.error('Error fetching cart data:', error);
      throw error;
    }
  }
}
