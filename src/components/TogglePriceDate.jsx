import React from 'react';
import { useDispatch } from 'react-redux';
import { sortTickets } from '../actions/journeysActions';

export default function TogglePriceDate({ isSortedBy }) {
  const dispatch = useDispatch();

  return (
    <div className="sort-button">
      <button
        onClick={() =>
          dispatch(sortTickets(isSortedBy === 'time' ? 'price' : 'time'))
        }
      >
        {isSortedBy === 'time'
          ? 'Press To Sort By Price'
          : 'Press To Sort By Time'}
      </button>
    </div>
  );
}
