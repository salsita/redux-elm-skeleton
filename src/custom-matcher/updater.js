import { Updater, Matchers, mapEffects } from 'redux-elm';

import counterUpdater from '../counter/updater';
import countersPairUpdater from '../counters-pair/updater';

function* init() {
  return {
    counter: yield* mapEffects(counterUpdater(), 'Counter'),
    countersPair: yield* mapEffects(countersPairUpdater(), 'CountersPair'),
    globalCounter: 0
  };
}

const endsWithMatcher = pattern => {
  return action => {
    if (action.type.endsWith(`.${pattern}`)) {
      return [ pattern ];
    } else {
      return false;
    }
  };
};

export default new Updater(init)
  .case('Counter', function*(model, action) {
    return {
      ...model,
      counter: yield* mapEffects(counterUpdater(model.counter, action), 'Counter')
    };
  })
  .case('CountersPair', function*(model, action) {
    return {
      ...model,
      countersPair: yield* mapEffects(countersPairUpdater(model.countersPair, action), 'CountersPair')
    };
  })
  .case('Increment', function*(model, action) {
    return {
      ...model,
      globalCounter: model.globalCounter + 1
    };
  }, endsWithMatcher)
  .toReducer();
