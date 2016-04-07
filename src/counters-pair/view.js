import React from 'react';
import { forwardTo } from 'redux-elm';

import Counter from '../counter/view';

export default ({ model, dispatch }) => (
  <div>
    Top: <Counter model={model.top} dispatch={forwardTo(dispatch, 'Top')} />
    <br />
    Bottom: <Counter model={model.bottom} dispatch={forwardTo(dispatch, 'Bottom')} />
  </div>
);

