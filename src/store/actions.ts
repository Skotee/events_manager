import Event from '../types/event';

export const ADD_EVENT = 'ADD_EVENT';

export interface AddEventAction {
  type: typeof ADD_EVENT;
  payload: Event;
}

export const addEvent = (event: Event): AddEventAction => ({
  type: ADD_EVENT,
  payload: event
});
