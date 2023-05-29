import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../helpers/api';

const initialState = {
  services: [],
  service: null,
};

export const fetchServices = createAsyncThunk(
  'service/fetchServices',
  async () => await api.getServices(),
);

export const fetchService = createAsyncThunk(
  'service/fetchService',
  async (slug) => api.getService(slug),
);
  
export const fetchServiceById = createAsyncThunk(
  'service/fetchServiceById',
  async (id) => (id ? api.getServiceById(id) : null),
);

export const addService = createAsyncThunk(
  'service/addService',
  async (values, thunkApi) => {
    const { auth } = thunkApi.getState();

    await api.addService(auth.accessToken, values);
    await thunkApi.dispatch(fetchServices());
  }
);

export const updateService = createAsyncThunk(
  'service/updateService',
  async ({ id, values }, thunkApi) => {
    const { auth } = thunkApi.getState();
  
    if (id) {
      await api.setService(auth.accessToken, id, values);
    }

    await thunkApi.dispatch(fetchServices());
  }
);

export const deleteService = createAsyncThunk(
  'service/deleteService',
  async (id, thunkApi) => {
    const { auth } = thunkApi.getState();
    
    if (id) {
      await api.deleteService(auth.accessToken, id);
    }

    await thunkApi.dispatch(fetchServices());
  }
);
        
export const serviceSlice = createSlice({
  name: 'service',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.fulfilled, (state, action) => ({
        ...state,
        services: action.payload,
      }))
      .addCase(fetchService.fulfilled, (state, action) => ({
        ...state,
        service: action.payload,
      }))
      .addCase(fetchServiceById.fulfilled, (state, action) => ({
        ...state,
        service: action.payload,
      }));
  },
});

// Selectors

export const selectServices = (state) => state.service.services;
export const selectService = (state) => state.service.service;

export default serviceSlice.reducer; 
