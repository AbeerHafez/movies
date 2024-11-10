import { createSlice,createAsyncThunk  } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  favorites: [],
  status: 'idle',
  error: null,
};



export const addFavorite = createAsyncThunk(
  'favorites/addFavoriteAsync',
  async (movie, { getState, rejectWithValue }) => {
    try {
      const { favorites } = getState();
      const existingMovie = favorites.favorites.find(m => m.id === movie.id);
      if (!existingMovie) {
        return movie;
      }
      return rejectWithValue('Movie already exists');
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const removeFavorite = createAsyncThunk(
  'favorites/removeFavoriteAsync',
  async (movieId, { rejectWithValue }) => {
    try {
      return movieId;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Slice
const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Add favorite
      .addCase(addFavorite.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.favorites.push(action.payload);
      })
      .addCase(addFavorite.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })

      // Remove favorite
      .addCase(removeFavorite.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeFavorite.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.favorites = state.favorites.filter(movie => movie.id !== action.payload);
      })
      .addCase(removeFavorite.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default favoritesSlice.reducer;