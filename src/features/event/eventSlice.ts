import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import Event from '../../types/event';

const EVENTS_URL = 'http://localhost:5000/events'

export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
  try { //TODO: do podmiany na fulfilled
    const response = await axios.get(EVENTS_URL)
    return [...response.data]
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return err.message;
    } else {
      return 'An error occurred';
    }
}})

const initialState: Event[] = [
    {
      id: 1,
      title: 'Pop music concert',
      date: '2024-03-21T10:00:00',
      description: 'Metallica Concert',
      image: 'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=600',
      eventType: 'Culture',
      phoneNumber: '123456789',
      email: 'email@metallica.com',
      location: 'Hala Stulecia, Wrocław'
    },
    {
      id: 2,
      title: 'Festive of colors',
      date: '2024-03-22T11:00:00',
      description: 'Festive of colors',
      image: 'https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=600',
      eventType: 'Culture',
      phoneNumber: '987654321',
      email: 'email2@colors.com',
      location: 'Main Square, Madrid'
    },
    {
      id: 3,
      title: 'Football match',
      date: '2025-03-22T16:00:00',
      description: 'FC Barcelona - Chelsea FC',
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=600',
      eventType: 'Sport',
      phoneNumber: '123456789',
      email: 'email3@football.com',
      location: 'Camp Nou, Spain'
    }
  ]

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent(state, action: PayloadAction<Event>) {
      console.log('state', state);
      
      state.push(action.payload);
    },
  }
});

export const selectAllEvents = (state:any) => state.events;

export const { addEvent } = eventsSlice.actions;

export default eventsSlice.reducer;
