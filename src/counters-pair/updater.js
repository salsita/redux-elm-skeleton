import { Updater } from 'redux-elm';

import counterUpdater, { initialModel as counterInitialModel } from '../counter/updater';

export const initialModel = {
  top: counterInitialModel,
  bottom: counterInitialModel
};

export default new Updater(initialModel)
  .case('Top', (model, ...rest) => ({ ...model, top: counterUpdater(model.top, ...rest) }))
  .case('Bottom', (model, ...rest) => ({ ...model, bottom: counterUpdater(model.bottom, ...rest) }))
  .toReducer();
