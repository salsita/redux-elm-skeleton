import React from 'react';
import { view } from 'redux-elm';

export default view(({ model, dispatch }) => (
  <button onClick={() => dispatch({ type: 'Increment' })}>Clicked {model} times</button>
));
