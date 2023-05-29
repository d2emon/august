import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../helpers/api';

/*
    fetchCategoryArticles: ({ commit }, id) => api.getCategoryArticles(id)
      .then((articles) => commit('setArticles', articles)),
    fetchLatestArticle: ({ commit }) => api.getLatestArticle()
      .then((article) => commit('setArticle', article)),

    fetchBlog: ({ commit }) => api
      .getBlog()
      .then((blog) => {
        commit('setPopularArticles', blog.popular);
        commit('setRecentArticles', blog.recent);
        commit('setArticleCategories', blog.categories);
      }),

*/

const initialState = {
  articles: [],
  popularArticles: [],
  recentArticles: [],
  article: null,
};

export const fetchArticles = createAsyncThunk(
  'article/fetchArticles',
  async () => await api.getArticles(),
);

export const fetchArticle = createAsyncThunk(
  'article/fetchArticle',
  async (slug) => api.getArticle(slug),
);
  
export const fetchArticleById = createAsyncThunk(
  'article/fetchArticleById',
  async (id) => (id ? api.getArticleById(id) : null),
);

export const addArticle = createAsyncThunk(
  'article/addArticle',
  async (values, thunkApi) => {
    const { auth } = thunkApi.getState();

    await api.addArticle(auth.accessToken, values);
    await thunkApi.dispatch(fetchArticles());
  }
);

export const updateArticle = createAsyncThunk(
  'article/updateArticle',
  async ({ id, values }, thunkApi) => {
    const { auth } = thunkApi.getState();
  
    if (id) {
      await api.setArticle(auth.accessToken, id, values);
    }

    await thunkApi.dispatch(fetchArticles());
  }
);

export const deleteArticle = createAsyncThunk(
  'article/deleteArticle',
  async (id, thunkApi) => {
    const { auth } = thunkApi.getState();
    
    if (id) {
      await api.deleteArticle(auth.accessToken, id);
    }

    await thunkApi.dispatch(fetchArticles());
  }
);
        
export const articleSlice = createSlice({
  name: 'article',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.fulfilled, (state, action) => ({
        ...state,
        articles: action.payload,
      }))
      .addCase(fetchArticle.fulfilled, (state, action) => ({
        ...state,
        article: action.payload,
      }))
      .addCase(fetchArticleById.fulfilled, (state, action) => ({
        ...state,
        article: action.payload,
      }));
  },
});

// Selectors

export const selectArticles = (state) => state.article.articles;
export const selectArticle = (state) => state.article.article;

export default articleSlice.reducer; 
