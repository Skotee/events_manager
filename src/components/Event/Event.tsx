import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles, Typography, Card, CardContent, Grid } from '@mui/material';

// import Event as IEvent from "../../types/event";

export const Event: React.FC = () => {
  // const { id } = useParams<{ id: string }>();
  // const classes = useStyles();
  // const [event, setEvent] = useState<IEvent | null>(null);

  // useEffect(() => {
  //   // Pobieranie danych wydarzenia z serwera po jego identyfikatorze
  //   fetch(`/event/${id}`) // Załóżmy, że używamy endpointu /event/ID do pobrania danych wydarzenia
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch event');
  //       }
  //       return response.json();
  //     })
  //     .then(data => setEvent(data))
  //     .catch(error => console.error(error));
  // }, [id]);

  return (
    <div>
    <h1>EventComponent</h1>
    {/* <p>Description: {event.description}</p>
      <p>phoneNumber: {event.phoneNumber}</p>
      <p>location: {event.location}</p>
      <p>email: {event.email}</p>
       */}
      {/* {event ? ( */}
        {/* <Card className={classes.root}> */}
          {/* <CardContent>
            <Typography className={classes.title} color="textPrimary" gutterBottom>
              {event.title}
            </Typography>
            <Typography className={classes.fieldValue} color="textSecondary">
              <span className={classes.fieldLabel}>Date:</span> {event.date}
            </Typography>
            <Typography className={classes.fieldValue} color="textSecondary">
              <span className={classes.fieldLabel}>Description:</span> {event.description}
            </Typography>
            <Typography className={classes.fieldValue} color="textSecondary">
              <span className={classes.fieldLabel}>Image:</span> <img src={event.image} alt="Event" style={{ maxWidth: '100%' }} />
            </Typography>
            <Typography className={classes.fieldValue} color="textSecondary">
              <span className={classes.fieldLabel}>Event Type:</span> {event.eventType}
            </Typography>
            <Typography className={classes.fieldValue} color="textSecondary">
              <span className={classes.fieldLabel}>Phone Number:</span> {event.phoneNumber}
            </Typography>
            <Typography className={classes.fieldValue} color="textSecondary">
              <span className={classes.fieldLabel}>Email:</span> {event.email}
            </Typography>
            <Typography className={classes.fieldValue} color="textSecondary">
              <span className={classes.fieldLabel}>Location:</span> {event.location}
            </Typography>
          </CardContent> */}
        {/* </Card> */}
      {/* ) : (
        <Typography>Loading...</Typography>
      )} */}
    </div>
  );
};

export default Event;
