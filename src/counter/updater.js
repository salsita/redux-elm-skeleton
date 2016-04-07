import { Updater, Matchers } from 'redux-elm';

export default new Updater(0, Matchers.exactMatcher)
  .case('Increment', function*(model) {
    return model + 1;
  })
  .toReducer();
