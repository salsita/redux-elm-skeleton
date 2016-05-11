import React from 'react';
import { view, forwardTo } from 'redux-elm';

import Counter from '../counter/view';

export default view(({ model, dispatch }) => (
  <div>
    Top: <Counter model={model.top} dispatch={forwardTo(dispatch, 'Top')} />
    <br />
    Bottom: <Counter model={model.bottom} dispatch={forwardTo(dispatch, 'Bottom')} />
  </div>
));
