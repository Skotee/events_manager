import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Typography } from "@mui/material";

import Event from './../types/event';
import { EventsList } from "../components/EventsList/EventsList"
import { fetchEvents, selectAllEvents } from "features/event/eventSlice";
import { AppDispatch } from "store/store";

const EventsListPage = () => {
  const events = useSelector(selectAllEvents)
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  
  useEffect(() => {   
    dispatch(fetchEvents());
  }, [dispatch]);

  const handleClickSingleEvent = (id: number) => {   
    navigate(`/event/${id}`);
  };
  
  const handleClickAddEvent = () => {
    navigate('/add-event');
  };
  
  const orderedEvents = events.events.slice().sort((a: Event, b: Event) => a.date.localeCompare(b.date))

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h2" sx={{ maxWidth: '80em', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px', marginBottom: '20px', textAlign: 'center', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
        Events Manager
      </Typography>
      <Button
        onClick={handleClickAddEvent}
        variant="contained"
        color="primary"
        sx={{
          textTransform: 'none',
          borderRadius: '20px',
          padding: '10px 20px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: '#1976d2',
            boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        Add event
      </Button>
      <EventsList eventsList={orderedEvents} onClickSingleEvent={handleClickSingleEvent} />
    </div>
  )
};

export default EventsListPage;
