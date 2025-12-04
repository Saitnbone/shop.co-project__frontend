import { TTopSellingItem } from '../model/topSellingData';

export const getTopSellingProducts = async (): Promise<TTopSellingItem[]> => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/products/top-selling`
    );
    const data = await response.json();

    if (!data || !Array.isArray(data)) {
      throw new Error(
        'Invalid data format: products field is missing or not an array'
      );
    }

    return data;
  } catch (error) {
    console.error('Error fetching top selling products:', error);
    throw error;
  }
};
