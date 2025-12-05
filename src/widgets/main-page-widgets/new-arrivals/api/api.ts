import { TNewArrivalsItem } from '../model/newArrivalsData';

export const getNewArrivalsProducts = async (): Promise<TNewArrivalsItem[]> => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/products/new-arrivals`
    );
    const data = await response.json();

    if (!data || !Array.isArray(data)) {
      throw new Error(
        'Invalid data format: products field is missing or not an array'
      );
    }
    return data;
  } catch (error) {
    console.error('Error fetching new arrivals:', error);
    throw error;
  }
};
