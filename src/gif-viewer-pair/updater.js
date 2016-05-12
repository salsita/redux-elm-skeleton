import { Updater, wrapAction } from 'redux-elm';
import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';

import gifViewerUpdater, { init as gifViewerInit, requestMore } from '../gif-viewer/updater';

const initialModel = {
  top: gifViewerInit('funny cats'),
  bottom: gifViewerInit('funny dogs')
};

function* fetchAll() {
  yield put(wrapAction(requestMore(), 'Top'));
  yield put(wrapAction(requestMore(), 'Bottom'));
}

function* saga() {
  yield* takeEvery('Load', fetchAll);
}

export default new Updater(initialModel, saga)
  .case('Top', (model, action) =>
    ({ ...model, top: gifViewerUpdater(model.top, action) }))
  .case('Bottom', (model, action) =>
    ({ ...model, bottom: gifViewerUpdater(model.bottom, action) }))
  .toReducer();