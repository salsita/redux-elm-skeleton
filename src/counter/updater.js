import { Updater } from 'redux-elm';

export const initialModel = 0;

export default new Updater(initialModel)
  .case('Increment', model => model + 1)
  .toReducer();
