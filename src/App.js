import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { TicketList } from './components/TicketList';

function App() {
  const isSortedBy = useSelector(state => state.isSortedBy);
  return (
    <div className="App">
      <h1 className="header-h1">
        {isSortedBy === 'price'
          ? 'Rail Tickets by Price'
          : 'Rail Tickets by Time'}
      </h1>
      <TicketList />
    </div>
  );
}

export default App;
