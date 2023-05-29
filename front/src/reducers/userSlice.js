import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../helpers/api';

const initialState = {
  users: [],
  user: null,
};

export const fetchUsers = createAsyncThunk(
  'user/fetchUsers',
  async () => await api.getUsers(),
);

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (id) => (id ? api.getUser(id) : null),
);

export const addUser = createAsyncThunk(
  'user/addUser',
  async (values, thunkApi) => {
    const { auth } = thunkApi.getState();

    await api.addUser(auth.accessToken, values);
    await thunkApi.dispatch(fetchUsers());
  }
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async ({ id, values }, thunkApi) => {
    const { auth } = thunkApi.getState();
  
    if (id) {
      await api.setUser(auth.accessToken, id, values);
    }

    await thunkApi.dispatch(fetchUsers());
  }
);

export const deleteUser = createAsyncThunk(
  'user/deleteUser',
  async (id, thunkApi) => {
    const { auth } = thunkApi.getState();
    
    if (id) {
      await api.deleteUser(auth.accessToken, id);
    }

    await thunkApi.dispatch(fetchUsers());
  }
);
        
export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => ({
        ...state,
        users: action.payload,
      }))
      .addCase(fetchUser.fulfilled, (state, action) => ({
        ...state,
        user: action.payload,
      }));
  },
});

// Selectors

export const selectUsers = (state) => state.user.users;
export const selectUser = (state) => state.user.user;

export default userSlice.reducer; 
