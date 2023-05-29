import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import articleSlice from '../reducers/articleSlice';
import authSlice from '../reducers/authSlice';
import categorySlice from '../reducers/categorySlice';
import emailSlice from '../reducers/emailSlice';
import pageSlice from '../reducers/pageSlice';
import projectSlice from '../reducers/projectSlice';
import serviceSlice from '../reducers/serviceSlice';
import socialSlice from '../reducers/socialSlice';
import userSlice from '../reducers/userSlice';

const store = configureStore({
  reducer: {
    form: formReducer,
    article: articleSlice,
    auth: authSlice,
    category: categorySlice,
    email: emailSlice,
    page: pageSlice,
    project: projectSlice,
    service: serviceSlice,
    social: socialSlice,
    user: userSlice,
  },
});

export default store;
