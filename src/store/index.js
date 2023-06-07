import { configureStore } from '@reduxjs/toolkit';

import viewModeSlice from 'store/slices/viewMode';
import sidebarSlice, { sidebarMiddleware } from './slices/sidebar';
import authSlice from 'store/slices/auth';
import allGamesSlice, { allGamesMiddleware } from 'store/slices/allGames';

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    viewMode: viewModeSlice,
    auth: authSlice,
    allGames: allGamesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sidebarMiddleware, allGamesMiddleware),
});

export default store;
