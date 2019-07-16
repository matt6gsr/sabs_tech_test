import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTicketData } from '../actions/ticketActions';

export const TicketList = () => {
  const tickets = useSelector(state => state.tickets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTicketData());
  }, []);

  return (
    <div className="ticket">
      {tickets.map(ticket => (
        <div key={ticket.OutBoundUid}>
          <table>
            <thead>
              <tr>
                <th>From</th>
                <th>To</th>
                <th>Time</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <th className="main-column-header">
                  {ticket.DepStationCodeFull}
                  {' to '}
                  {ticket.ArrStationCodeFull}
                </th>
                <th>
                  Departing on{' '}
                  {ticket.DepDate.replace(/(\d\d)(\d\d)(\d\d)/, '$3/$2/$1')} at{' '}
                  {ticket.DepTime}
                </th>
              </tr> */}

              {ticket.Legs[0].TKTs.map(
                TKT => (
                  <tr key={TKT.TicketCode}>
                    <td>{ticket.DepStationCodeFull}</td>
                    <td>{ticket.ArrStationCodeFull}</td>
                    <td>
                      {ticket.DepDate.replace(/(\d\d)(\d\d)(\d\d)/, '$3/$2/$1')}{' '}
                      at{' '}
                    </td>
                    <td> {ticket.DepTime}</td>
                    <td>{TKT.AdtPrice}</td>
                  </tr>
                )

                //console.log(TKT)
              )}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};
