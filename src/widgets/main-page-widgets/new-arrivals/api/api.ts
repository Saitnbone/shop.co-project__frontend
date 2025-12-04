export const getNewArrivalsProducts = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/products/new-arrivals`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching new arrivals:', error);
    throw error;
  }
};
