export const getProductById = async (id: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/products/${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET',
        credentials: 'include',
      }
    );
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};
