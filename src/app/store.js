import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import teamBoardReducer from '../features/teamBoard/counterSlice';

export const store = configureStore({
  reducer: {
    teams: teamBoardReducer
  },
});
