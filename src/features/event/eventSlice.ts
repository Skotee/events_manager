import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import Event from '../../types/event';

const EVENTS_URL = 'http://localhost:5000'

export type initialStateType = {
  events: Event[],
  singleEvent: Event | null; 
  status: string,
  error: string | null,
}

const initialState: initialStateType = {
  events: [],
  singleEvent: null,
  status: 'idle',
  error: null
}

export const fetchEvents = createAsyncThunk(
  'events/fetchEvents', 
  async () => {
    const response = await axios.get(`${EVENTS_URL}/events`);
    return response.data
  })

export const fetchEventById = createAsyncThunk(
  'events/fetchEventById',
  async (eventId: number) => {
    try {
      const response = await axios.get(`${EVENTS_URL}/event/${eventId}`);     
      return response.data;
    } catch (error) {
      throw Error('Failed to fetch event by ID');
    }
  }
);

export const addNewEvent = createAsyncThunk(
  'events/addNewEvent', 
  async (payload: Event) => {
    const response = await axios.post(`${EVENTS_URL}/add`, payload)
    return response.data
  }
)
  
const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setSingleEvent(state, action: PayloadAction<Event | null>) {
      state.singleEvent = action.payload;
    },
  },
  extraReducers(builder) {
    builder
        .addCase(fetchEvents.pending, (state) => {
          state.status = 'loading'
        })
        .addCase(fetchEvents.fulfilled, (state, action) => {
          state.status = 'succeeded'
          state.events = action.payload;
        })
        .addCase(fetchEvents.rejected, (state) => {
          state.status = 'failed'
        })
        .addCase(fetchEventById.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.singleEvent = action.payload;
        })
        .addCase(addNewEvent.fulfilled, (state, action) => {
          state.events.push(action.payload)
      })
}})

export const selectAllEvents = (state: { events: initialStateType }) => state.events;
export const selectEventById = (state: { events: { singleEvent: Event }}) => state.events.singleEvent;
export const getEventsStatus = (state: { events: { status: string; }; }) => state.events.status;

export default eventsSlice.reducer;