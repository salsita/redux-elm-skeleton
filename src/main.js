import run from './boilerplate';

import view from './hello-world/view';
import updater from './hello-world/updater';

const { doRender, store } = run('app', updater);

doRender(view);

if (module.hot) {
  module.hot.accept('./hello-world/view', () => {
    doRender(require('./hello-world/view').default);
  });

  module.hot.accept('./hello-world/updater', () => {
    store.replaceReducer(require('./hello-world/updater').default);
  });
}
