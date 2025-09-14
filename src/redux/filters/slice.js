import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filters',
  initialState: {
    brand: '',
    rentalPrice: '',
    minMileage: '',
    maxMileage: '',
  },
  reducers: {
    setFilters: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setFilters } = slice.actions;

export default slice.reducer;
