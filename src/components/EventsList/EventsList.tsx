import { List, ListItem, ListItemText } from '@mui/material';
import Event from '../../types/event';

export interface EventsListProps {
  eventsList: Event[];
  onClickSingleEvent: (id: number) => void;
}

export const EventsList: React.FC<EventsListProps> = ({ eventsList, onClickSingleEvent }) => {
  const subduedColors = ['#FFCCCB', '#FFE4C4', '#D8BFD8', '#B0E0E6', '#90EE90', '#F0E68C', '#FFDAB9'];

  return (
    <List sx={{}}>
      {eventsList.map((event, index) => (
        <ListItem
          key={`${event.id}-${index}`} //for id uniqueness
          button
          onClick={() => onClickSingleEvent(event.id)}
          sx={{
            bgcolor: subduedColors[index % subduedColors.length],
            marginBottom: 1, 
          }}
          role="listitem"
        >
          <ListItemText
            primary={event.title}
            secondary={new Date(event.date).toLocaleString()} 
          />
        </ListItem>
      ))}
    </List>
  );
}
