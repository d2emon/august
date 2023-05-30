import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../helpers/api';

const initialState = {
  stats: null,
};

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
}

export const fetchStats = createAsyncThunk(
  'stats/fetchStats',
  async ({ startDate, endDate }, thunkApi) => {
    const { auth } = thunkApi.getState();

    return api.getStats(auth.accessToken, {
      startDate: formatDate(startDate),
      endDate: formatDate(endDate),
    })
  },
);

export const statsSlice = createSlice({
  name: 'stats',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchStats.fulfilled, (state, action) => ({
        ...state,
        stats: action.payload,
      }));
  },
});

// Selectors

export const selectStats = (state) => state.stats.stats;

export default statsSlice.reducer; 
