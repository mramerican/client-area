import { createSlice } from '@reduxjs/toolkit';
import { getToken } from 'utils/auth';

const initialState = {
  token: getToken(),
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const authSelector = {
  getToken: (state) => state.auth.token,
};

export const { setToken } = authSlice.actions;
export default authSlice.reducer;
