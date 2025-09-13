import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const slice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    page: 1,
    totalPages: 1,
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
        state.items = action.payload.cars;
        state.page = Number(action.payload.page);
        state.totalPages = Number(action.payload.totalPages);
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default slice.reducer;
