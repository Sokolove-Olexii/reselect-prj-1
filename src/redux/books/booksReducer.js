import { createSlice } from '@reduxjs/toolkit';
import { fetchBooks } from './booksOperations';

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    entities: [],
    filter: '',
    isLoading: false,
    error: false,
  },
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBooks.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { changeFilter } = bookSlice.actions;
export default bookSlice.reducer;
