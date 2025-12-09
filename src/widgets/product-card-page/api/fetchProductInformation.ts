// import { apiClient } from '@/shared/api';

// export interface IProductInfoResponce {
//   // uuid4
//   id: string;
//   title: string;
//   price: number;
//   originalPrice?: number;
//   discount?: number;
//   imageUrl: string;
//   images: string[];
//   colors: string[];
//   sizes: string[];
//   category: string;
//   dressType?: string;
//   rating: number;
//   reviewsCount: number;
//   description: string;
// }

// export interface IFetchParams {
//   // uuid4
//   productID: string;
// }

// export const fetchProductInformation = async (
//   params: IFetchParams
// ): Promise<IProductInfoResponce> => {
//   const searchParams = new URLSearchParams();

//   if (params.productID)
//     searchParams.append('productID', params.productID.toString());

//   const endpoint = `/product-info?${searchParams.toString()}`;
//   return apiClient.get<IProductInfoResponce>(endpoint);
// };
