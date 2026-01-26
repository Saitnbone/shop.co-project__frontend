export const getCartData = async (userId: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/cart/get-cart/${userId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      }
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching cart data:', error);
    throw error;
  }
};
