import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://car-rental-api.goit.global';

export const fetchCarDetails = createAsyncThunk('cars/fetchCarDetails', async (id, thunkAPI) => {
  try {
    const res = await axios.get(`/cars/${id}`);
    return res.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
