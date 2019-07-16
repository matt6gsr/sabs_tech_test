import React, { useState } from 'react';
import MoreInfoButton from './MoreInfoButton';

export default function Ticket({ journey, TKT }) {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className="ticket">
      <div className="ticket-header">
        <h2>
          {journey.DepStationCodeFull} To {journey.ArrStationCodeFull}
        </h2>
        <h3>
          Date: {journey.DepDate.replace(/(\d\d)(\d\d)(\d\d)/, '$3/$2/$1')}
        </h3>
        <h3>Time: {journey.DepTime}</h3>
        <h3>Price: £{TKT.AdtPrice} per Adult</h3>
        <div>
          <MoreInfoButton isHidden={isHidden} setIsHidden={setIsHidden} />
        </div>
      </div>
      <div className={isHidden ? 'hidden' : ''}>
        <h3>
          Departing {journey.DepStationCode} at {journey.DepTime}
        </h3>
        <h3>
          Arriving at {journey.ArrStationCode} at {journey.ArrTime}
        </h3>
        <h3>Ticket Type: {TKT.TicketDescription}</h3>
        <h3>Number Of Legs On This Journey: {journey.OutBoundLegs}</h3>
      </div>
    </div>
  );
}
