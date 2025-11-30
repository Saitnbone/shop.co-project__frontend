import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from '../api/getUserInfo';
import { IUserInfo } from '../api/types';

export const fetchUserInfo = createAsyncThunk(
  'user/fetchUserInfo',
  async () => {
    const response = await getUserInfo();
    return response;
  }
);

const userSlice = createSlice({
  name: 'userInfo',
  initialState: {
    userInfo: null as IUserInfo | null,
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch user info';
      });
  },
});

export default userSlice.reducer;
