import { Updater, Matchers } from 'redux-elm';

import gifViewerUpdater,
  { init as gifViewerInit } from '../gif-viewer/updater';

const initialModel = {
  topic: '',
  gifViewers: []
};

export default new Updater(initialModel)
  .case('ChangeTopic', (model, { value }) => ({ ...model, topic: value }))
  .case('Create', model => ({
    ...model,
    topic: '',
    gifViewers: [...model.gifViewers, gifViewerInit(model.topic)]
  }))
  .case('GifViewer', (model, action) => {
    const numericGifViewerIndex = parseInt(action.args.param, 10);

    return {
      ...model,
      gifViewers: model.gifViewers.map((gifViewerModel, index) => {
        if (index === numericGifViewerIndex) {
          return gifViewerUpdater(gifViewerModel, action);
        } else {
          return gifViewerModel;
        }
      })
    };
  }, Matchers.parameterizedMatcher)
  .toReducer();