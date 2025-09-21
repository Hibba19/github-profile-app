import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk
export const fetchUser = createAsyncThunk(
  'github/fetchUser',
  async (username) => {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  }
);

const githubSlice = createSlice({
  name: 'github',
  initialState: { user: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = 'User not found';
      });
  },
});

export default githubSlice.reducer;
