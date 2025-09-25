import { apiClient } from '@/shared/api';

export interface IProductsResponse {
  products: IProduct[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
}

export interface IFetchProductsParams {
  page?: number;
  limit?: number;
}

export interface IProduct {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  images: string[];
  colors: string[];
  sizes: string[];
  category: string;
  dressType?: string;
  rating: number;
  reviewsCount: number;
  description: string;
}

export const fetchProducts = async (
  params: IFetchProductsParams
): Promise<IProductsResponse> => {

  const searchParams = new URLSearchParams();

  if (params.page) searchParams.append('page', params.page.toString());
  if (params.limit) searchParams.append('limit', params.limit.toString());

  

  const endpoint = `/products?${searchParams.toString()}`;
  return apiClient.get<IProductsResponse>(endpoint);
};
