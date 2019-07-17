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
      <div className={isHidden ? 'moreinfo hidden' : 'moreinfo '}>
        <h4>
          Departing {ticket.DepStationCode} at {ticket.DepTime}
        </h4>
        <h4>
          Arriving at {ticket.ArrStationCode} at {ticket.ArrTime}
        </h4>
        <h4>Ticket Type: {ticket.TicketDescription}</h4>
        <h4>Number Of Legs On This Journey: {ticket.OutBoundLegs}</h4>
        <h4>
          Single or Return:{' '}
          {ticket.SingleOrReturn === 'S' ? 'Single' : 'Return'}
        </h4>
        <h4>Ticket Code: {ticket.TicketCode}</h4>
      </div>
    </div>
  );
}
