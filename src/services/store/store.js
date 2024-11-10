import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './slice/favorites.jsx';

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});