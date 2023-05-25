import { configureStore } from '@reduxjs/toolkit';

import viewModeSlice from 'store/slices/viewMode';
import sidebarSlice, { sidebarMiddleware } from './slices/sidebar';
import authSlice from 'store/slices/auth';

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    viewMode: viewModeSlice,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sidebarMiddleware),
});

export default store;
