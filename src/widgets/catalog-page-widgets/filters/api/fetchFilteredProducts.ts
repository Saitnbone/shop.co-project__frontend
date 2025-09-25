import { apiClient } from '@/shared/api';

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

export interface IFiltersState {
  priceRange: [number, number];
  category: string[];
  colors: string[];
  sizes: string[];
  dressType: string[];
}

export interface IProductsResponse {
  products: IProduct[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
}

export interface IFetchProductsParams {
  page?: number;
  limit?: number;
  filters?: Partial<IFiltersState>;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export const fetchFilteredProducts = async (
  params: IFetchProductsParams = {}
): Promise<IProductsResponse> => {
  const searchParams = new URLSearchParams();

  if (params.page) searchParams.append('page', params.page.toString());
  if (params.limit) searchParams.append('limit', params.limit.toString());
  if (params.sortBy) searchParams.append('sortBy', params.sortBy);
  if (params.sortOrder) searchParams.append('sortOrder', params.sortOrder);

  if (params.filters) {
    const { category, colors, sizes, dressType, priceRange } = params.filters;

    if (priceRange) {
      searchParams.append('minPrice', priceRange[0].toString());
      searchParams.append('maxPrice', priceRange[1].toString());
    }

    if (category?.length) {
      category.forEach((cat) => searchParams.append('category', cat));
    }

    if (category?.length) {
      category.forEach((cat) => searchParams.append('category', cat));
    }

    if (colors?.length) {
      colors.forEach((color) => searchParams.append('colors', color));
    }

    if (sizes?.length) {
      sizes.forEach((size) => searchParams.append('sizes', size));
    }

    if (dressType?.length) {
      dressType.forEach((type) => searchParams.append('dressType', type));
    }
  }
  return apiClient.get<IProductsResponse>(
    `/products?${searchParams.toString()}`
  );
};

export const fetchProductById = async (id: string) => {
  return apiClient.get(`/products/${id}`);
};
