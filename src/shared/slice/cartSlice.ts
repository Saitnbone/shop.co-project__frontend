import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ICart, ICartItem } from '@features/cart/types';
import { CartApi } from '@/features/cart/api';

interface CartState {
  items: ICartItem[];
  totalCost: number;
  loading: boolean;
  error: string | null;
}

// Получение информации о корзине
export const fetchCartData = createAsyncThunk(
  'cart/fetchCartData',
  async (userId: string) => {
    try {
      const response = await CartApi.getCartData(userId);
      console.log('fetchCartData response (full):', JSON.stringify(response)); // <-- ДОБАВИЛ: смотри структуру
      console.log('response.items:', response?.items);
      console.log('response.total:', response?.total);
      return response;
    } catch (error) {
      console.error('Error fetching cart data:', error);
      throw error;
    }
  }
);

// Начальное состояние
const initialState: CartState = {
  items: [],
  totalCost: 0,
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateCart: (state, action: PayloadAction<ICart>) => {
      state.items = action.payload.items;
      state.totalCost = action.payload.total;
      state.loading = false;
      state.error = null;
    },
    // Опционально: локальные изменения (optimistic updates)
    addItemOptimistic: (state, action: PayloadAction<ICartItem>) => {
      const existingItem = state.items.find(
        (item) => item.variantId === action.payload.variantId
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItemOptimistic: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.variantId !== action.payload
      );
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCartData.fulfilled, (state, action) => {
        console.log('fulfilled payload:', action.payload); // <-- ДОБАВЬ
        state.items = action.payload.items;
        state.totalCost = action.payload.total;
        state.loading = false;
      })
      .addCase(fetchCartData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch cart';
      });
  },
});

export const {
  updateCart,
  addItemOptimistic,
  removeItemOptimistic,
  setLoading,
  setError,
} = cartSlice.actions;
export default cartSlice.reducer;
