import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'featured',
  initialState: {
    items: [],
  },
  reducers: {
    addToFeatured: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromFeatured: (state, action) => {
      state.items.filter((item) => item !== action.payload);
    },
  },
});

export const { addToFeatured, removeFromFeatured } = slice.actions;

export default slice.reducer;
