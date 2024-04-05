interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  eventType: 'Sport' | 'Culture' | 'Health'; 
  phoneNumber: string;
  email: string;
  location: string;
}

export interface EventsState {
  events: Event[];
}

export default Event;