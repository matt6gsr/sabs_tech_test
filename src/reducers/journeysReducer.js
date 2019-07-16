import {
  FETCH_JOURNEYS_BEGIN,
  FETCH_JOURNEYS_SUCCESS,
  FETCH_JOURNEYS_FAILURE
} from '../actions/journeysActions';

const initialState = {
  tickets: [],
  loading: false,
  error: null
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
        loading: false,
        tickets: payload.tickets
      };

    case FETCH_JOURNEYS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.error
      };

    default:
      return state;
  }
}
