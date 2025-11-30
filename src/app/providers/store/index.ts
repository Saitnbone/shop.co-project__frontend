import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '@/features/catalog-filters/store/filtersSlice';
import userReducer from '@/shared/slice/userSlice';

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    userInfo: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
