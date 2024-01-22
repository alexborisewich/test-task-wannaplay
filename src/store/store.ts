import { configureStore } from '@reduxjs/toolkit';

import reducer from './appSlice';

const store = configureStore({
  reducer: {
    app: reducer
  }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
