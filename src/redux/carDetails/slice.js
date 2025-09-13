import { createSlice } from '@reduxjs/toolkit';
import { fetchCarDetails } from './operations';

const slice = createSlice({
  name: 'carDetails',
  initialState: {
    car: {},
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCarDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.car = action.payload;
      })
      .addCase(fetchCarDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default slice.reducer;
