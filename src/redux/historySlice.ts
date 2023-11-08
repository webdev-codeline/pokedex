import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// helpers
import { updateArr } from '@/utils/redux.helper';

const initialState: { histories: number[] } = {
  histories: [],
};

export const historiesSlice = createSlice({
  name: 'histories',
  initialState,
  reducers: {
    addHistory: (state, action: PayloadAction<{ entry: number }>) => {
      state.histories = updateArr([...state.histories], action.payload.entry);
    },
  },
});

// Action creators are automatically generated for each case reducer function
export const { addHistory } = historiesSlice.actions;

export default historiesSlice.reducer;
