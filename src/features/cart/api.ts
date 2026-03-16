import { apiClient } from '@/shared/api';
import { ICart } from './types';

export class CartApi {
  // Получение корзины
  static async getCartData(userId: string) {
    try {
      const response = await apiClient.get<ICart>(`/cart/get-cart/${userId}`);
      return response;
    } catch (error) {
      console.error('Error fetching cart data:', error);
      throw error;
    }
  }

  // удаление колличества одного товара из корзины
  static async removeQuantityCartItem(
    userId: string,
    variantId: string,
    quantity: number
  ) {
    try {
      const response = await apiClient.delete(
        `/cart/remove-item/${userId}/${variantId}/${quantity}`
      );
      return response;
    } catch (error) {
      console.error('Error removing cart item:', error);
      throw error;
    }
  }

  // добавление колличества одного товара в корзину
  static async addQuantityCartItem(
    userId: string,
    variantId: string,
    quantity: number
  ) {
    try {
      const response = await apiClient.post(
        `/cart/add-item/${userId}/${variantId}/${quantity}`
      );
      return response;
    } catch (error) {
      console.error('Error adding item to cart:', error);
      throw error;
    }
  }

  // Удаление разом одной позиции из корзины
  static async removeCartItem(userId: string, variantId: string) {
    try {
      const response = await apiClient.delete(
        `/cart/remove-item-position/${userId}/${variantId}`
      );
      return response;
    } catch (error) {
      console.error('Error removing cart item:', error);
      throw error;
    }
  }
}
