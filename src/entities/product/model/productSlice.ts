import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProductById } from '@/shared/api/getProductInfo';
import { TProduct, TCategory, TComment, TProductVariant } from './model';

interface IProductState {
  product: TProduct | null;
  comments: TComment[];
  category: TCategory | null;
  variants: TProductVariant[];
  loading: boolean;
  error: string | null;
}

const initialState: IProductState = {
  product: null,
  comments: [],
  category: null,
  variants: [],
  loading: false,
  error: null,
};

// Async thunk for product loading
export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async (productId: string) => {
    const response = await getProductById(productId);
    return response;
  }
);

export const productSlice = createSlice({
  name: 'selectedProduct',
  initialState,
  reducers: {
    clearProduct: (state) => {
      state.product = null;
      state.comments = [];
      state.category = null;
      state.variants = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload.product;
        state.comments = action.payload.comment || [];
        state.category = action.payload.category || null;
        state.variants = action.payload.variants || [];
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch product';
      });
  },
});

const selectedProductReducer = productSlice.reducer;

export const { clearProduct } = productSlice.actions;
export { selectedProductReducer };
