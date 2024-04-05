import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, List, ListItem, ListItemText } from "@mui/material";

import Event from './../types/event';
import { EventsList } from "../components/EventsList/EventsList"
import { selectAllEvents } from "features/event/eventSlice";

const EventsListPage = () => {
  const events = useSelector(selectAllEvents)

  const navigate = useNavigate();

  const handleClickSingleEvent = () => {
    navigate('/view-event');
  };
  
  const handleClickAddEvent = () => {
    navigate('/add-event');
  };
  
  console.log(events); 
  
  const orderedEvents = events.slice().sort((a: Event, b: Event) => b.date.localeCompare(a.date))
  const renderedEvents = orderedEvents.map((event: Event) => (
    <ListItem key={event.id} onClick={handleClickSingleEvent}>        
      <ListItemText primary={event.title} secondary={event.date} />
      <ListItemText primary={event.eventType} secondary={event.date} />
    </ListItem>
  ))

  // useEffect(() => {
  //   fetch('http://localhost:5000/events')
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch events');
  //       }
  //       return response.json();
  //     })
  //     .then(data => setEvents(data))
  //     .catch(error => console.error(error));
  // }, []);

  return (
    <div>
      <h2>Events</h2>
      <List sx={{ maxWidth: '80em', bgcolor: 'beige' }}>
        {renderedEvents}
      </List>
      <Button onClick={handleClickAddEvent} variant="contained" color="success">Add event</Button>
      <EventsList></EventsList>
    </div>
  )
};

export default EventsListPage;
