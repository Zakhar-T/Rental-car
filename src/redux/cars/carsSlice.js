import { createSlice } from '@reduxjs/toolkit';
import { fetchBrands, fetchCars } from './operations';

const slice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    brands: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
        console.log(state.items);
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.brands = action.payload;
      });
  },
});

export default slice.reducer;
