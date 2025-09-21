import { configureStore } from '@reduxjs/toolkit';
import githubReducer from '../features/thunk/githubSlice';
import { githubApi } from '../features/rtk/githubApi';

export const store = configureStore({
  reducer: {
    github: githubReducer,
    [githubApi.reducerPath]: githubApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware),
});
