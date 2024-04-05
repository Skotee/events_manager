import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from '../features/event/eventSlice';

const store = configureStore({
  reducer: {
    events: eventsReducer,
  }
});

export default store;
