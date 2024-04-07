import { render, screen } from '@testing-library/react';
import { EventsList, EventsListProps } from './EventsList';

describe('EventsList component', () => {
  const eventsList: EventsListProps['eventsList'] = [
    {
      id: 1,
      title: 'Event 1',
      date: '2024-04-01T12:00:00',
      description: 'Description 1',
      image: 'image1.jpg',
      eventType: 'Sport',
      phoneNumber: '1234567890',
      email: 'email1@example.com',
      location: 'Location 1',
    },
    {
      id: 2,
      title: 'Event 2',
      date: '2024-04-02T12:00:00',
      description: 'Description 2',
      image: 'image2.jpg',
      eventType: 'Culture',
      phoneNumber: '1234567891',
      email: 'email2@example.com',
      location: 'Location 2',
    },
  ];

  it('renders list items with correct event details', () => {
    render(<EventsList eventsList={eventsList} onClickSingleEvent={() => {}} />);
    
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(eventsList.length);

    listItems.forEach((item, index) => {
      expect(item).toHaveTextContent(eventsList[index].title);
      expect(item).toHaveTextContent(new Date(eventsList[index].date).toLocaleString());
    });
  });
});
