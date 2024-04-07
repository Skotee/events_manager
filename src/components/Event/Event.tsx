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
          <Typography variant="body1">Description:</Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">{event.description}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body1">Date:</Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            {new Date(event.date).toLocaleString()}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body1">Location:</Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">{event.location}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body1">Email:</Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">{event.email}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body1">Phone:</Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">{event.phoneNumber}</Typography>
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
