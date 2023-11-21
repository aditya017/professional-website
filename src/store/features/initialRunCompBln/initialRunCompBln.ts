import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface firstRun {
  isItFirstRun: boolean;
}

const initialState: firstRun = {
  isItFirstRun: true,
};

export const initialRunSlice = createSlice({
  name: 'isItFirstRun',
  initialState,
  reducers: {
    firstRunIdentifier: (state, action: PayloadAction<boolean>) => {
      state.isItFirstRun = action.payload;
    },
  },
});

export const { firstRunIdentifier } = initialRunSlice.actions;

export default initialRunSlice.reducer;
