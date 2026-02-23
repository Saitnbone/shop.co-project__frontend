import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getProductById } from '@/shared/api/getProductInfo';
import { TProduct, TCategory, TComment, TProductVariant, TSize } from './model';

interface IProductState {
  product: TProduct | null;
  comments: TComment[];
  category: TCategory | null;
  variants: TProductVariant[];
  loading: boolean;
  error: string | null;
  selectedColor: string | null;
  actualSizes: TSize[];
  currentSize: string | null;
  quantity: number;
  currentVariantId: string | null;
}

const initialState: IProductState = {
  product: null,
  comments: [],
  category: null,
  variants: [],
  loading: false,
  error: null,

  selectedColor: null,
  actualSizes: [],
  currentSize: null,
  quantity: 1,
  currentVariantId: null,
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
    // New reducers for color and size management
    setColor: (state, action: PayloadAction<string | null>) => {
      state.selectedColor = action.payload;
    },

    setVariantId: (state, action: PayloadAction<string | null>) => {
      state.currentVariantId = action.payload;
    },

    setActualSizes: (state, action: PayloadAction<TSize[]>) => {
      state.actualSizes = action.payload;
    },

    setQuantity: (state, action: PayloadAction<number>) => {
      state.quantity = action.payload;
    },

    setSize: (state, action: PayloadAction<string | null>) => {
      state.currentSize = action.payload;
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
        state.variants = action.payload.product.variants || [];
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch product';
      });
  },
});

const selectedProductReducer = productSlice.reducer;

export const {
  clearProduct,
  setColor,
  setActualSizes,
  setSize,
  setQuantity,
  setVariantId,
} = productSlice.actions;
export { selectedProductReducer };
