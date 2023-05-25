import { createSlice } from '@reduxjs/toolkit';
import { getToken, setToken as setTokenUtils } from 'utils/auth';

const initialState = {
  token: getToken(),
};

export const authMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    if (result.type === 'auth/setToken') {
      setTokenUtils(getState().auth.token);
    }
    return result;
  };
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
