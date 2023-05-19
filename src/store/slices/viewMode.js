import { createSlice } from '@reduxjs/toolkit';
import { getViewMode } from 'utils/viewMode';

const initialState = {
  current: getViewMode()
}

export const viewModeSlice = createSlice({
  name: 'viewMode',
  initialState,
  reducers: {
    setViewMode: (state, action) => {
      state.current = action.payload
    }
  }
})

export const viewModeSelector = {
  getViewMode: state => state.viewMode.current
}

export const { setViewMode } = viewModeSlice.actions
export default viewModeSlice.reducer