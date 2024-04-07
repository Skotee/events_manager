import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { styled } from '@mui/system';
import { Button, Typography } from "@mui/material";

import Event from './../types/event';
import { EventsList } from "../components/EventsList/EventsList"
import { fetchEvents, getEventsStatus, selectAllEvents } from "features/event/eventSlice";
import { AppDispatch } from "store/store";

const StyledContainer = styled('div')({
  padding: "20px"
});

const StyledButton = styled(Button)({
  textTransform: 'none',
  borderRadius: '20px',
  padding: '10px 20px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#1976d2',
    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
  },
});

const StyledTitle = styled(Typography)({
  maxWidth: '80em', 
  backgroundColor: '#f0f0f0', 
  padding: '10px', 
  borderRadius: '5px', 
  marginBottom: '20px', 
  textAlign: 'center', 
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' 
});

const EventsListPage = () => {
  const events = useSelector(selectAllEvents)
  const status = useSelector(getEventsStatus)
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

  let content;
  if (status === 'loading') {
      content = <p>"Loading..."</p>;
  } else if (status === 'succeeded') {
      content = (<EventsList eventsList={orderedEvents} onClickSingleEvent={handleClickSingleEvent} />);
  } else if (status === 'failed') {
      content = <p>Error</p>;
  }

  return (
    <StyledContainer>
      <StyledTitle variant="h2">
        Events Manager
      </StyledTitle>
      <StyledButton
        onClick={handleClickAddEvent}
        variant="contained"
        color="primary"
      >
        Add event
      </StyledButton>
      {content}
    </StyledContainer>
  )
};

export default EventsListPage;
