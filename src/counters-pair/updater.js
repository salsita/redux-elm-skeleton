import { Updater, Matchers, mapEffects } from 'redux-elm';

import counterUpdater from '../counter/updater';

function* init() {
  return {
    top: yield* mapEffects(counterUpdater(), 'Top'),
    bottom: yield* mapEffects(counterUpdater(), 'Bottom')
  };
}

export default new Updater(init)
  .case('Top', function*(model, action) {
    return {
      ...model,
      top: yield* mapEffects(counterUpdater(model.top, action), 'Top')
    };
  })
  .case('Bottom', function*(model, action) {
    return {
      ...model,
      bottom: yield* mapEffects(counterUpdater(model.bottom, action), 'Bottom')
    };
  })
  .toReducer();
