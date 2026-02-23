// @TODO: разработать апи с фронетнда на бекенд на авторизацию уже зарегистрированного пользователя
// @TODO: Протестировать
import { apiClient } from '@/shared/api';

export interface IAuthhUser {
  email: string;
  password: string;
}

export const authUser = async (params: IAuthhUser) => {
  const endpoint = '/auth';
  return apiClient.post<IAuthhUser>(endpoint, params);
};

// ------------------------------------
// @TODO: Сделать переделать запрос под авторизацию пользователя

// async post<T>(endpoint: string, data?: unknown): Promise<T> {
//   return this.request<T>(endpoint, {
//     method: 'POST',
//     body: JSON.stringify(data),
//   });
// }

// ------------------------------------
// ------------------------------------
