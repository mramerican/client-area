import { createSlice } from '@reduxjs/toolkit';
import { getVisible, setVisible } from 'utils/toggleSidebar';

const initialState = {
  isVisible: getVisible(),
  openSubNav: []
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
    },
    openSubNav: (state, action) => {
      const setArray = new Set(state.openSubNav)
      setArray.add(action.payload)
      state.openSubNav = Array.from(setArray)
    },
    closeSubNav: (state, action) => {
      state.openSubNav = state.openSubNav.filter(subNav => subNav !== action.payload)
    }
  },
})

export const sidebarSelector = {
  getVisible: state => state.sidebar.isVisible,
  getOpenSubNav: state => state.sidebar.openSubNav
}

export const {
  openSidebar,
  toggleVisible,
  openSubNav,
  closeSubNav
} = sidebarSlice.actions
export default sidebarSlice.reducer