import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://car-rental-api.goit.global';

export const fetchCars = createAsyncThunk('cars/fetchAll', async (_, thunkAPI) => {
  try {
    const res = await axios.get('/cars');
    return res.data.cars;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const fetchBrands = createAsyncThunk('cars/fetchBrands', async (_, thunkAPI) => {
  try {
    const res = await axios.get('/brands');
    return res.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
