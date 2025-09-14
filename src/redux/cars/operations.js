import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://car-rental-api.goit.global';

export const fetchCars = createAsyncThunk('cars/fetchCars', async (searchParams, thunkAPI) => {
  try {
    const res = await axios.get('/cars', { params: searchParams });
    return res.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
