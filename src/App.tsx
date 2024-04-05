import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EventsListPage from 'pages/EventsListPage';
import SingleEventPage from 'pages/SingleEventPage';
import AddEventPage from 'pages/AddEventPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<EventsListPage />}></Route>
        <Route path='/view-event' element={<SingleEventPage />}></Route>
        <Route path='/add-event' element={<AddEventPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
