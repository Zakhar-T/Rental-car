import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://car-rental-api.goit.global';

export const fetchCars = createAsyncThunk('cars/fetchAll', async (_, thunkAPI) => {
  try {
    const res = await axios.get('/cars');
    console.log(res.data.cars);

    return res.data.cars;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
