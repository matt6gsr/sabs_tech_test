const journeysData = '../assets/results.json';

export function getJourneysData() {
  return dispatch => {
    dispatch(fetchJourneysBegin());
    return fetch(journeysData)
      .then(res => res.json())
      .then(data => {
        dispatch(fetchJourneysSuccess(data));
        return data;
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

export const fetchJourneysSuccess = data => ({
  type: FETCH_JOURNEYS_SUCCESS,
  payload: { journeys: data }
});

export const fetchJourneysFailure = data => ({
  type: FETCH_JOURNEYS_FAILURE,
  payload: { error: data }
});
