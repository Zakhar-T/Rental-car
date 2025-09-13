import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './cars/slice';
import filtersReducer from './filters/slice';
import brandsReducer from './brands/slice';
import carDetailsReducer from './carDetails/slice';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filtersReducer,
    brands: brandsReducer,
    carDetails: carDetailsReducer,
  },
});
