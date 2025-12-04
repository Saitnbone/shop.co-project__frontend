export const getTopSellingProducts = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/products/top-selling`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching top selling products:', error);
    throw error;
  }
};
