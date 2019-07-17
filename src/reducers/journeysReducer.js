import {
  FETCH_JOURNEYS_BEGIN,
  FETCH_JOURNEYS_SUCCESS,
  FETCH_JOURNEYS_FAILURE,
  SORT_TICKETS_BY_PRICE,
  SORT_TICKETS_BY_TIME
} from '../actions/journeysActions';

const initialState = {
  tickets: [],
  error: null,
  isSortedByDate: true,
  isSortedBy: 'time'
};

export default function journeysReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case FETCH_JOURNEYS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_JOURNEYS_SUCCESS:
      return {
        ...state,
        tickets: payload.tickets
      };

    case FETCH_JOURNEYS_FAILURE:
      return {
        ...state,
        error: payload.error
      };

    case SORT_TICKETS_BY_PRICE:
      return {
        ...state,
        type: SORT_TICKETS_BY_PRICE,
        tickets: payload.tickets,
        isSortedBy: payload.isSortedBy
      };

    case SORT_TICKETS_BY_TIME:
      return {
        ...state,
        type: SORT_TICKETS_BY_TIME,
        tickets: payload.tickets,
        isSortedBy: payload.isSortedBy
      };

    default:
      return state;
  }
}
