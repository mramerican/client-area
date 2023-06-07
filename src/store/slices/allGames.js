import { createSlice } from '@reduxjs/toolkit';
import { getStorageData, setStorageData } from 'utils/allGames';

const initialState = {
  selectAll: false,
  selectedItems: [],
  viewType: getStorageData().viewType,
};

export const allGamesMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    if (result.type === 'allGames/viewType') {
      setStorageData({ viewType: getState().allGames.viewType });
    }
    return result;
  };
};

const allGamesSlice = createSlice({
  name: 'allGames',
  initialState,
  reducers: {
    selectAll: (state, action) => {
      state.selectAll = action.payload;
      if (!action.payload) {
        state.selectedItems = [];
      }
    },
    viewType: (state, action) => {
      state.viewType = action.payload;
    },
    selectItem: (state, action) => {
      state.selectedItems = Array.from(
        new Set(state.selectedItems).add(action.payload),
      );
    },
    unSelectItem: (state, action) => {
      const selectedItems = new Set(state.selectedItems);
      selectedItems.delete(action.payload);
      state.selectedItems = Array.from(selectedItems);
    },
  },
});

export const allGamesSelector = {
  getSelectAll: (state) => state.allGames.selectAll,
  getViewType: (state) => state.allGames.viewType,
  getSelectedItems: (state) => state.allGames.selectedItems,
};

export const { selectAll, viewType, selectItem, unSelectItem } =
  allGamesSlice.actions;
export default allGamesSlice.reducer;
