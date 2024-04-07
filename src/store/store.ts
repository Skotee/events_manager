import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from '../features/event/eventSlice';

const store = configureStore({
  reducer: {
    events: eventsReducer,
  }
});

export type AppDispatch = typeof store.dispatch;
export default store;
