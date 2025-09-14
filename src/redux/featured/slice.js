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
  },
});

export const { addToFeatured } = slice.actions;

export default slice.reducer;
