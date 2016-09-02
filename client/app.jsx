import React from 'react';
import {render} from 'react-dom';
import initApp from './utils';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/rootReducer';

let inBrowser = typeof window !== 'undefined',
  store = createStore(
    rootReducer,
    // Resuming server state.
    inBrowser ? window.appData : {},
    inBrowser && window.devToolsExtension && window.devToolsExtension()
  ),
  config = inBrowser ? window.config : {},
  {router} = initApp(config);

render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
