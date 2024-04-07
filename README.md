
# Events manager

With this application you can manage all of your events - display them and add new ones!


## Installation

Clone the project

```bash
  git clone https://github.com/Skotee/events_manager
```

Go to the project directory

```bash
  cd events-mananger
```

Install all dependencies for both - client side and backend side.

```bash
  npm install
  cd backend
  npm install
```

## Run Locally


1. Start the backend:
Location:
`events_manager\backend`

```bash
  npm run start
```

Backend will start at http://localhost:3000/ address

2. Start the client side:
Location:
`events_manager`

```bash
  npm run start
```

Client side will start at http://localhost:5000/ address

## Running Tests

There is one unit test provided here: `src\components\EventsList\EventsList.test.tsx`. 

To run tests, run the following command

```bash
  npm run test
```


## Features

- Display list of all events under /events endpoint
- Display specific event's details after clicking on that event from events list
- Create new event with full validation



## Tech Stack

**Client:** React, Redux Toolkit (using createAsyncThunk), Material UI, Formik

**Server:** Node, Express


## Authors

- [@Skotee](https://github.com/Skotee)

