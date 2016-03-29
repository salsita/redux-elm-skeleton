import { assert } from 'chai';

import updater from '../../src/hello-world/updater';

describe('Hello World Updater', () => {
  it('should return appropriate initialModel with falsy greeted flag', () => {
    assert.deepEqual(updater(undefined, { type: 'init' }).next(), {
      done: true,
      value: {
        greeted: false
      }
    });
  });

  it('should set greeted flag when clicking SayHi', () => {
    assert.deepEqual(updater(undefined, { type: 'SayHi' }).next(), {
      done: true,
      value: {
        greeted: true
      }
    });
  });
});