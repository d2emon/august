import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../helpers/api';

/*
    fetchCategories: ({ commit }) => api.getCategories()
      .then((categories) => commit('setArticleCategories', categories)),
    addCategory: ({ state }, values) => api.addCategory(state.accessToken, values),
    updateCategory: ({ state }, { id, values }) => api.setCategory(state.accessToken, id, values),
    deleteCategory: ({ state }, id) => api.deleteCategory(state.accessToken, id),
*/

const initialState = {
  articleCategories: [],
};

export const fetchCategories = createAsyncThunk(
  'category/fetchCategories',
  async () => await api.getCategories(),
);

export const addCategory = createAsyncThunk(
  'category/addCategory',
  async (values, thunkApi) => {
    const { auth } = thunkApi.getState();

    await api.addCategory(auth.accessToken, values);
    await thunkApi.dispatch(fetchCategories());
  }
);

export const updateCategory = createAsyncThunk(
  'category/updateCategory',
  async ({ id, values }, thunkApi) => {
    const { auth } = thunkApi.getState();
  
    if (id) {
      await api.setCategory(auth.accessToken, id, values);
    }

    await thunkApi.dispatch(fetchCategories());
  }
);

export const deleteCategory = createAsyncThunk(
  'category/deleteCategory',
  async (id, thunkApi) => {
    const { auth } = thunkApi.getState();
    
    if (id) {
      await api.deleteCategory(auth.accessToken, id);
    }

    await thunkApi.dispatch(fetchCategories());
  }
);
        
export const categorySlice = createSlice({
  name: 'category',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => ({
        ...state,
        articleCategories: action.payload,
      }));
  },
});

// Selectors

export const selectCategories = (state) => state.category.articleCategories;

export default categorySlice.reducer; 
