import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../helpers/api';

/*
    fetchServiceProjects: ({ commit }, serviceId) => api.getServiceProjects(serviceId)
      .then((projects) => commit('setProjects', projects)),
*/

const initialState = {
  projects: [],
  project: null,
};

export const fetchProjects = createAsyncThunk(
  'project/fetchProjects',
  async () => await api.getProjects(),
);

export const fetchLatestProjects = createAsyncThunk(
  'project/fetchLatestProjects',
  async () => await api.getLatestProjects(),
);

export const fetchProject = createAsyncThunk(
  'project/fetchProject',
  async (slug) => api.getProject(slug),
);
  
export const fetchProjectById = createAsyncThunk(
  'project/fetchProjectById',
  async (id) => (id ? api.getProjectById(id) : null),
);

export const addProject = createAsyncThunk(
  'project/addProject',
  async (values, thunkApi) => {
    const { auth } = thunkApi.getState();

    await api.addProject(auth.accessToken, values);
    await thunkApi.dispatch(fetchProjects());
  }
);

export const updateProject = createAsyncThunk(
  'project/updateProject',
  async ({ id, values }, thunkApi) => {
    const { auth } = thunkApi.getState();
  
    if (id) {
      await api.setProject(auth.accessToken, id, values);
    }

    await thunkApi.dispatch(fetchProjects());
  }
);

export const deleteProject = createAsyncThunk(
  'project/deleteProject',
  async (id, thunkApi) => {
    const { auth } = thunkApi.getState();
    
    if (id) {
      await api.deleteProject(auth.accessToken, id);
    }

    await thunkApi.dispatch(fetchProjects());
  }
);
        
export const projectSlice = createSlice({
  name: 'project',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.fulfilled, (state, action) => ({
        ...state,
        projects: action.payload,
      }))
      .addCase(fetchLatestProjects.fulfilled, (state, action) => ({
        ...state,
        projects: action.payload,
      }))
      .addCase(fetchProject.fulfilled, (state, action) => ({
        ...state,
        project: action.payload,
      }))
      .addCase(fetchProjectById.fulfilled, (state, action) => ({
        ...state,
        project: action.payload,
      }));
  },
});

// Selectors

export const selectProjects = (state) => state.project.projects;
export const selectProject = (state) => state.project.project;

export default projectSlice.reducer; 
