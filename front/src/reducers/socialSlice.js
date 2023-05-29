import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../helpers/api';

const initialState = {
  socials: [],
};

export const fetchSocials = createAsyncThunk(
    'social/fetchSocials',
    async () => await api.getSocials(),
);

export const addSocial = createAsyncThunk(
  'social/addSocial',
  async (values, thunkApi) => {
    const { auth } = thunkApi.getState();

    await api.addSocial(auth.accessToken, values);
    await thunkApi.dispatch(fetchSocials());
  }
);

export const updateSocial = createAsyncThunk(
  'social/updateSocial',
  async ({ id, values }, thunkApi) => {
    const { auth } = thunkApi.getState();
  
    if (id) {
      await api.setSocial(auth.accessToken, id, values);
    }

    await thunkApi.dispatch(fetchSocials());
  }
);

export const deleteSocial = createAsyncThunk(
  'social/deleteSocial',
  async (id, thunkApi) => {
    const { auth } = thunkApi.getState();
    
    if (id) {
      await api.deleteSocial(auth.accessToken, id);
    }

    await thunkApi.dispatch(fetchSocials());
  }
);
        
export const socialSlice = createSlice({
  name: 'social',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchSocials.fulfilled, (state, action) => ({
        ...state,
        socials: action.payload,
      }));
  },
});

// Selectors

export const selectSocials = (state) => state.social.socials;

export default socialSlice.reducer; 
