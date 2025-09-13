import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filters',
  initialState: {
    filter: 'not done yet',
  },
});

export default slice.reducer;
