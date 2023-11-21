import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface dayNight {
  isItDay: boolean;
}

const initialState: dayNight = {
  isItDay: false,
};

export const dayNightSlice = createSlice({
  name: 'isItDay',
  initialState,
  reducers: {
    dayNightIdentifier: (state, action: PayloadAction<boolean>) => {
      state.isItDay = action.payload;
    },
  },
});

export const { dayNightIdentifier } = dayNightSlice.actions;

export default dayNightSlice.reducer;
