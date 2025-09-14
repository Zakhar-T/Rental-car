import { configureStore } from '@reduxjs/toolkit';

import carsReducer from './cars/slice';
import filtersReducer from './filters/slice';
import brandsReducer from './brands/slice';
import carDetailsReducer from './carDetails/slice';
import featured from './featured/slice';

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistedFeaturedReducer = persistReducer(
  {
    key: 'featured',
    storage,
  },
  featured,
);

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filtersReducer,
    brands: brandsReducer,
    carDetails: carDetailsReducer,
    featured: persistedFeaturedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
