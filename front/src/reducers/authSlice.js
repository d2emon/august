import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../helpers/api';

const initialState = {
  accessToken: null,
  refreshToken: null,
  adminUser: null,
};

export const checkToken = createAsyncThunk(
  'auth/checkToken',
  async (payload, thunkApi) => {
    const { auth } = thunkApi.getState();

    if (!auth.accessToken) {
      return null;
    }

    return await api.checkUser(auth.accessToken);
  },
);
  
export const getToken = createAsyncThunk(
  'auth/getToken',
  async ({
    username,
    password,
  }) => {
    return await api.getToken(username, password);
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(checkToken.fulfilled, (state, action) => {
        if (!action.payload) {
          return {
            ...state,
            adminUser: null,
            accessToken: null,
            refreshToken: null,
          }
        }
        return {
          ...state,
          adminUser: action.payload,
          // accessToken: null,
          // refreshToken: null,
        }
      })
      .addCase(getToken.fulfilled, (state, action) => ({
        ...state,
        accessToken: action.payload ? action.payload.access_token : null,
        refreshToken: action.payload ? action.payload.refresh_token : null,
      }));
  },
});

// Selectors

export const selectAdminUser = (state) => state.auth.adminUser;
export const selectIsAuth = (state) => !!state.auth.accessToken;

export default authSlice.reducer; 
