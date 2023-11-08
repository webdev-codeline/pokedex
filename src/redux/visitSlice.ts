import { createSlice } from '@reduxjs/toolkit';

// helpers
import { updateArr } from '@/utils/redux.helper';

const initialState: { visits: number[] } = {
  visits: [],
};

export const visitSlice = createSlice({
  name: 'visits',
  initialState,
  reducers: {
    addVisit: (state, action) => {
      state.visits = updateArr([...state.visits], action.payload.entry);
    },
  },
});

// Action creators are automatically generated for each case reducer function
export const { addVisit } = visitSlice.actions;

export default visitSlice.reducer;
