import { configureStore } from '@reduxjs/toolkit';
import isItDayReducer from './features/DayTimeBlnSlice/dayTimeBlnSlice.ts';
import isItFirstRunReducer from './features/initialRunCompBln/initialRunCompBln.ts';

export const store = configureStore({
  reducer: {
    isItDay: isItDayReducer,
    isItFirstRun: isItFirstRunReducer,
  },
  devTools: false,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
