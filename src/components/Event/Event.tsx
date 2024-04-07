import React from 'react';
import { Typography, Grid, Paper, Divider, CardMedia } from '@mui/material';

import IEvent from 'types/event';

export interface EventProps {
  event: IEvent;
}

const Event: React.FC<EventProps> = ({event}) => {
  return (
    <div>
      {event ? ( 
        <Paper elevation={3} style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
        <Typography variant="h5" gutterBottom>
          {event.title}
        </Typography>
        <Divider />
        <CardMedia
          component="img"
          height="200"
          image={event.image}
          alt={event.title}
          style={{ marginTop: 10 }}
        />
        <Grid container spacing={1} style={{ marginTop: 10 }}>
        <Grid item xs={2}>
            <Typography>Description:</Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography>{event.description}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>Date:</Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography>
              {new Date(event.date).toLocaleString()}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>Location:</Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography>{event.location}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>Category:</Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography>{event.eventType}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>Email:</Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography>{event.email}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>Phone:</Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography>{event.phoneNumber}</Typography>
          </Grid>
        </Grid>
        </Paper>
      ) : (
      <Typography>Loading...</Typography>
    )} 
  </div>
  );
};

export default Event;
