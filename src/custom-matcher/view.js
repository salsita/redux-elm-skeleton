import React from 'react';
import { forwardTo } from 'redux-elm';

import Counter from '../counter/view';
import CountersPair from '../counters-pair/view';

export default ({ model, dispatch }) => (
  <div>
    <Counter model={model.counter} dispatch={forwardTo(dispatch, 'Counter')} />
    <CountersPair model={model.countersPair} dispatch={forwardTo(dispatch, 'CountersPair')} />
    <br />
    Global Counter: {model.globalCounter}
  </div>
);

