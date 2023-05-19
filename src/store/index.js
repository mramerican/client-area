import { configureStore } from '@reduxjs/toolkit';

import viewModeSlice from 'store/slices/viewMode';
import sidebarSlice, { sidebarMiddleware } from './slices/sidebar';

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    viewMode: viewModeSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sidebarMiddleware),
})

export default store