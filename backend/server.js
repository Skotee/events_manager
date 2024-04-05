const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.json());

let events = [
  {
    id: 1,
    title: 'Pop music concert',
    date: '2024-03-21T10:00:00',
    description: 'Metallica Concert',
    image: 'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=600',
    eventType: 'Culture',
    phoneNumber: '123456789',
    email: 'email@metallica.com',
    location: 'Hala Stulecia, Wrocław'
  },
  {
    id: 2,
    title: 'Festive of colors',
    date: '2024-03-22T11:00:00',
    description: 'Festive of colors',
    image: 'https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=600',
    eventType: 'Culture',
    phoneNumber: '987654321',
    email: 'email2@colors.com',
    location: 'Main Square, Madrid'
  },
  {
    id: 3,
    title: 'Football match',
    date: '2025-03-22T16:00:00',
    description: 'FC Barcelona - Chelsea FC',
    image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=600',
    eventType: 'Sport',
    phoneNumber: '123456789',
    email: 'email3@football.com',
    location: 'Camp Nou, Spain'
  }
];

///////////////  Routes  ////////////////////

// Get all events
app.get('/events', (req, res) => {
  res.json(events);
});

// Get event by ID
app.get('/event/:id', (req, res) => {
  const eventId = parseInt(req.params.id);
  const event = events.find(event => event.id === eventId);
  if (event) {
    res.json(event);
  } else {
    res.status(404).json({ message: 'Event not found' });
  }
});

// Add a new event
app.post('/add', (req, res) => {
  const newEvent = req.body;
  events.push(newEvent);
  res.status(201).json(newEvent);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
