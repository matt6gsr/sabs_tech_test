import React from 'react';
import './App.css';
import { TicketList } from './components/TicketList';

function App() {
  return (
    <div className="App">
      <h1>Tickets</h1>
      <TicketList />
    </div>
  );
}

export default App;
