import React from 'react';

export default function MoreInfoButton({ isHidden, setIsHidden }) {
  return (
    <div>
      <button onClick={() => setIsHidden(!isHidden)}>
        {isHidden ? 'Show More Info' : 'Hide Info'}
      </button>
    </div>
  );
}
