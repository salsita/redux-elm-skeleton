import { assert } from 'chai';
import { sideEffect } from 'redux-side-effects';

import * as Effects from '../../src/gif-viewer/effects';
import updater from '../../src/gif-viewer/updater';

describe('GifViewer Updater Behaviour Description', () => {
  it('should contain null gifUrl right after Component is initialized', () => {
    const iterator = updater(undefined, { type: 'NonExistingAction' });

    iterator.next();
    assert.equal(iterator.next().value.gifUrl, null);
  });

  it('should yield a side effect to trigger loading some funny cat GIF right after Component is initialized', () => {
    const iterator = updater(undefined, { type: 'NonExistingAction' });

    assert.deepEqual(iterator.next(), {
      done: false,
      value: sideEffect(Effects.fetchGif, 'funny cats')
    });
  });

  it('should replace gifUrl with newly provided url when NewGif kicks in', () => {
    const url = 'newlyfetchedUrl';
    const initialModel = {
      topic: 'funny cats',
      url: 'foobar'
    };

    const iterator = updater(initialModel, {
      type: 'NewGif',
      url
    });

    assert.deepEqual(iterator.next(), {
      done: true,
      value: {
        ...initialModel,
        gifUrl: url
      }
    });
  });

  it('should yield a side effect to trigger loading a GIF with topic specified in model and null gifUrl', () => {
    const initialModel = {
      topic: 'special topic',
      url: 'foobar'
    };

    const iterator = updater(initialModel, {
      type: 'RequestMore'
    });

    // Testing that Updater yields appropriate side effect
    assert.deepEqual(iterator.next(), {
      done: false,
      value: sideEffect(Effects.fetchGif, initialModel.topic)
    });

    // Testing model mutation, gifUrl must be null
    assert.deepEqual(iterator.next(), {
      done: true,
      value: {
        ...initialModel,
        gifUrl: null
      }
    });
  });
});