import React from 'react';

export default ({ model, dispatch }) => (
  <button onClick={() => dispatch({ type: 'Increment' })}>Clicked {model} times</button>
);
