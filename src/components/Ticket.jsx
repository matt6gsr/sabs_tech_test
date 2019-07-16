import React, { useState } from 'react';
import MoreInfoButton from './MoreInfoButton';

export default function Ticket({ ticket }) {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className="ticket">
      <div className="ticket-header">
        <h2>
          {ticket.DepStationCodeFull} To {ticket.ArrStationCodeFull}
        </h2>
        <h3>
          Date: {ticket.DepDate.replace(/(\d\d)(\d\d)(\d\d)/, '$3/$2/$1')}
        </h3>
        <h3>Time: {ticket.DepTime}</h3>
        <h3>Price: £{ticket.AdtPrice} per Adult</h3>
        <div>
          <MoreInfoButton isHidden={isHidden} setIsHidden={setIsHidden} />
        </div>
      </div>
      <div className={isHidden ? 'hidden' : ''}>
        <h3>
          Departing {ticket.DepStationCode} at {ticket.DepTime}
        </h3>
        <h3>
          Arriving at {ticket.ArrStationCode} at {ticket.ArrTime}
        </h3>
        <h3>Ticket Type: {ticket.TicketDescription}</h3>
        <h3>Number Of Legs On This Journey: {ticket.OutBoundLegs}</h3>
      </div>
    </div>
  );
}
