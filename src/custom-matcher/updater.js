import { Updater, Matchers, mapEffects } from 'redux-elm';

import counterUpdater, { initialModel as counterInitialModel } from '../counter/updater';
import countersPairUpdater, { initialModel as countersPairInitialModel } from '../counters-pair/updater';

const endsWithMatcher = pattern => {
  return action => {
    if (action.type.endsWith(`.${pattern}`)) {
      return [ pattern ];
    } else {
      return false;
    }
  };
};

const initialModel = {
  counter: counterInitialModel,
  countersPair: countersPairInitialModel,
  globalCounter: 0
};

export default new Updater(initialModel)
  .case('Counter', (model, ...rest) => ({ ...model, counter: counterUpdater(model.counter, ...rest) }))
  .case('CountersPair', (model, ...rest) => ({ ...model, countersPair: countersPairUpdater(model.countersPair, ...rest) }))
  .case('Increment', model => ({
    ...model,
    globalCounter: model.globalCounter + 1
  }), endsWithMatcher)
  .toReducer();
