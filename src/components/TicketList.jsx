import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getJourneysData } from '../actions/journeysActions';
import Ticket from './Ticket';

export const TicketList = () => {
  const journeys = useSelector(state => state.journeys);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJourneysData());
  }, [dispatch]);

  return (
    <div className="ticket-list">
      {journeys.map(journey =>
        journey.Legs[0].TKTs.map(TKT => (
          <Ticket key={journey.TicketCode} journey={journey} TKT={TKT} />
        ))
      )}
    </div>
  );
};
