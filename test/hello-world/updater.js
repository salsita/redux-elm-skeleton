import { assert } from 'chai';

import updater from '../../src/hello-world/updater';

describe('Hello World Updater', () => {
  it('should return appropriate initialModel with falsy greeted flag', () => {
    assert.deepEqual(updater(), { greeted: false });
  });

  it('should set greeted flag when clicking SayHi', () => {
    let model = undefined;
    model = updater();
    model = updater(model, { type: 'SayHi' });
    assert.deepEqual(model, { greeted: true });
  });
});