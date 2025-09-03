import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IFiltersState {
  priceRange: [number, number];
  category: string[];
  colors: string[];
  sizes: string[];
  dressType: string[];
}

const initialState: IFiltersState = {
  priceRange: [50, 200],
  category: [],
  colors: ['Blue'],
  sizes: ['Large'],
  dressType: ['Casual'],
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.priceRange = action.payload;
    },
    setCategory: (state, action: PayloadAction<string[]>) => {
      state.category = action.payload;
    },
    setColors: (state, action: PayloadAction<string[]>) => {
      state.colors = action.payload;
    },
    setSizes: (state, action: PayloadAction<string[]>) => {
      state.sizes = action.payload;
    },
    setDressType: (state, action: PayloadAction<string[]>) => {
      state.dressType = action.payload;
    },
  },
});

const filterReducer = filtersSlice.reducer;

export const { setPriceRange, setCategory, setColors, setSizes, setDressType } =
  filtersSlice.actions;
export default filterReducer;
