import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getJourneysData } from '../actions/journeysActions';
import Ticket from './Ticket';

export const TicketList = () => {
  const tickets = useSelector(state => state.tickets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJourneysData());
  }, [dispatch]);

  return (
    <div className="ticket-list">
      {tickets.map(ticket => (
        <Ticket key={ticket.TicketCode} ticket={ticket} />
      ))}
    </div>
  );
};
