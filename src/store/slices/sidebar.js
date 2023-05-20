import { createSlice } from '@reduxjs/toolkit';
import { getVisible, setVisible } from 'utils/toggleSidebar';

const initialState = {
  isVisible: getVisible()
}

export const sidebarMiddleware = ({ getState }) => {
  return next => action => {
    const result = next(action);
    if (result.type === 'sidebar/toggleVisible' || result.type === 'sidebar/openSidebar') {
      setVisible(getState().sidebar.isVisible)
    }
    return result;
  };
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleVisible: (state, action) => {
      state.isVisible = action.payload
    },
    openSidebar: state => {
      state.isVisible = true
    }
  },
})

export const sidebarSelector = {
  getVisible: state => state.sidebar.isVisible
}

export const {
  openSidebar,
  toggleVisible
} = sidebarSlice.actions
export default sidebarSlice.reducer