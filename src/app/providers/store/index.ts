import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '@/features/catalog-filters/store/filtersSlice';
import userReducer from '@/shared/slice/userSlice';
import notificationModalReducer from '@/shared/ui/notification-modal/store/notificationModalStore';
import { selectedProductReducer } from '@/entities/product';
import cartReducer from '@/shared/slice/cartSlice';

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    userInfo: userReducer,
    selectedProduct: selectedProductReducer,
    notificationModal: notificationModalReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
