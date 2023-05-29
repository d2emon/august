import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../helpers/api';

const initialState = {
  pages: [],
  page: null,
};

export const fetchPages = createAsyncThunk(
  'page/fetchPages',
  async () => await api.getPages(),
);

export const fetchPage = createAsyncThunk(
    'page/fetchPage',
    async (slug) => await api.getPage(slug),
);
  
export const fetchPageById = createAsyncThunk(
  'page/fetchPageById',
  async (id) => (id ? api.getPageById(id) : null),
);

export const addPage = createAsyncThunk(
  'page/addPage',
  async (values, thunkApi) => {
    const { auth } = thunkApi.getState();

    await api.addPage(auth.accessToken, values);
    await thunkApi.dispatch(fetchPages());
  }
);

export const updatePage = createAsyncThunk(
  'page/updatePage',
  async ({ id, values }, thunkApi) => {
    const { auth } = thunkApi.getState();
  
    if (id) {
      await api.setPage(auth.accessToken, id, values);
    }

    await thunkApi.dispatch(fetchPages());
  }
);

export const deletePage = createAsyncThunk(
  'page/deletePage',
  async (id, thunkApi) => {
    const { auth } = thunkApi.getState();
    
    if (id) {
      await api.deletePage(auth.accessToken, id);
    }

    await thunkApi.dispatch(fetchPages());
  }
);

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPages.fulfilled, (state, action) => ({
        ...state,
        pages: action.payload,
      }))
      .addCase(fetchPage.fulfilled, (state, action) => ({
        ...state,
        page: action.payload,
      }))
      .addCase(fetchPageById.fulfilled, (state, action) => ({
        ...state,
        page: action.payload,
      }));
  },
});

// Selectors

export const selectPages = (state) => state.page.pages;
export const selectPage = (state) => state.page.page;

export default pageSlice.reducer; 
