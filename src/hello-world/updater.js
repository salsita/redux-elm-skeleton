import { Updater } from 'redux-elm';

const initialModel = {
  greeted: false
};

export default new Updater(initialModel)
  .case('SayHi', model => ({ ...model, greeted :true }))
  .toReducer();
