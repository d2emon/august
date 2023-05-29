import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../helpers/api';

const initialState = {
  emails: [],
  email: null,
};

export const fetchEmails = createAsyncThunk(
  'email/fetchEmails',
  async () => await api.getEmails(),
);

export const fetchEmail = createAsyncThunk(
  'email/fetchEmail',
  async (id) => api.getEmail(id),
);

export const addEmail = createAsyncThunk(
  'email/addEmail',
  async (values, thunkApi) => {
    const { auth } = thunkApi.getState();

    await api.addEmail(auth.accessToken, values);
    await thunkApi.dispatch(fetchEmails());
  }
);

export const updateEmail = createAsyncThunk(
  'email/updateEmail',
  async ({ id, values }, thunkApi) => {
    const { auth } = thunkApi.getState();
  
    if (id) {
      await api.setEmail(auth.accessToken, id, values);
    }

    await thunkApi.dispatch(fetchEmails());
  }
);

export const deleteEmail = createAsyncThunk(
  'email/deleteEmail',
  async (id, thunkApi) => {
    const { auth } = thunkApi.getState();
    
    if (id) {
      await api.deleteEmail(auth.accessToken, id);
    }

    await thunkApi.dispatch(fetchEmails());
  }
);

export const emailSlice = createSlice({
  name: 'email',
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(fetchEmails.fulfilled, (state, action) => ({
      ...state,
      emails: action.payload,
    }))
    .addCase(fetchEmail.fulfilled, (state, action) => ({
      ...state,
      email: action.payload,
    }));
  },
});

// Selectors

export const selectEmails = (state) => state.email.emails;
export const selectEmail = (state) => state.email.email;

export default emailSlice.reducer; 
