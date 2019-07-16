const journeysData = '../assets/results.json';

export function getJourneysData() {
  return dispatch => {
    dispatch(fetchJourneysBegin());
    return fetch(journeysData)
      .then(res => res.json())
      .then(data => {
        const tickets = [];
        data.map(journey => {
          journey.Legs[0].TKTs.map(TKT => {
            const ticket = {};
            ticket.TicketCode = TKT.TicketCode;
            ticket.DepStationCodeFull = journey.DepStationCodeFull;
            ticket.ArrStationCodeFull = journey.ArrStationCodeFull;
            ticket.DepDate = journey.DepDate;
            ticket.DepTime = journey.DepTime;
            ticket.ArrTime = journey.ArrTime;
            ticket.DepStationCode = journey.DepStationCode;
            ticket.ArrStationCode = journey.ArrStationCode;
            ticket.AdtPrice = TKT.AdtPrice;
            ticket.TicketDescription = TKT.TicketDescription;
            ticket.OutBoundLegs = journey.OutBoundLegs;
            tickets.push(ticket);
          });
        });
        dispatch(fetchJourneysSuccess(tickets));
        return tickets;
      })
      .catch(error => dispatch(fetchJourneysFailure(error)));
  };
}

export const FETCH_JOURNEYS_BEGIN = 'FETCH_JOURNEYS_BEGIN';
export const FETCH_JOURNEYS_SUCCESS = 'FETCH_JOURNEYS_SUCCESS';
export const FETCH_JOURNEYS_FAILURE = 'FETCH_JOURNEYS_FAILURE';

export const fetchJourneysBegin = () => ({
  type: FETCH_JOURNEYS_BEGIN
});

export const fetchJourneysSuccess = tickets => ({
  type: FETCH_JOURNEYS_SUCCESS,
  payload: { tickets }
});

export const fetchJourneysFailure = data => ({
  type: FETCH_JOURNEYS_FAILURE,
  payload: { error: data }
});
