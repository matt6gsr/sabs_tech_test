import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getJourneysData } from '../actions/journeysActions';
import Ticket from './Ticket';
import uuid from 'uuid/v4';
import TogglePriceDate from './TogglePriceDate';

export const TicketList = () => {
  const tickets = useSelector(state => state.tickets);
  const isSortedBy = useSelector(state => state.isSortedBy);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJourneysData());
  }, [dispatch]);

  return (
    <div className="ticket-list">
      <div>
        <TogglePriceDate isSortedBy={isSortedBy} />
      </div>
      {tickets.map(ticket => (
        <Ticket key={uuid()} ticket={ticket} />
      ))}
    </div>
  );
};
